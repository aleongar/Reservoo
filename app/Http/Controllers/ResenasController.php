<?php

namespace App\Http\Controllers;

use App\Models\Resena;
use Illuminate\Http\Request;

class ResenasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Resena::with('user')->with('restaurante')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $resena = new Resena();
        $resena->calificacion = $request->calificacion;
        if($request->has('contenido')){
            $resena->contenido = $request->contenido;
        }
        $resena->user_id = $request->user;
        $resena->restaurante_id = $request->restaurante;
        $resena->save();
        return $resena;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Resena::with('user')->findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $resena = Resena::findOrFail($id);
        $resena->calificacion = $request->calificacion;
        if($request->has('contenido')){
            $resena->contenido = $request->contenido;
        }
        $resena->user_id = $request->user;
        $resena->restaurante_id = $request->restaurante;
        $resena->save();
        return $resena;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Resena::findOrFail($id)->delete();
    }
}
