<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use TheSeer\Tokenizer\Exception;

class UserController extends Controller
{
  //
  public function login(Request $request)
  {
    $user = User::Where('email', $request->data['email'] )->Where('password',$request->data['password'])->first();
    $data = [
      'accessToken' => false,
      'user' => '',
    ];

    if ($user) {
      $accessToken = true;
      $data = [
        'accessToken' => $accessToken,
        'user' => [
          'id' => $user->id,
          'avatar' => $user->avatar,
          'email' => $user->email,
          'username' => $user->username,
          'role' => 's',
        ]
      ];
    }
    return response()->json($data);
  }

  public function register(Request $request)
  {

    try {
      $data = [
        'accessToken' => false,
        'user' => '',
      ];
    
       if(!User::where('email', $request->data['email'])->first())
      {
        
        $data = $this->createUser($request,1);
      }
   

    } catch (Exception $e) {
      Log::error($e);
    }

    return response()->json($data);



  }

  public function loginWithGoogle(Request $request)
  {

 
    try {
      $user = User::where('email', $request->data['email'])->first();
      $data = [
        'accessToken' => false,
        'user' => '',
      ];
    
       if(!$user)
      {
    
        $data = $this->createUser($request,2);
      }
      else
      $data = $this->returndata($user);

    } catch (Exception $e) {
      Log::error($e);
    }

    return response()->json($data);



  }
  public function createUser(Request $request,$access_type){
    
    $fullName = $this->username($request->data['username']);
    $user = new User;
  
    $user->_state = 1;
    $user->password = $request->data['password']; 
    
    $user->last_login = now();
    $user->is_superuser = 0;
    if($fullName['last_name'] == '')
    $user->username = $fullName['first_name'];
    else
    $user->username = $fullName['last_name'] . ' ' . $fullName['first_name'];
   
    $user->first_name = $fullName['first_name'];
    $user->last_name = $fullName['last_name'];
    $user->email = trim($request->data['email']);
    $user->date_joined = now();
   if(isset($request->data['picture']))
    $user->avatar = $request->data['picture'];
  else
    $user->avatar = 'image/user.png';
   $user->access_type = $access_type;
 
    $user->save();
    $data = $this->returndata($user);
    
    return $data;
  }

  public function returndata($user){
    $data = [
      'accessToken' => true,
      'user' => [
        'id' => $user->id,
        'avatar' => $user->avatar,
        'email' => $user->email,
        'username' => $user->username,
        'role' => 's',
      ]
    ];
    return $data;
  }

  //trim string 
  public function trim($string)
  {
 

    $strTrim = '';
    $counts = 0;
    for ($i = 0; $i < strlen($string); $i++) {

      if ($string[$i] == ' ' && $counts != 0 && $string[$i + 1] != ' ')
        $strTrim = $strTrim . $string[$i];
      else if ($string[$i] != ' ') {
        $strTrim = $strTrim . $string[$i];
        $counts++;
      }

    }

    return $strTrim;
  }

  //get first name and last name 
  public function username($username)
  {
    $trimName = $this->trim($username);
    $arrName = explode(' ', $trimName);
    $firstName = '';
    $lastName = '';
    if (count($arrName) >= 2) {
     
      $firstName = array_pop($arrName);
      $lastName = implode(' ', $arrName);
    }
    else
    $firstName = $arrName;

    return ['first_name' => $firstName, 'last_name' => $lastName];

  }

}