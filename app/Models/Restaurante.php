<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Restaurante extends Model
{
    use HasFactory;

    protected $table = 'restaurantes';

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function reservas(){
        return $this->hasMany(Reserva::class);
    }

    public function resenas(){
        return $this->hasMany(Resena::class);
    }

    public function comentarios(){
        return $this->hasMany(Comentario::class);
    }

    public function restaurante_media(){
        return $this->hasMany(Restaurante_media::class);
    }
}
