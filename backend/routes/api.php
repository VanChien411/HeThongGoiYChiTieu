<?php

use App\Http\Controllers\ChartController;
use App\Http\Controllers\PlanController;
use App\Http\Controllers\SpendTrackingController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/login',[UserController::class, 'login']);
Route::post('/register',[UserController::class, 'register']);
Route::post('/loginWithGoogle',[UserController::class,'loginWithGoogle']);
route::post('/initActiveFixed', [PlanController::class, 'initActiveFixed']);
route::post('/postActiveFixed', [PlanController::class, 'postActiveFixed']);
route::post('/initAction', [SpendTrackingController::class, 'initAction']);
route::post('/postDataAction', [SpendTrackingController::class, 'postDataAction']);
route::post('/listActionD', [SpendTrackingController::class, 'listActionD']);
route::post('/foreseeSum', [SpendTrackingController::class, 'foreseeSum']);
route::post('/assetSum', [SpendTrackingController::class, 'assetSum']);
route::post('/spendSum', [SpendTrackingController::class, 'spendSum']);
route::post('/addAction', [SpendTrackingController::class, 'addAction']);
route::get('/getAction', [SpendTrackingController::class, 'getAction']);
route::post('/errorMaxPrice', [SpendTrackingController::class, 'errorMaxPrice']);
route::post('/alertPlan', [SpendTrackingController::class, 'alertPlan']);
route::post('/chartPlan', [ChartController::class, 'chartPlan']);
route::post('/chartPlanAction', [ChartController::class, 'chartPlanAction']);
route::post('/chartTypeTable', [ChartController::class, 'chartTypeTable']);


