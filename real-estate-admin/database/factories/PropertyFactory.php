<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

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
            'type' => $this->faker->word(),
            'img_path' => $this->faker->image('public',360, 360, 'animals', true),
            'rooms' => $this->faker->randomDigitNotNull(),
            'bathrooms' => $this->faker->randomDigitNotNull(),
            'latitude' => $this->faker->latitude($min = -90, $max = 90),
            'longitude' => $this->faker->longitude($min = -180, $max = 180) ,
        ];
    }
}
