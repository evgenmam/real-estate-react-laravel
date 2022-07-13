<?php

namespace Database\Seeders;

use App\Models\Property;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
//         $user = \App\Models\User::factory(10)->create();

//         \App\Models\User::factory()->create([
//             'name' => 'Alex',
//             'email' => 'alex@mail.com',
//         ]);
        $types = ['house', 'commercial','apartment', 'vacant'];

        foreach($types as $type) {
            Property::factory(5)
                ->for(
                    User::factory()->state(['name' => 'Alex'])
                )
                ->create(['type' => $type]);
        }



    }
}
