
import { initActiveFixed } from '../../router/userRoter';
var list = [];
let p = 0;
if(localStorage.getItem('token') !== null)
{
console.log(JSON.parse(localStorage.getItem('token')).id);
p = JSON.parse(localStorage.getItem('token')).id;
}

else if(sessionStorage.getItem('token') !== null)
{
console.log(JSON.parse(sessionStorage.getItem('token')).id);

p = JSON.parse(sessionStorage.getItem('token')).id;

}

var initalState =  initActiveFixed(p).then(item => {
    
        console.log('itemsd',item)
   
    
              
                item.SinhHoat.forEach(element => {
                    list.push({ idTable: element.table_id, name: element.name, price: element.price })
                });
                item.TiepKiem.forEach(element => {
                    list.push({ idTable: element.table_id, name: element.name, price: element.price })
    
                });
                item.BatBuoc.forEach(element => {
                    list.push({ idTable: element.table_id, name: element.name, price: element.price })
    
    
    
                });
                
          });
          
         



var myReducer = (state = list, action) => {
    console.log("my1");
    console.log(state)
    if(action.type == 'SAVEPLAN') 
    {
            console.log("my2");
                var {savePlan} = action;
                return { savePlan};
    }
  
    return state;
}



export default myReducer;