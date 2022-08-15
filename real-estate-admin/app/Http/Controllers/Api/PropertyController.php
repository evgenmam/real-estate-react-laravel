<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PropertyCollection;
use App\Models\Property;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class PropertyController extends Controller
{
    public function index(Request $request): PropertyCollection
    {
//        logger($request->all());

        $rooms = $request->input('rooms');
        $bathrooms = $request->input('bathrooms');
        $search = $request->input('search');
        $types =  $request->input('types');
        $price = $request->input('price');

        $properties = Property::query()
            ->when($types, function (Builder $query, $types) {
                    $query->whereIn('type', explode(',', $types));
                })
            ->when($rooms,
                function (Builder $query, $rooms)
                {
                    ($rooms == 5) ? $query->where('rooms', '>=', 1)
                        : $query->where('rooms', '<=', $rooms);
                })
            ->when($bathrooms,
                function (Builder $query, $bathrooms)
                {
                    ($bathrooms == 5) ? $query->where('bathrooms', '>=', 1)
                        : $query->where('bathrooms', '<=', $bathrooms);
                })
            ->when($price,
                function (Builder $query, $price)
                {
                    $query->whereBetween('price', explode(',', $price)) ;
                })
            ->when($search ,
                function (Builder $query, string $search)
                {
                    $query->where('name', 'like', "%$search%");
                })
            ->get();

        return new PropertyCollection($properties);
    }
 }
