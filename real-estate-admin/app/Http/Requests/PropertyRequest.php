<?php

namespace App\Http\Requests;

use App\Enums\PropertyType;
use BenSampo\Enum\Rules\EnumValue;
use Illuminate\Foundation\Http\FormRequest;

class PropertyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => ['required', 'min:3'],
            'description' => ['required'],
            'type' => ['required', new EnumValue(PropertyType::class)],
            'rooms' => ['required', 'integer', 'min:1'],
            'bathrooms' => ['required', 'integer', 'min:1'],
            'price' => ['required', 'integer', 'min:1'],
            'img_path' => [
                $this->route('property') ? 'sometimes' : 'required',
                'mimes:jpg,png,jpeg',
            ],
            'latitude' => ['required', 'numeric', 'between:-90,90'],
            'longitude' => ['required', 'numeric', 'between:-180,180'],
        ];
    }
//

    public function messages()
    {
        return [
            'img_path.required' => 'the image is required',
            'img_path.mimes' => 'the image must be a file of type: jpg, png or jpeg',
        ];
    }
}
