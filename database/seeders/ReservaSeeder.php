<?php

namespace Database\Seeders;

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
        for($i = 0; $i < 3; $i++){
            $user = User::inRandomOrder()->first();
            $restaurant = Restaurante::inRandomOrder()->first();

            DB::insert('insert into reserva (user_id, restaurante_id, h_reserva, created_at, updated_at) values (?, ?, ?, ?, ?)', [$user->id, $restaurant->id, fake()->dateTime(), \Carbon\Carbon::now(), \Carbon\Carbon::now()]);
        }
    }
}
