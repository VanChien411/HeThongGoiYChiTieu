<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Table_type extends Model
{
    use HasFactory;
    protected $table = 'table_types';
    public $timestamps = false;
    public function active_fixed(){
        return $this->hasMany(Active_fixed::class);
    }
}
