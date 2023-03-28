import React, { useEffect,useState } from 'react';
import Chart from 'chart.js';
import { chartTypeTable } from '../../../../router/userRoter';
import * as actions from '../../../../redux/actions';

import { connect } from 'react-redux';

function ChartType(props){
  const [priceTable,setPriceTable] = useState([]);
   const chartRef = React.createRef();

    useEffect(()=>{
      console.log('savePlan123',props.savePlan.savePlan)
      const myChartRef = chartRef.current.getContext("2d");
      chartTypeTable(props.savePlan).then(s=>{
        setPriceTable(s);
        new Chart(myChartRef, {
          type: "bar",
          data: {
            labels: ["Bảng sinh hoạt", "Bảng tiếp kiệm", "Bảng bắt buộc"],
            datasets: [
              {
                label: "Khoản ước tính",
                data: s,
                backgroundColor: [
                  "rgba(54, 162, 235, 0.6)",
                  "rgba(255, 206, 86, 0.6)",
                  "rgba(255, 99, 132, 0.6)",
              
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                  gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                  },
                },
              ],
            },
            animation: {
              duration: 2000,
            },
            legend: {
              display: false,
            },
            title: {
              display: true,
              text: "Khoản Ước Tính",
              fontSize: 24,
              fontColor: "#333",
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            },
          },
        });
      })
     
    },[props.savePlan]) 
    
    
   
   
    return (
      <div>
        <canvas id="myChart" ref={chartRef} />
      </div>
    );
  
}

const mapStateToProps = state => {
    return {
        user:state.user,
      savePlan: state.savePlan
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

export default connect(mapStateToProps,mapDispatchToProps)(ChartType);


