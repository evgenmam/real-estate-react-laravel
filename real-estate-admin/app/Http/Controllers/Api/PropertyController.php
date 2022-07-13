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
    public function index(Request $request): AnonymousResourceCollection
    {
        $properties = Property::query()
            ->when($request->input('type'),
                fn (Builder $query, mixed $type) =>
                    $query->where('type', $type))
            ->when($request->input('rooms'),
                fn (Builder $query, mixed $rooms) =>
                    $query->where('rooms', $rooms))
            ->when($request->input('bathrooms'),
                fn (Builder $query, mixed $bathrooms) =>
                    $query->where('bathrooms', $bathrooms))
            ->when($request->input('price'),
                fn (Builder $query, mixed $price) =>
                    $query->whereBetween('price', explode(',', $price) ))
            ->get();

        return PropertyResource::collection($properties);
    }
}
