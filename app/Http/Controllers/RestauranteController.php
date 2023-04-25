<?php

namespace App\Http\Controllers;

use App\Models\Restaurante;
use Illuminate\Http\Request;

class RestauranteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Restaurante::with('user')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $restaurante = new Restaurante();
        $restaurante->nombre = $request->nombre;
        $restaurante->descripcion = $request->descripcion;
        $restaurante->aforo = $request->aforo;
        $restaurante->h_manana = $request->h_manana;
        $restaurante->h_tarde = $request->h_tarde;
        $restaurante->direccion = $request->direccion;
        $restaurante->user_id = $request->user;
        $restaurante->save();
        return $restaurante;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $restaurante = Restaurante::findOrFail($id);
        $restaurante->nombre = $request->nombre;
        $restaurante->descripcion = $request->descripcion;
        $restaurante->aforo = $request->aforo;
        $restaurante->h_manana = $request->h_manana;
        $restaurante->h_tarde = $request->h_tarde;
        $restaurante->direccion = $request->direccion;
        $restaurante->user_id = $request->user;
        $restaurante->save();
        return $restaurante;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $restaurante = Restaurante::findOrFail($id);
        $restaurante->delete();
        return $restaurante;
    }
}
