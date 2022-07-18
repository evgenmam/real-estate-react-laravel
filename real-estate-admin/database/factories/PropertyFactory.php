<?php

namespace Database\Factories;

use App\Enums\PropertyType;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Property>
 */
class PropertyFactory extends Factory
{


    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->streetName(),
            'price' => $this->faker->randomNumber(5, true),
            'description' => $this->faker->word(),
            'type' => PropertyType::getRandomValue(),
            'img_path' => Storage::putFile('images', new File('test_image.jpg')),
            'rooms' => $this->faker->randomDigitNotNull(),
            'bathrooms' => $this->faker->randomDigitNotNull(),
            'latitude' => $this->faker->latitude($min = -90, $max = 90),
            'longitude' => $this->faker->longitude($min = -180, $max = 180) ,
            'user_id' => User::factory()->createOne()
        ];
    }
}
