<?php

namespace App\Http\Controllers;

use App\Models\Restaurante;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum')->except('store');
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return User::all();
    }

    public function getEmpresarios(){
        $users = User::where('rol', '3')->get();
        return $users;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        if(!empty($request->pass))
            $user->password = bcrypt($request->pass);
        else
            $user->password = bcrypt(1234);
        $user->rol = $request->rol;
        $user->save();
        return $user;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = User::where('id', $id)->with('restaurantes')->first();
        foreach($user->restaurantes as $restaurante){
            $restaurante->restaurante_media = $restaurante->restaurante_media;
        }
        return $user;
    }

    public function getUserRestaurantsIDs(string $id){
        return Restaurante::where('user_id', $id)->get(['id']);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = User::findOrFail($id);
        $user->name = $request->name;
        $user->email = $request->email;
        if(!empty($request->pass))
            $user->password = bcrypt($request->pass);
        $user->rol = $request->rol;
        $user->save();
        return $user;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return User::findOrFail($id)->delete();
    }
}
