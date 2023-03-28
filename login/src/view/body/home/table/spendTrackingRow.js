


function SpendTrackingRow(props){
 
   function dataAction (price){
     
        props.onChangeST({id: props.id, price:price })
    }
  
    return(
        <td class='text-center'><input onChange={(e)=> dataAction( e.target.value)} min={0} value={props.price}  class='border-bottom-0 border-dark border-0' type="number"></input></td>
    );
  
}
export default SpendTrackingRow;