import { useState, useEffect } from "react";
import { addAction, getAction } from '../../../router/userRoter';
import { connect } from 'react-redux';


function Deposit(props) {
    const [showType, setShowType] = useState("info")
    const [valueSelect, SetValueSelect] = useState(-1);
    const [error, setError] = useState();
    const [listAction, setListAction] = useState([]);

    useEffect(() => {
        getAction().then(s => setListAction(s));
    }, [])

    function saveAction() {
        var name = document.getElementById('namePlan').value;
        var price = document.getElementById('pricePlan').value;

        console.log(name)
        addAction({ name: name, price: price, gains: valueSelect - 1, user_id: props.user.id }).then(s => {
            if (s == true)
            {
                setError();
                alert('Đã lưu');
         getAction().then(s => setListAction(s));

            }
            else
                setError(s);



        });
    }



    function checkPlan(value) {
        console.log(value.target.value);
        switch (value.target.value) {
            case "0":
                setShowType("info");
                SetValueSelect(0);
                break;
            case "1":
                setShowType("danger");
                SetValueSelect(1);

                break;
            case "2":
                setShowType("success");
                SetValueSelect(2);

                break;
        }
        console.log(showType)

    }
    return (
        <> <div class="app-wrapper">
            <p>s</p>
            <div class="app-content pt-3 p-md-3 p-lg-4">
                <div class="container-xl">

                    <h1 class="app-page-title">Nộp tiền vào quỹ</h1>
                    <h1 class='text-center mb-5'>NỘP TIỀN VÀO QUỸ</h1>
                    <pre className="m-3 text-danger">{error}</pre>
                    <div class='row'>
                        <div class='col '>

                            <div class={valueSelect == 0 ? 'bg-danger p-1' : 'p-1'}>
                                <select class={"form-select"} aria-label="Default select example" onChange={checkPlan}>
                                    <option value={0} selected>Chọn loại bạn muốn dùng</option>
                                    <option value={1}>Sử dụng tiền</option>
                                    <option value={2}>Nạp tiền vào quỹ</option>



                                </select>
                            </div>

                            <div class='d-flex justify-content-around ' >
                                <label for='namePlan' class={'mt-4 bg-' + showType}>Nhập tên: &nbsp;
                                    <input type="text" id="namePlan" name="name" placeholder="Tên khoản chi tiêu"></input>
                                </label>
                                <label for='pricePlan' class={'mt-4 bg-' + showType}>Nhập giá: &nbsp;
                                    <input type="number" id="pricePlan" class=' ' name='price' placeholder="Nhập số tiền"></input>
                                </label>

                            </div>

                            <div class='text-center mt-4'>
                                <button class='btn btn-success' type="submit" onClick={saveAction}><>Thực hiện</></button>

                            </div>

                        </div>
                        <div class='col center d-flex justify-content-around '>
                            <div class='border border-black p-1' style={{ width: 350 }}>
                                <div class='row'>
                                    <b >Lịch sử </b>
                                    <br></br>
                                    <br></br>
                                    <div class='col-5'>
                                        <u>Hoạt động</u>
                                        <br></br>
                                        <br></br>
                                    </div>
                                    <div class='col-3'>
                                        <u>Giá</u>
                                        <br></br>
                                        <br></br>
                                    </div>
                                    <div class='col'>
                                        <u>Thời gian</u>
                                        <br></br>
                                        <br></br>
                                    </div>
                                </div>


                                <div class='row' style={{ overflowY: "scroll", height: 300 }}>
                                    <div class='col-5'>


                                        {listAction.map((x, i) => {
                                            return <pre key={i}>&nbsp;{x.name}</pre>
                                        })}
                                    </div>
                                    <div class='col-3'>


                                        {listAction.map((x, i) => {
                                            return <pre key={i}>{x.price}</pre>
                                        })}
                                    </div>
                                    <div class='col'>


                                        {listAction.map((x, i) => {
                                            let date = new Date(x.datetime)
                                            return <pre key={i}>{date.getDate()}-{date.getMonth()}-{date.getFullYear()}</pre>
                                        })}
                                    </div>
                                </div>



                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
        </>
    )
}


const mapStateToProps = state => {
    return {

        user: state.user
    }
};


export default connect(mapStateToProps, null)(Deposit);
