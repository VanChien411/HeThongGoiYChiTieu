import { Alert, Button } from 'react-bootstrap';
import { useState, useRef,useEffect } from 'react';

function AlertBT(props) {
  const [showAlert, setShowAlert] = useState(false);
  const timerRef = useRef(null);
console.log('componentAlert',props.content[0]['name'])
  const handleButtonClick = () => {
    setShowAlert(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setShowAlert(false);
    }, 10000);
  };
  useEffect(()=>{
    handleButtonClick()
  },[props]);

  return (
    <div className="App">
    
    {props.content.map((x,i)=>{
       if(x['messenger'] !='' && showAlert){

       return  <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
             <div key ={i}>{x['messenger']}<br></br></div> ;
             </Alert>
       }
    })}
    
    </div>
  );
}
export default AlertBT;
