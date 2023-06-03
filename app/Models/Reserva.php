<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reserva extends Model
{
    use HasFactory;

    protected $table = 'reserva';

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function restaurante(){
        return $this->belongsTo(Restaurante::class);
    }
}
