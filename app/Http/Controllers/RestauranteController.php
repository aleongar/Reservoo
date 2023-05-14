<?php

namespace App\Http\Controllers;

use App\Models\Restaurante;
use App\Models\Restaurante_media;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class RestauranteController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:sanctum')->except('index', 'show');
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Restaurante::with('user')->with('restaurante_media')->get();
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

    public function storeWithFiles(Request $request)
    {
        $restaurante = new Restaurante();
        if($request->has('id'))
            $restaurante = Restaurante::findOrFail($request->id); //nah, solo nuestra cabeza funciona de forma diferente
        $restaurante->nombre = $request->nombre;
        $restaurante->descripcion = $request->descripcion;
        $restaurante->aforo = $request->aforo;
        $restaurante->h_manana = $request->h_manana;
        $restaurante->h_tarde = $request->h_tarde;
        $restaurante->direccion = $request->direccion;
        $restaurante->user_id = $request->user;
        $restaurante->save();

        for($i = 0; $i < $request->cantidad_fotos; $i++){
            $foto = $request->{'foto'.$i};
            $name = fake()->uuid() .'.'. $foto->extension();
            Storage::putFileAs('public/uploads/user-'.$request->user.'/', $foto, $name);
            $media = new Restaurante_media();
            $media->filename = $name;
            $media->format = $foto->extension();
            $media->online = 0;
            $media->restaurante_id = $restaurante->id;
            $media->save();
        }
        if($request->has('carta') && !empty($request->carta)){
            $media = new Restaurante_media();
            if($request->online == '1'){
                $carta = $request->carta;
                $name = 'carta-'.fake()->uuid().'.'. $carta->extension();
                Storage::putFileAs('public/uploads/user-'.$request->user.'/', $carta, $name);
                $media->filename = $name;
                $media->format = $carta->extension();
                $media->online = '0';
            }else{
                $media->filename = $request->carta;
                $media->format = 'pdf';
                $media->online = '1';
            }
            $media->restaurante_id = $restaurante->id;
            $media->save();
        }
        return $restaurante;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Restaurante::with('restaurante_media')->findOrFail($id);
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

    public function updateWithFiles(Request $request, string $id){
        $restaurante = Restaurante::findOrFail($id);
        $restaurante->nombre = $request->nombre;
        $restaurante->descripcion = $request->descripcion;
        $restaurante->aforo = $request->aforo;
        $restaurante->h_manana = $request->h_manana;
        $restaurante->h_tarde = $request->h_tarde;
        $restaurante->direccion = $request->direccion;
        $restaurante->user_id = $request->user;
        $restaurante->save();
        for($i = 0; $i < $request->cantidad_fotos; $i++){
            $foto = $request->{'foto'.$i};
            $name = fake()->uuid() .'.'. $foto->extension();
            Storage::putFileAs('public/uploads/user-'.$request->user.'/', $foto, $name);
            $media = new Restaurante_media();
            $media->filename = $name;
            $media->format = $foto->extension();
            $media->online = 0;
            $media->restaurante_id = $restaurante->id;
            $media->save();
        }

        $media = new Restaurante_media();
        if($request->online == '1'){
            $carta = $request->carta;
            $name = 'carta-'.fake()->uuid().'.'. $carta->extension();
            Storage::putFileAs('public/uploads/user-'.$request->user.'/', $carta, $name);
            $media->filename = $name;
            $media->format = $carta->extension();
            $media->online = '0';
        }else{
            $media->filename = $request->carta;
            $media->format = 'pdf';
            $media->online = '1';
        }
        $media->restaurante_id = $restaurante->id;
        $media->save();
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

    public function removeImage(string $id){
        $media = Restaurante_media::findOrFail($id);
        Storage::delete('public/uploads/user-'.$media->restaurante->user_id.'/'.$media->filename);
        $media->delete();
        return ['result' => 'success'];
    }

}
