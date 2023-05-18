<?php

use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\ComentariosController;
use App\Http\Controllers\ResenasController;
use App\Http\Controllers\ReservasController;
use App\Http\Controllers\RestauranteController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('login', [LoginController::class, 'login']);

Route::get('users/emp', [UserController::class, 'getEmpresarios']);
Route::get('users/rest/{id}', [UserController::class, 'getUserRestaurantsIDs']);
Route::apiResource('users', UserController::class);
Route::get('restaurants/page/{page}', [RestauranteController::class, 'getRestaurantsPaginated']);
Route::post('restaurants/search/{page}', [RestauranteController::class, 'searchRestaurantsPaginated']);
Route::post('restaurants/add', [RestauranteController::class, 'storeWithFiles']);
Route::put('restaurants/{id}/editing', [RestauranteController::class, 'updateWithFiles']);
Route::patch('restaurants/{id}editing', [RestauranteController::class, 'updateWithFiles']);
Route::delete('restaurants/removeImage/{id}', [RestauranteController::class, 'removeImage']);
Route::apiResource('restaurants', RestauranteController::class);
Route::put('reservations/{id}/confirmation', [ReservasController::class, 'confirmation']);
Route::get('reservations/rest/{restaurante}/{dia}', [ReservasController::class, 'getReservasEnDiaRestaurante']);
Route::get('reservations/user/{usuario}/{dia}', [ReservasController::class, 'getReservasEnDiaUsuario']);
Route::get('reservations/user/{usuario}', [ReservasController::class, 'getReservasEnUsuario']);
Route::get('reservations/rest/{restuarante}', [ReservasController::class, 'getReservasEnRestaurante']);
Route::post('reservations', [ReservasController::class, 'store']);
Route::apiResource('reservations', ReservasController::class);
Route::apiResource('resenas', ResenasController::class);
Route::apiResource('coments', ComentariosController::class);

