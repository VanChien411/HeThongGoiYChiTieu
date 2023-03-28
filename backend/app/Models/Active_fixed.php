<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Active_fixed extends Model
{
    use HasFactory;
    protected $table = 'active_fixeds';
    public $timestamps = false;
    public function table_type(){
        return $this->belongsTo(Table_type::class);
    }
   public function users(){
    return $this->belongsToMany(User::class, 'user_id','active_fixed' );
   }
}
