<?php

namespace App\Http\Controllers;

use App\Models\Comentario;
use Illuminate\Http\Request;

class ComentariosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Comentario::with('resena')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $comentario = new Comentario();
        $comentario->contenido = $request->contenido;
        $comentario->resena_id = $request->resena;
        $comentario->save();
        return $comentario;
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
        $comentario = Comentario::findOrFail($id);
        $comentario->contenido = $request->contenido;
        $comentario->resena_id = $request->resena;
        $comentario->save();
        return $comentario;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Comentario::findOrFail($id)->delete();
    }
}
