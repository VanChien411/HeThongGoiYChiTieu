<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Action extends Model
{
    use HasFactory;
    protected $table = 'actions';
    public $timestamps = false;
   
    public function active_fixed(){
        return $this->belongsTo(Active_fixed::class);
    }
}
