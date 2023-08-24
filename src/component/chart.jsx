import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";

const MyCharts = () => {
    const [age1, setage] = useState([]);
    const [id1, setid] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const url = 'http://localhost:4000/users';
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                setage(data?.map((item) => item.age));
                setid(data?.map((item) => item.id));
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    const series = [ //data on the y-axis
        {
            name: "age",
            data: age1
        }
    ];
    const options = { //data on the x-axis  
        chart: { id: 'bar-chart' },
        xaxis: {
            categories: id1
        }
    }
    return (
        <div style={{backgroundColor:'white',padding:0}}>
            <h1>Ploting graph</h1>
            <div style={{display:'flex'}}>
            <div style={{marginTop:-50,padding:100}}>
            <Chart
            options={options}
            series={series}
            type="bar"
            width="500"
          />
            </div>
            <div style={{marginTop:140,padding:50}}>
          <Chart
            options={options}
            series={series}
            type="line"
            width="500"
          />
          </div>
            </div>
        </div>
      )
}
    
export default MyCharts;