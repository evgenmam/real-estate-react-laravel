<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PropertyResource;
use App\Models\Property;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use phpDocumentor\Reflection\Types\Boolean;

class PropertyController extends Controller
{
    public function index(Request $request)
    {
        $rooms = $request->input('rooms');
        $bathrooms = $request->input('bathrooms');
        $search = $request->input('search');
        $type = $request->input('type');
        $price = $request->input('price');

        $properties = Property::query()
            ->when($type,
                function (Builder $query) use ($type) {
                    return $query->where('type', $type);
                })
            ->when($rooms,
            function ($query) use ($rooms) {
                return ($rooms == 5) ? $query->where('rooms', '>=', $rooms) : $query->where('rooms', '=', $rooms);
            })
            ->when($bathrooms,
                function ($query) use ($bathrooms) {
                    return ($bathrooms == 5) ? $query->where('bathrooms', '>=', $bathrooms)
                        : $query->where('bathrooms', '=', $bathrooms);
                })
            ->when($request->input('price'),
                function ( $query) use ($price) {
                    return $query->whereBetween('price', explode(',', $price) );
                })
            ->when($search ,
                function ( $query) use ($search) {
                    return $query->where('name', 'like', "%$search");
                })
            ->get();

        return PropertyResource::collection($properties);
    }

    public function search(Request $request)
    {
        $search = $request->input('search');
        $properties = Property::where('name','like', "%$search%")->get();

        return PropertyResource::collection($properties);
    }

}
