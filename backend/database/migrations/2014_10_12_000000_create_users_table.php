<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->boolean('_state')->nullable();
            $table->string('password')->nullable();
            $table->dateTime('last_login')->nullable();
            $table->boolean('is_superuser')->nullable();
            $table->string('username');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email')->unique();
            $table->boolean('remember_passwords')->nullable();
            $table->dateTime('date_joined');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('takeget_password')->nullable();
            $table->string('avata')->nullable();
            $table->integer('access_type')->nullable();
          
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
