<?php

namespace App\Http\Controllers;

use App\Models\Action;
use App\Models\Active_fixed;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class ChartController extends Controller
{
    //

    public function chartPlan(Request $request)
    {

        $arr = [];
        $date =[];
        if ($request->data["user_id"] == 0 || isset($request->data["user_id"]) == null)
            return response()->json($request);

        $action = Action::Where('user_id', $request->data["user_id"])->get();
        $action_Fixed = Active_fixed::all();
        $o = new Carbon(date('d-m-Y', strtotime($request->data["startDate"])));

        $newdate = date('d-m-Y', strtotime($request->data["startDate"]));
        $nowDate = Carbon::now();
        for ($i = 0; $newdate != date('d-m-Y', strtotime($nowDate)); $i++) {

            array_push($arr,  0);
            array_push($date,  $newdate);

            $newdate = strtotime('+1 day', strtotime($newdate));
            $newdate = date('d-m-Y', $newdate);

        }



        foreach ($action as $item) {
            $distinctive = false;
            if (date('d-m-Y', strtotime($item->datetime)) <= date('d-m-Y', strtotime($nowDate)) && date('d-m-Y', strtotime($item->datetime)) >= date('d-m-Y', strtotime($o->format('Y-m-d H:i:s'))) && $item->gains == 0) {
                foreach ($action_Fixed as $t) {
                    if ($item->name == $t->name) {
                        $distinctive = true;
                        break;

                    }

                }
                if ($distinctive) {

                    for($i = 0; $i < count($date); $i++)
                    {
                        if (date('d-m-Y', strtotime($date[$i])) == date('d-m-Y', strtotime($item->datetime))) {
                            $arr[$i] += $item->price;
                            break;
                        }
                    }
                  
                }


            }

        }

        return response()->json(['date'=>$date,'price'=>$arr]);


    }
    public function chartPlanAction(Request $request)
    {
        
        if ($request->data["user_id"] == 0 || isset($request->data["user_id"]) == null)
        return response()->json($request);
        $action = Action::Where('user_id', $request->data["user_id"])->get();
        $action_fixed = Active_fixed::all();
        $price = [];
        $nameAction_fixed = [];
        foreach($action_fixed as $item)
        {
            array_push($price, 0);
            array_push($nameAction_fixed, $item->name);
        }
        foreach($action as $item){
            if(date('d-m-Y', strtotime($item->datetime)) == date('d-m-Y', strtotime($request->data['startDate'])))
           for($i =0; $i < count($action_fixed); $i++)
           {
            if($action_fixed[$i]->name == $item->name )
            {
                $price[$i] += $item->price;
            }
           }
        }

        
        

        return response()->json(['action_fixed'=>$nameAction_fixed,'price'=>$price]);


    }
    public function chartTypeTable(Request $request)
    {
        $arr = [0,0,0];

        if($request->data != null)
        {
        foreach($request->data['savePlan'] as $item){
       
        $arr[$item['idTable']-1] +=$item['price'];
            // $arr[$item['idTable']]+=1;
        }
    }
        return response()->json($arr);
    

    }
}