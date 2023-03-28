
import TableRow from "./table/tableRow";
import Calendar from 'react-calendar';
import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { initAction, listActionD, assetSum, spendSum, foreseeSum, errorMaxPrice, alertPlan } from '../../../router/userRoter';
import * as actions from '../../../redux/actions';
import SpendTrackingRow from './table/spendTrackingRow';
import AlertBT from "../../../component/error/alertBT";


function SpendTracking(props) {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [averageX, setAverageX] = useState(5);
    const [arrDate, setArrDate] = useState([]);
    const [arrAction, setArrAction] = useState([]);
    const [listArr, setListArr] = useState([]);
    const [actionApi, setActionApi] = useState([]);
    const [sumPrice, setSumPrice] = useState([]);
    const [sumDistinctive, setSumDistinctive] = useState([]);
    const [sumF, setSumF] = useState([]);
    const [sumA, setSumA] = useState([]);
    const [sumS, setSumS] = useState([]);
    const [eMP, seteMP] = useState([]);
    const [alertAPI, setAlertAPI] = useState([]);
    


    useEffect(() => {


        var t = new Date();
        if (startDate == null)
            t = changeDate(endDate, -averageX);
        else
            t = startDate;

        var maxD = midTwoDay(t, endDate);
        var arD = [];
        var listArrTam = [];

        for (var i = 0; i <= maxD; i++) {
            arD.push(changeDate(t, i));
            console.log(arD);

        }
        setArrDate(arD);
        setArrAction(props.savePlan)
        initAction({ user_id: props.user.id, startDate: startDate, endDate: endDate }).then(s => {
            console.log("setAPI", s);
            console.log("savePlan", props.savePlan);

            ///loi 
            props.savePlan.map((a) => {
                arD.map((d) => {
                    var tong = 0;

                    {
                        s.map((x3, i3) => {
                            var dat = new Date(x3.datetime);
                            var dat2 = new Date(d);


                            if (x3.name == a.name && dat.getDate() == dat2.getDate() && dat.getMonth() == dat2.getMonth() && dat.getFullYear() == dat2.getFullYear()) {
                                tong += x3.price;


                            }
                        })
                    }
                    listArrTam.push({ date: d, action: a, price: tong })
                    console.log('listArrTam', listArrTam)
                })
            });


            setActionApi(s)
            setSumPrice(sumP(startDate, endDate, listArrTam))
            spendSum({
                user_id: props.user.id, listArr: listArrTam
            }).then(s => setSumS(s));
            errorMaxPrice({
                user_id: props.user.id, listArr: listArrTam
            }).then(s => seteMP(s));

        });

        foreseeSum({ user_id: props.user.id }).then(s => setSumF(s));
        assetSum({ user_id: props.user.id, startDate: startDate, endDate: endDate }).then(s => setSumA(s));

        setListArr(listArrTam);
        console.log("setlisarr", listArrTam)
        props.addSave(listArrTam);
        console.log('date', startDate);
        console.log('date', endDate)

       

    }, [startDate, endDate])

    function changeDate(date, math) {
        // date kieu du lieu date
        var ms = Date.parse(new Date(date));
        return new Date(ms + (86400000 * math));
    }

    function midTwoDay(date1, date2) {
        var ms1 = Date.parse(new Date(date1));
        var ms2 = Date.parse(new Date(date2));
        return ms1 - ms2 > 0 ? (ms1 - ms2) / 86400000 : (ms2 - ms1) / 86400000;
    }

    function onChangeST(data) {
        console.log("dataonchange", data);
        var tam = [...listArr];
        if (tam != '') {
            tam[data.id].price = data.price;
            setListArr(tam);
            props.addSave(tam);
            setSumPrice(sumP(startDate, endDate, listArr));
            spendSum({ user_id: props.user.id, listArr }).then(s => setSumS(s));
            errorMaxPrice({
                user_id: props.user.id, listArr: listArr
            }).then(s => seteMP(s));
            alertPlan({user_id: props.user.id, listArr}).then(s=>{console.log("alertPlan",s); setAlertAPI(<AlertBT content={s} />);})

        }


    }
    
    function sumD() {
        var sum = 0;
        if (sumDistinctive != null)
            sumDistinctive.map((x, i) => {
                sum += x;
            })
        return sum;
    }

    function sumP(date1, date2, list) {
        var midD = midTwoDay(date1, date2);
        var du = midD
        for (var i = 0; du >= 1; i++) { du--; }

        console.log(midD - du)
        midD = midD - du;
        listActionD({ user_id: props.user.id, startDate: startDate, endDate: endDate, countDay: midD }).then(s => { console.log("listActionD", s); setSumDistinctive(s) })

        var l = [0];
        for (var i = 0; i < midD; i++)
            l.push(0);
        list.map((x, i) => {
            var tam = i % (midD + 1);

            l[tam] += Number(x.price);
        })
        return l;
    }



    return (
        <div class="app-wrapper">
            <p>s</p>
            <div class="app-content pt-3 p-md-3 p-lg-4">
                <div class="container-xl position-relative">
                    <div class="position-absolute position-fixed top-10 end-0 border  border-2" style={{ width: 300, height: 120 }}>
                        <div class='row'>
                            <div class='col-7'>
                                <div class='' style={{ color: "violet" }}>Tài sản dự kiến </div>
                                <div class='text-primary'>Tổng số tài sản: </div>
                                <div class='text-danger'>Tổng chi tiêu:</div>
                                <div class='text-warning'>Số dư còn lại:</div>
                            </div>
                            <div class='col-5'>
                                <div class='' style={{ color: "violet" }}>{sumF}</div>
                                <div class='text-primary'>{sumA + sumF}</div>
                                <div class='text-danger'>{sumS + sumD()}</div>
                                <div class={sumA - sumD() + sumF - sumS > 0 ? 'text-primary' : 'text-danger'}>{sumA + sumF - sumS}</div>

                            </div>

                        </div>


                    </div>
                    <div class="position-absolute position-fixed top-1 start-10 " style={{ width: 500}}>
                        <div class='row'>
                            <div class='col'>
                                {alertAPI          
                                }
                        
                            </div>
                           
                        </div>


                    </div>
                    <h1 class="app-page-title">.</h1>
                   
                    <h1 class='text-center'>THEO DÕI CHI TIÊU</h1>

                    <div class='row mt-4 d-flex justify-content-around '>
                        <div class='col-lg-3 row ' >
                            Chọn ngày bắt đầu
                            <input type="date" onChange={(e) => setStartDate(e.target.value)} max={endDate}  ></input>

                        </div>

                        <div class='col-lg-3 row ' >
                            Chọn ngày kết thúc
                            <input type="date" onChange={(e) => setEndDate(e.target.value)} min={startDate}></input>

                        </div>
                    </div>
                    <div class='spendTracking'>
                        <table class="table table-striped    " >
                            <thead>
                                <tr class='table-primary'>
                                    <th class='d-none'></th>
                                    <th class='' scope="col-1"><sub> Hoạt Động</sub>\<sup>Ngày</sup></th>
                                    {arrDate.map((x, i) => {
                                        return <th class='text-center' scope="col" key={i}>{x.getDate()}/{x.getMonth() + 1}</th>

                                    })}


                                </tr>
                            </thead>
                            <tbody >

                                {arrAction.map((x, i) => {
                                    return <tr><th class='text-center ' scope="row">{x.name}</th>
                                        {arrDate.map((x2, i2) => {
                                            return <SpendTrackingRow price={listArr != '' ? listArr[i * arrDate.length + i2].price : 0} id={i * arrDate.length + i2} key={i * arrDate.length + i2} onChangeST={onChangeST} />
                                        })}
                                    </tr>
                                })}
                                <tr>
                                    <th scope="row" class="text-center">Khoản khác</th>
                                    {sumDistinctive.map(x => {
                                        return <td class='text-center'>{x}</td>
                                    })}

                                </tr>
                                <tr>
                                    <th scope="row" class="text-center">Tổng</th>
                                    {sumPrice.map(x => {
                                        return <td class='text-center bg-success'>{x}</td>
                                    })}

                                </tr>

                            </tbody>
                        </table>
                        <div class='row'>
                            <div class='col-7'>
                                <div class="card text-start">

                                    <div class="card-body">
                                        <h4 class="card-title p-0">
                                        <div class='row'>
                                                <div class='col-4'>Hoạt động</div>
                                                <div class='col-3'>Trước</div>
                                                <div class='col-3'>Sau</div>
                                                <div class='col-2'>Số dư</div>

                                            </div>
                                        </h4>
                                        <p class="card-text">
                                        <div class='row'>
                                           {eMP.action_fixed != null ?
                                            eMP.action_fixed.map((x,i )=>{
                                           return <div key={i } class='border border-top-0 border-end-0 border-start-0 border-2' style={{display: "flex"}}> <div class='col-4 '><b>{x.name}</b></div>
                                            <div class='col-3'>{x.price}</div>
                                            <div class='col-3'>{eMP.action_fixed_last[i].price}</div>
                                            <div class={x.price - eMP.action_fixed_last[i].price >0? 'col-2 text-primary': 'col-2 text-danger'}>{x.price - eMP.action_fixed_last[i].price}</div>
                                            </div>
                                           })
                                           :console.log('sai')}
                                               

                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class='col-5'>
                                <div class="card text-start">

                                    <div class="card-body">
                                        <h4 class="card-title">Gợi ý chi tiêu</h4>
                                        { eMP.messenger != null ? eMP.messenger.map((x,i)=>{
                                            return <div class="card-text border border-top-0 border-end-0 border-start-0 border-2" key={i}>{x}</div>
                                        }):null}
                                       
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>{/*//container-fluid*/}
            </div>{/*//app-content*/}


            {/*//app-wrapper*/}
        </div>

    );
}

const mapStateToProps = state => {
    return {
        user: state.user,
        savePlan: state.savePlan
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        addSave: (save) => {
            dispatch(actions.saveSpendTracking(save))
            //actions.save la loai
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpendTracking);
