<?php

namespace Database\Seeders;

use App\Models\Restaurante;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RestauranteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();
        $users->each(function ($user){
            if($user->rol == 3){
                Restaurante::factory()->count(random_int(1, 3))->create(['user_id' => $user->id]);
            }
            return;
        });
    }
}
