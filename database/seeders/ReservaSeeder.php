<?php

namespace Database\Seeders;

use App\Models\Reserva;
use App\Models\Restaurante;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ReservaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i = 0; $i < random_int(3, 10); $i++){
            $user = User::inRandomOrder()->first();
            $restaurant = Restaurante::inRandomOrder()->first();

            Reserva::factory()->count(random_int(1, 3))->create(
                ['user_id' => $user->id,
                'restaurante_id' => $restaurant->id]
            );

        }
    }
}
