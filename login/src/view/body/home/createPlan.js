import TableRow from "./table/tableRow";
import { useEffect, useState } from 'react';
import { initActiveFixed } from '../../../router/userRoter';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';

function CreatePlan(props) {

    console.log("startPlan");

    const [listAction, setListAction] = useState([]);
    const [listRow1, setListRow1] = useState([]);
    const [listRow2, setListRow2] = useState([]);
    const [listRow3, setListRow3] = useState([]);
    const [lt, setLt] = useState([]);

    //listRow là danh sách các bảng
    //listRow1 là bảng sinh hoạt
    //listRow2 là bảng tiếp kiêm
    //listRow3 là bảng bắt buộc
    // const s = [];
    // listAction = (dataAction) =>{
    //     s = dataAction;
    // }

    useEffect(() => {
        if (listAction.length != 0) {
            console.log("useeff")
            setLt('');
        }
        else {
            var list = [];
       

            initActiveFixed(props.user.id).then(item => {
            

                    item.SinhHoat.forEach(element => {
                        list.push({ idTable: element.table_id, name: element.name, price: element.price })
                    });
                    item.TiepKiem.forEach(element => {
                        list.push({ idTable: element.table_id, name: element.name, price: element.price })

                    });
                    item.BatBuoc.forEach(element => {
                        list.push({ idTable: element.table_id, name: element.name, price: element.price })



                    });
                    
               
                setAction()

                
          

                setLt('');
            
            });
            console.log("list",list)
            listAction.push(list)
            props.addSave(  listAction[0])
           
           console.log("listAction",listAction)

        }
    }, []);


   
    function setAction(){
        intAction(setListRow1,1);
        intAction(setListRow2,2);
        intAction(setListRow3,3);

     }

    function intAction(setList, idTable)
    {
        setList(listAction[0].map((x, i) => {
            console.log(i, x)
            if ( x.idTable ==idTable)
                return <TableRow key={i} onchangeList={onchangeList} idRow={i} name={x.name} price={x.price} />;
    
        }))
    }

    function onchangeList(data) {
        var a = [...listAction];
        console.log("onchangeofdata",a[0][data.idRow]);

            a[0][data.idRow].name = data.name;
        console.log("data", listAction)
        if (Number(data.price) < 0)
        {

        }
        else
            a[0][data.idRow].price = Number(data.price);
        setListAction(a);
        setAction();
        
        props.addSave(  listAction[0])
        console.log("listAction2", listAction)
        console.log("props",props.savePlan)


    }
    function addAction(i, name, price) {
        switch (i) {

            case 1:
                //setListRow1 giup tablerow có thể hiển thị ra giao diện
                var list = listAction;
                setListRow1([...listRow1, <TableRow onchangeList={onchangeList} idRow={listAction[0].length} name={name} price={price} />]);
                list[0].push({idTable: 1, name: name, price: price })
                setListAction(list);
                break;
            case 2:
                var list = listAction;
                setListRow2([...listRow2, <TableRow onchangeList={onchangeList} idRow={listAction[0].length} name={name} price={price} />]);
                list[0].push({idTable: 2, name: name, price: price })
                setListAction(list);
                break;
            case 3:
                var list = listAction;
                setListRow3([...listRow3, <TableRow onchangeList={onchangeList} idRow={listAction[0].length} name={name} price={price} />]);
                list[0].push({idTable: 3, name: name, price: price })
                setListAction(list);
                break;
            default:
                console.log("giá trị bảng sai");
                break;
        }

        //Tạo thêm dòng khi click chuột
     

        console.log('listrow2', listRow1);



    }
    return (

        <>
            <div class='col-sm-4 '>
                {/* <div class="btn btn-danger " onClick={()=>initA()}> initA</div> */}
                
                <div class="card-body shadow mx-1">
                    <table class="table table-hover table-striped" >
                        <thead>
                            <tr class='bg-info text-light text-center' >
                                <th colSpan={2}>Bảng sinh hoạt</th>

                            </tr>
                        </thead>
                        <tbody class='text-secondary'>


                            {listRow1}
                           


                        </tbody>
                        <tfoot>
                            <tr >
                                <td colSpan={2}><div class='btn container-fluid btn-light opacity-75' onClick={() => addAction(1, "", 0)}>Thêm</div></td>
                                {lt}
                            </tr>
                        </tfoot>
                    </table>
                </div>

            </div>
            <div class='col-sm-4 '>
                
                <div class="card-body shadow mx-1">
                    <table class="table table-hover table-striped" >
                        <thead>
                            <tr class='bg-warning text-light text-center' >
                                <th colSpan={2}>Bảng tiếp kiệm</th>

                            </tr>
                        </thead>
                        <tbody class='text-secondary'>
                            {listRow2}

                        </tbody>
                        <tfoot>
                            <tr colSpan={2}>
                                <td colSpan={2}><div class='btn container-fluid btn-light opacity-75' onClick={() => addAction(2, "", 0)}>Thêm</div></td>


                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            <div class='col-sm-4 '>
                
                <div class="card-body shadow mx-1">
                    <table class="table table-hover table-striped" >
                        <thead>
                            <tr class='bg-danger text-light text-center' >
                                <th colSpan={2}>Bảng bắt buộc</th>

                            </tr>
                        </thead>
                        <tbody class='text-secondary'>
                            {listRow3}
                           
                        </tbody>
                        <tfoot>
                            <tr colSpan={2}>
                                <td colSpan={2}><div class='btn container-fluid btn-light opacity-75' onClick={() => addAction(3, "", 0)}>Thêm</div></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        user:state.user,
      savePlan: state
    }
  };
const mapDispatchToProps = (dispatch, props) =>{
    return {
     
        addSave : (save) =>{
            dispatch(actions.savePlan(save))
            //actions.save la loai
            

        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreatePlan);