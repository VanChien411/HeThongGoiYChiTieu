import * as ev from '../../event/app';
import * as route from '../../router/userRoter';
import '../../App.css';
import Home from './home/home';
import SpendTracking from './home/SpendTracking';
import Deposit from './home/deposit';
import Graph from './home/graph';

import { useState, useEffect } from 'react';

function Body(){
    const [rs,setRs] = useState();
    function changeR(){
      if(window.location.pathname == '/home')
       setRs(<Home />)
      else if(window.location.pathname == '/TheoDoi')
        setRs(<SpendTracking />)
      else if(window.location.pathname == '/NopTienVaoQuy')
        setRs(<Deposit />)
      else if(window.location.pathname == '/BieuDo')
        setRs(<Graph />)
    }

    useEffect(()=>
    {
        changeR();
    },[])

    return(
      <>

  
      {rs}
      </>
    
    );
}

export default Body;