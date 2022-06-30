import React, {useState, useEffect} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
);

const PopularityChart = ({showings}) => {
    const [chartData,setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: [],
            datasets: [
                {
                    label:"Ilość sprzedanych biletów z ostatnich 7 dni",
                    data: [],
                    borderColor: "rgb(102, 99, 139)",
                    backgroundColor: "rgb(220, 218, 253)"
                }
            ]
        });
        setChartOptions({
            responsive: true,
            plugins:{
                legend: "top"
            },
            title: {
                display: false
            }
        })
    },[])

    console.log('BARCHART',showings);
    return (
        <div>
            <h2 className='heading'>Wykres popularności filmów:</h2>
            <Bar options={chartOptions} data={chartData} className='popularity-item'/>
        </div>
        
    )
}

export default PopularityChart