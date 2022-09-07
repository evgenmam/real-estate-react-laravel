<?php

namespace App\GraphQL\Queries;

use App\Http\Resources\PropertyCollection;
use App\Models\Property;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

final class FilterProperties
{
    public function __invoke($root, array $args): Collection
    {
        $rooms = $args['rooms'];
        $bathrooms = $args['bathrooms'];
        $search = $args['search'];
        $types = $args['types'];
        $price = $args['price'];

        $properties = Property::query()
            ->when($types, function (Builder $query, $types) {
                $query->whereIn('type', $types);
            })
            ->when($rooms,
                function (Builder $query, $rooms) {
                    ($rooms == 5) ? $query->where('rooms', '>=', 1)
                        : $query->where('rooms', '<=', $rooms);
                })
            ->when($bathrooms,
                function (Builder $query, $bathrooms) {
                    ($bathrooms == 5) ? $query->where('bathrooms', '>=', 1)
                        : $query->where('bathrooms', '<=', $bathrooms);
                })
            ->when($price,
                function (Builder $query, $price) {
                    $query->whereBetween('price',  $price);
                })
            ->when($search,
                function (Builder $query, string $search) {
                    $query->where('name', 'like', "%$search%");
                })
            ->get();

        return $properties;
    }
}
