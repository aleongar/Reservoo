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
        return $this->belongsToMany(User::class, 'reserva', 'restaurante_id', 'user_id');
    }
}
