<?php

namespace App\Http\Controllers;

use App\Models\Reserva;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReservasController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Reserva::with('user')->with('restaurante')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $reservation = new Reserva();
        $reservation->user_id = $request->user;
        $reservation->restaurante_id = $request->restaurant;
        $reservation->h_reserva = $request->h_reserva;
        $reservation->aprovada = 0;
        if ($request->has('aprovado')) {
            $reservation->aprovada = $request->aprovado;
        }
        $reservation->save();
        return $reservation;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Reserva::findOrFail($id);
    }

    public function getReservasEnDiaRestaurante(string $restaurante, string $dia){

        $dia_separado = explode('-', $dia);
        return Reserva
        ::where('h_reserva', '>=' , Carbon::createFromDate($dia_separado[0], $dia_separado[1], $dia_separado[2])->startOfDay())
        ->where('h_reserva', '<' , Carbon::createFromDate($dia_separado[0], $dia_separado[1], $dia_separado[2])->endOfDay())
        ->where('restaurante_id', $restaurante)
        ->get();
    }

    public function getReservasEnDiaUsuario(string $usuario, string $dia){

        $dia_separado = explode('-', $dia);
        return Reserva
        ::where('h_reserva', '>=' , Carbon::createFromDate($dia_separado[0], $dia_separado[1], $dia_separado[2])->toDateString())
        ->where('h_reserva', '<' , Carbon::createFromDate($dia_separado[0], $dia_separado[1], intval($dia_separado[2]) + 1)->toDateString())
        ->where('user_id', $usuario)
        ->get();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $reservation = Reserva::findOrFail($id);
        $reservation->user_id = $request->user;
        $reservation->restaurante_id = $request->restaurant;
        $reservation->h_reserva = $request->h_reserva;
        $reservation->aprovada = 0;
        if ($request->has('aprovado')) {
            $reservation->aprovada = $request->aprovado;
        }
        $reservation->save();
        return $reservation;
    }

    public function confirmation(Request $request, string $id)
    {
        $reservation = Reserva::findOrFail($id);
        $reservation->aprovada = $request['confirm'] ? 1 : 0;
        $reservation->save();
        return $request;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Reserva::findOrFail($id)->delete();
    }
}
