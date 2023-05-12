<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    function login(Request $request)
    {
        $usuario = User::where('email', $request->email)->first();
        if ($usuario && Hash::check($request->pass, $usuario->password)) {
            return response()->json([
                'token' => $usuario->createToken($usuario->email)->plainTextToken,
                'rol' => $usuario->rol,
                'id' => $usuario->id
            ]);
        }
        return response()->json(['error' => 'Credenciales no validas'], 401);
    }
}
