
import Login from './auth/Login';
import Register from './auth/Register';
import Home from '../view/home';
import Page from '../view/page';

import { Route, Routes, Link, BrowserRouter as Router } from 'react-router-dom' ;
export function Start(){
    window.location.assign('/login');
}
function Auth() {
    
  return (
   
  <Routes>
   
    <Route  exact path={'/'} element={<Start />}></Route>
    <Route  path={'/login'} element={<Login />}></Route>
    <Route path={'/register'} element={<Register />}></Route>
    <Route path={'/home'} element={<Home />}></Route>
    <Route path={'/page/*'} element={<Page />}></Route>
    <Route path={'/TheoDoi'} element={<Home />}></Route>
    <Route path={'/NopTienVaoQuy'} element={<Home />}></Route>
    <Route path={'/BieuDo'} element={<Home />}></Route>
    
  </Routes>
   
  );
}

export default Auth;
