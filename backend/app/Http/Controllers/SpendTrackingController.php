<?php

namespace App\Http\Controllers;

use App\Models\Action;


use App\Models\Active_fixed;
use Carbon\Carbon;
use Illuminate\Http\Request;

class SpendTrackingController extends Controller
{
  //
  public function initAction(Request $request)
  {
    $arr = [];
    if ($request->data["user_id"] == 0)
      return response()->json($request);

    $action = Action::Where('user_id', $request->data["user_id"])->get();

    foreach ($action as $item) {
      $o = new Carbon(date('d-m-Y', strtotime($request->data["startDate"])));
      if (date('d-m-Y', strtotime($item->datetime)) <= date('d-m-Y', strtotime($request->data["endDate"])) && date('d-m-Y', strtotime($item->datetime)) >= date('d-m-Y', strtotime($o->format('Y-m-d H:i:s'))) && $item->gains == 0) {
        array_push($arr, $item);
      }
    }

    return response()->json($arr);
    // return response()->json($request);


    //có thể so sánh có thể trừ và trả về số mini giây 

    // return response()->json(  date('d-m-Y', strtotime($action[0]->datetime )) );
  }
  public function postDataAction(Request $request)
  {

    if ($request->data[0]["saveSpendTracking"] != null) {
      foreach ($request->data[0]["saveSpendTracking"] as $item) {
        // $item
        $action = Action::Where('user_id', $request->data[1])->Where('name', $item["action"]["name"])->get();
        if ($action != null) {
          foreach ($action as $t) {
            if (date('d-m-Y', strtotime($t->datetime)) == date('d-m-Y', strtotime($item["date"])))
              $t->delete();

          }

        }
        //delete
        $o = Carbon::now();
        $o = new Carbon(date('d-m-Y', strtotime($item["date"])));
        if ($item["price"] > 0)
          Action::insert([
            'name' => $item["action"]["name"],
            'price' => $item["price"],
            'gains' => 0,
            'datetime' => $o->format('Y-m-d H:i:s'),
            'user_id' => $request->data[1]
          ]);
        //insert  

      }

      return response()->json($request);
    }
    return response()->json($request);


    // return response()->json($request->saveSpendTracking[0]["action"]["name"]);
  }

  public function listActionD(Request $request)
  {

    $arr = [];
    if ($request->data["user_id"] == 0 || isset($request->data["user_id"]) == null)
      return response()->json($request);

    $action = Action::Where('user_id', $request->data["user_id"])->get();
    $action_Fixed = Active_fixed::all();
    $o = new Carbon(date('d-m-Y', strtotime($request->data["startDate"])));

    $newdate = date('d-m-Y', strtotime($request->data["startDate"]));

    for ($i = 0; $i <= $request->data["countDay"]; $i++) {

      array_push($arr, ['date' => $newdate, 'count' => 0]);
      $newdate = strtotime('+1 day', strtotime($newdate));
      $newdate = date('d-m-Y', $newdate);

    }



    foreach ($action as $item) {
      $distinctive = true;
      if (date('d-m-Y', strtotime($item->datetime)) <= date('d-m-Y', strtotime($request->data["endDate"])) && date('d-m-Y', strtotime($item->datetime)) >= date('d-m-Y', strtotime($o->format('Y-m-d H:i:s'))) && $item->gains == 0) {
        foreach ($action_Fixed as $t) {
          if ($item->name == $t->name)
            $distinctive = false;
        }
        if ($distinctive) {


          foreach ($arr as &$dat) {
            if (date('d-m-Y', strtotime($dat['date'])) == date('d-m-Y', strtotime($item->datetime))) {
              $dat['count'] += $item->price;
              break;
            }
          }
        }


      }

    }

    $listCount = [];
    foreach ($arr as $a) {
      array_push($listCount, $a['count']);
    }
    return response()->json($listCount);


    // return response()->json($request->saveSpendTracking[0]["action"]["name"]);
  }

  public function foreseeSum(Request $request)
  {
    $sum = 0;
    if ($request->data["user_id"] == 0)
      return response()->json($request);

    $action_fixed = Active_fixed::Where('user_id', $request->data["user_id"])->get();

    foreach ($action_fixed as $item) {

      $sum += $item->price;

    }

    return response()->json($sum);
  }
  public function assetSum(Request $request)
  {
    $sum = 0;
    if ($request->data["user_id"] == 0)
      return response()->json($request);

    $action = Action::Where('user_id', $request->data["user_id"])->get();

    foreach ($action as $item) {
      $o = new Carbon(date('d-m-Y', strtotime($request->data["startDate"])));
      if (date('d-m-Y', strtotime($item->datetime)) <= date('d-m-Y', strtotime($request->data["endDate"])) && date('d-m-Y', strtotime($item->datetime)) >= date('d-m-Y', strtotime($o->format('Y-m-d H:i:s'))) && $item->gains == 1) {
        $sum += $item->price;
      }
    }

    return response()->json($sum);
  }

  public function spendSum(Request $request)
  {
    $sum = 0;
    if ($request->data["user_id"] == 0)
      return response()->json($request);

    $action = Action::Where('user_id', $request->data["user_id"])->get();


    foreach ($request->data['listArr'] as $listArr) {
      $sum += $listArr['price'];
    }



    return response()->json($sum);
  }

  public function addAction(Request $request)
  {
    $error = [];
    if ($request->data["name"] == null)
      array_push($error, 'Cần nhập tên:');
    if ($request->data["price"] == null)
      array_push($error, 'Cần nhập số tiền:');
    if ($request->data["gains"] <= 0)
      array_push($error, 'Loại hoạt động không hợp lệ:');

    if ($request->data["name"] != null && $request->data["price"] != null && $request->data["gains"] >= 0) {
      Action::insert([
        'name' => $request->data["name"],
        'price' => $request->data["price"],
        'gains' => $request->data["gains"],
        'datetime' => date(now()),
        'user_id' => $request->data['user_id']

      ]);
      return response()->json(true);

    }

    return response()->json($error);

  }

  public function getAction()
  {

    $action = Action::orderBy('datetime', 'desc')->get();
    return response()->json($action);


  }

  public function errorMaxPrice(Request $request)
  {
    $tam = [];
    $messenger = [];
    if ($request->data["user_id"] == 0)
      return response()->json($request);

    $action = Action::Where('user_id', $request->data["user_id"])->get();
    $action_fixed = Active_fixed::all();

    foreach ($action_fixed as $item) {
      array_push($tam, ['name' => $item->name, 'price' => 0]);
    }

    foreach ($request->data['listArr'] as $listArr) {
      foreach ($tam as &$t) {
        if ($listArr['action']['name'] == $t['name']) {

          $t['price'] += $listArr['price'];


          break;
        }
      }

    }
    for ($i = 0; $i < count($action_fixed); $i++) {
      if ($action_fixed[$i]['price'] > $tam[$i]['price'] * 2)
        array_push($messenger, 'Khoản dư của hoạt động còn nhiều. Có thể sử dụng thoải mái');
      else if ($action_fixed[$i]['price'] < $tam[$i]['price'] / 2)
        array_push($messenger, 'Bạn đang sử dụng quá nhiều cho hoạt động này. Khuyến nghị giảm chi tiêu');
      else if ($action_fixed[$i]['price'] > $tam[$i]['price'])
        array_push($messenger, 'Chi tiêu theo kế hoạch');
      else if ($action_fixed[$i]['price'] < $tam[$i]['price'])
        array_push($messenger, 'Bạn đã sử dụng nhiều hơn ước tính. Khuyến nghị giảm chi tiêu');

    }

    $sum = [
      'action_fixed' => $action_fixed,
      'action_fixed_last' => $tam,
      'messenger' => $messenger
    ];

    return response()->json($sum);
  }



  public function alertPlan(Request $request)
  {

    $action = Action::orderBy('datetime', 'desc')->whereBetween('datetime', [now()->firstOfMonth()->toDateString(), $request->data['listArr'][0]['date']])->get();

    // thời gian giữa 2 ngày
    $start = Carbon::parse(now()->firstOfMonth()->toDateString());
    $days = $start->diffInDays($request->data['listArr'][count($request->data['listArr']) - 1]['date']);

    $action_fixed = Active_fixed::all();
    $actionF = [];
    foreach ($action_fixed as $item) {
      //dang kết quả trả về
      array_push($actionF, ['name' => $item->name, 'price' => $item->price, 'sum' => 0, 'messenger' => '']);

    }
    foreach ($action as $item) {
      foreach ($actionF as &$a) {


        if ($a['name'] == $item->name) {
          $a['sum'] += $item->price;
          break;
        }
      }
    }
    foreach ($request->data['listArr'] as $item) {
      foreach ($actionF as &$a) {
        if ($a['name'] == $item['action']['name']) {
          $a['sum'] += $item['price'];
          break;
        }
      }
    }
    foreach ($actionF as &$item) {
      $totalExpenses = $item['sum']; // tổng số tiền chi tiêu
     
      $budget = $item['price']; // số tiền tối đa được chi tiêu trong 1 tháng

      // tính số tiền chi trung bình mỗi ngày
      $averageExpense = $totalExpenses / $days;

      // kiểm tra các tiêu chí
      $overBudget = $averageExpense > $budget/$days;
      $spentTooFast = $totalExpenses > $budget ;
    

      // xuất ra các thông báo tương ứng
      if ($overBudget && $spentTooFast) {
        $item['messenger'] = "Bạn đang chi tiêu cho ".$item['name']. " quá nhiều và chi tiêu quá nhanh. Hãy cân nhắc giảm chi tiêu để đảm bảo số tiền của bạn đủ cho tháng sau.";
      } elseif ($overBudget) {
        $item['messenger'] = "Bạn đang chi tiêu cho ".$item['name']. " tiêu quá nhiều. Hãy cân nhắc giảm chi tiêu để đảm bảo số tiền của bạn đủ cho tháng sau.";
      } elseif ($spentTooFast) {
        $item['messenger'] = "Bạn đang chi tiêu cho ".$item['name']. " tiêu quá nhanh. Hãy cân nhắc giảm chi tiêu để đảm bảo số tiền của bạn đủ cho tháng sau.";
      } else {
        $item['messenger'] = "";
      }

    }

    return response()->json($actionF);


  }
}