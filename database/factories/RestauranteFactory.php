<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Restaurante>
 */
class RestauranteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $h_manana = $this->generateHManana();
        $h_tarde = $this->generateHTarde();
        return [
            'nombre' => fake()->company(),
            'descripcion' => fake()->text(),
            'aforo' => fake()->numberBetween(20, 50),
            'h_manana' => $h_manana,
            'h_tarde' => $h_tarde,
            'direccion' => fake()->address(),
        ];
    }

    private function generateHManana(){
        $start = fake()->numberBetween(8,14);
        $end = fake()->numberBetween($start + 1, 17);

        return $start . ':00-' . $end . ':00';
    }

    private function generateHTarde(){
        $start = fake()->numberBetween(18,20);
        $end = fake()->numberBetween($start + 1, 23);

        return $start . ':00-' . $end . ':00';
    }
}
