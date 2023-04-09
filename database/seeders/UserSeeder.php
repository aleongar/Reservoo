<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //create admin
        $user = new User();
        $user->name = 'admin';
        $user->email = 'admin@reservoo.com';
        $user->password = bcrypt('fideito23');
        $user->rol = 1;
        $user->save();

        //create the rest of users
        User::factory()->count(20)->create();
    }
}
