<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Restaurante_media extends Model
{
    protected $table = 'restaurante_media';

    use HasFactory;

    public function restaurante(){
        return $this->belongsTo(Restaurante::class);
    }
}
