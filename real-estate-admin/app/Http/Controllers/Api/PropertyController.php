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

        $properties = Property::query()
            ->when($request->input('type'),
                fn (Builder $query, mixed $type) =>
                    $query->where('type', $type))
            ->when($rooms,
            function ($query) use ($rooms) {
                return ($rooms == 5) ? $query->where('rooms','>=', $rooms) : $query->where('rooms','=', $rooms);
            })
            ->when($bathrooms,
                function ($query) use ($bathrooms) {
                    return ($bathrooms == 5) ? $query->where('bathrooms','>=', $bathrooms)
                        : $query->where('bathrooms','=', $bathrooms);
                })
            ->when($request->input('price'),
                fn (Builder $query, mixed $price) =>
                    $query->whereBetween('price', explode(',', $price) ))
            ->get();

        return PropertyResource::collection($properties);
    }

}
