<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class PropertyCollection extends ResourceCollection
{

    public function toArray($request):array
    {
        return [
            'data' => $this->collection
        ];
    }
}
