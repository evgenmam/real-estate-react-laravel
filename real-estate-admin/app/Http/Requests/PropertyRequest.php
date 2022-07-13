<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

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
            'name' => ['required'],
            'description' => ['required'],
            'type' => ['required',Rule::in(['house','commercial','apartment','vacant'])],
            'rooms' => ['required','integer', 'min:1'],
            'bathrooms' => ['required','integer', 'min:1'],
            'price' => ['required', 'integer', 'min:1'],
            'img_path' => ['required','mimes:jpg,png,jpeg'],
            'latitude' => ['required', 'numeric', 'between:-90,90'],
            'longitude' => ['required', 'numeric', 'between:-180,180']
        ];
    }
}
