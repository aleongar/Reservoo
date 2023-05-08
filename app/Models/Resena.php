<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resena extends Model
{
    use HasFactory;
    // en memoria de reseñas cortas,
    // que no ha muerto ni nada por el estilo,
    // pero me ha me ha alegrado el día en más de una ocasión,
    // para estar donde estoy hoy

    protected $table = 'resenas';

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function restaurante(){
        return $this->belongsTo(Restaurante::class);
    }

    public function comentario(){
        return $this->hasOne(Comentario::class);
    }
}
