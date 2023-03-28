import {useEffect,useState} from 'react';


function TableRow(props){
 
   function dataAction (name, price){
     
        props.onchangeList({idRow : props.idRow, name : name, price:price})
    }
    console.log(props )
    return (
        <tr class="" name="" key= {props.idRow}>
        <td scope="row" ><b><input type='text' style={{width: '100%'}} placeholder="Hoạt động" id="action" value={props.name} onChange={(e)=> dataAction(e.target.value,props.price)}></input></b></td>
        <td><input type='number'  style={{width: '100%'}} placeholder='Số tiền' id="price" value={props.price} onChange={(e)=> dataAction(props.name, e.target.value)}></input></td>
        
        </tr>
    )
  
}
export default TableRow;