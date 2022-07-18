<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PropertyResource;
use App\Models\Property;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

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
                function ($query) use ($type) {
                    $query->where('type', $type);
                })
            ->when($rooms,
                function ($query) use ($rooms) {
                    ($rooms == 5) ? $query->where('rooms', '>=', $rooms) : $query->where('rooms', '=', $rooms);
                })
            ->when($bathrooms,
                function ($query) use ($bathrooms) {
                    ($bathrooms == 5) ? $query->where('bathrooms', '>=', $bathrooms)
                        : $query->where('bathrooms', '=', $bathrooms);
                })
            ->when($request->input('price'),
                function ( $query) use ($price) {
                    $query->whereBetween('price', explode(',', $price) );
                })
            ->when($search ,
                function ( $query) use ($search) {
                    $query->where('name', 'like', "%$search");
                })
            ->get();

        return PropertyResource::collection($properties);
    }

    public function search(Request $request)
    {
        $text = $request->input('text');
        $properties = Property::where('name','like', "%$text%")->get();

        return PropertyResource::collection($properties);
    }

}
