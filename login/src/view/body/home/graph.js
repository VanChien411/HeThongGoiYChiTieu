import React, { useState,useEffect } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { chartPlan,chartPlanAction} from '../../../router/userRoter';
import { connect } from 'react-redux';
import randomColor from 'randomcolor';

const Graph = (props) => {
    const [startDate, setStartDate] = useState([]);
    const [labelChart, setLabelChart] = useState([]);
    const [price, setPrice] = useState([]);
    const [labelChartAction, setLabelChartAction] = useState([]);
    const [priceAction, setPriceAction] = useState([]);
    const [money] = useState(1000000);
    const [chartType, setChartType] = useState('bar');
    const [chartActionType, setChartActionType] = useState('bar');

   useEffect(()=>{
    const t = changeDate(Date(),-7);
    chartPlan({startDate: t, user_id:  props.user.id }).then(s=> {
        setLabelChart(s['date']);
        setPrice(s['price']);
    });
    chartPlanAction({startDate: Date(), user_id:  props.user.id }).then(s=> {
        setLabelChartAction(s['action_fixed']);
        setPriceAction(s['price']);
    })
   },[]);
   function changeDate(date, math) {
    // date kieu du lieu date
    var ms = Date.parse(new Date(date));
    return new Date(ms + (86400000 * math));
}
    const chartData = {
        labels: labelChart,
        datasets: [
            {
                label: 'Khoản chi',
                data: price,
                fill: false,
                backgroundColor: randomColor({ count: price.length, luminosity: 'bright' }),
                borderColor:'rgba(178 ,58 ,238)',
            },
        ],
    };

    const chartOptions = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    const handleChartTypeChange = (type) => {
        setChartType(type);
    };

    let chart;
    function setDate(value){
        setStartDate(value.target.value);
        chartPlan({startDate: value.target.value, user_id:  props.user.id }).then(s=> {
            setLabelChart(s['date']);
            setPrice(s['price']);
        })
    }
    switch (chartType) {
        case 'bar':
            chart = <Bar data={chartData} options={chartOptions} />;
            break;
        case 'doughnut':
            chart = <Doughnut data={chartData} options={{}} />;
            break;
        case 'line':
            chart = <Line data={chartData} options={chartOptions} />;
            break;
        default:
            chart = null;
    }
    let chartAction;
    


    const chartDataAction = {
        labels: labelChartAction,
        datasets: [
            {
                label: 'Khoản chi',
                data: priceAction,
                fill: false,
                backgroundColor: randomColor({ count: price.length, luminosity: 'bright' }),
                borderColor:'rgba(178 ,58 ,238)',
            },
        ],
    };

    switch (chartActionType) {
        case 'bar':
            chartAction = <Bar data={chartDataAction} options={chartOptions} />;
            break;
        case 'doughnut':
            chartAction = <Doughnut data={chartDataAction} options={{}} />;
            break;
        case 'line':
            chartAction = <Line data={chartDataAction} options={chartOptions} />;
            break;
        default:
            chartAction = null;
    }
    


    const handleChartActionTypeChange = (type) => {
        setChartActionType(type);
    };

   
    function setDateAction(value){
        setStartDate(value.target.value);
        chartPlanAction({startDate: value.target.value, user_id:  props.user.id }).then(s=> {
            setLabelChartAction(s['action_fixed']);
            setPriceAction(s['price']);
        })
    }



    return (

        <div class="app-wrapper">
            <p>s</p>
            <div class="app-content pt-3 p-md-3 p-lg-4">
                <div class="container-xl">

                    <h1 class="app-page-title">Nộp tiền vào quỹ</h1>
                    <h1 class='text-center mb-5'>NỘP TIỀN VÀO QUỸ</h1>

                    <div class='row'>
                    <div className="col-12 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div className="date">Biểu đồ chi tiêu từ <input type='date' onChange={setDate}></input> </div>

                                    <div className="chart-type">
                                        <button className="btn btn-primary" onClick={() => handleChartTypeChange('line')}>
                                            Dòng
                                        </button>
                                        <button className="btn btn-primary" onClick={() => handleChartTypeChange('bar')}>
                                            Cột
                                        </button>
                                        <button className="btn btn-primary" onClick={() => handleChartTypeChange('doughnut')}>
                                            Tròn
                                        </button>
                                    </div>
                                </div>
                                <div className="chart-container">{chart}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div className="date">Biểu đồ chi tiêu từ <input type='date' onChange={setDateAction}></input> </div>

                                    <div className="chart-type">
                                        <button className="btn btn-primary" onClick={() => handleChartActionTypeChange('line')}>
                                            Dòng
                                        </button>
                                        <button className="btn btn-primary" onClick={() => handleChartActionTypeChange('bar')}>
                                            Cột
                                        </button>
                                        <button className="btn btn-primary" onClick={() => handleChartActionTypeChange('doughnut')}>
                                            Tròn
                                        </button>
                                    </div>
                                </div>
                                <div className="chart-container">{chartAction}</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {

        user: state.user
    }
};


export default connect(mapStateToProps, null)(Graph);