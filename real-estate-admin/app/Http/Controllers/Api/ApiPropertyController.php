<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PropertyResource;
use App\Models\Property;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class ApiPropertyController extends Controller
{
    public function index(Request $request) {

        $properties = Property::query()
        ->when($request->input('type'),
            fn (Builder $query, mixed $type) =>
                $query->where('type',$type))
        ->when($request->input('rooms'),
            fn (Builder $query, mixed $rooms) =>
                $query->where('rooms',$rooms))
        ->when($request->input('bathrooms'),
            fn (Builder $query, mixed $bathrooms) =>
                $query->where('bathrooms',$bathrooms))
        ->get();

        return PropertyResource::collection($properties);
    }
}
