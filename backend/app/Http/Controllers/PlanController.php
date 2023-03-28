<?php

namespace App\Http\Controllers;

use App\Models\Active_fixed;
use App\Models\Table_type;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class PlanController extends Controller
{
  //
  public function initActiveFixed(Request $request)
  {

    $table_type = Table_type::all();
    $data = [];

    foreach ($table_type as $item) {

      $data = Arr::add($data, $item->name, Active_fixed::Where('table_id', $item->id)->Where('user_id',$request->data)->get());

    }
    //    $data = Arr::add($table_type,'a',1);


    return response()->json($data);
  }
  public function postActiveFixed(Request $request)
  {
   if (isset($request->data['savePlan'])) {
      $actionF = Active_fixed::where('user_id',$request->data["user_id"])->get();
      foreach($actionF as $x){
        $x->delete();
      }
      if(isset($request->data['savePlan']["savePlan"]) )
      {
        $list = $request->data['savePlan']["savePlan"];
      }
      else
       $list = $request->data['savePlan'];
      foreach ($list as $x) {
   
        if($x["name"] != '' && $x["price"] > 0)
         Active_fixed::insert([
            'name' => $x["name"],
            'price'=> $x["price"],
            'table_id' => $x["idTable"],
            'user_id'=> $request->data["user_id"]

        ]);
      }
      return response()->json(true);
 

    }
    return response()->json($request);
  }


}