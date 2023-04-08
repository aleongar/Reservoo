<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $rol = new \App\Models\Rol();
        $rol->name = 'Admin';
        $rol->save();
        $rol = new \App\Models\Rol();
        $rol->name = 'Empresa';
        $rol->save();
        $rol = new \App\Models\Rol();
        $rol->name = 'Cliente';
        $rol->save();
    }
}
