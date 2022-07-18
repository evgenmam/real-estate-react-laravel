<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PropertyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'bathrooms' => $this->bathrooms,
            'created_at' => $this->created_at,
            'description' => $this->description,
            'id' => $this->id,
            'latitude' => $this->latitude,
            'longitude' => $this->longitude,
            'name' => $this->name,
            'image' => $this->image(),
            'price' => $this->price,
            'rooms' => $this->rooms,
            'type' => $this->type,
            'updated_at' => $this->updated_at
        ];
    }
}
