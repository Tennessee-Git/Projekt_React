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

    const [chartOptions,] = useState({
        responsive: true,
        plugins:{
            legend: "top"
        },
        title: {
            display: false
        }
    });

    useEffect(() => {
        const setChart = () => {
            let output = new Map();
            showings.forEach(showing => {
                if(output.has(showing.movieTitle)) {
                    let temp = output.get(showing.movieTitle);
                    output.set(showing.movieTitle, temp + showing.seatsTaken.length);
                }
                else {
                    output.set(showing.movieTitle, showing.seatsTaken.length);
                }
            });
            let array = Array.from(output, ([key, value]) => {
                return {movieTitle: key, ticketCount:value};
              });
            array = array.sort((a,b) => a.ticketCount <= b.ticketCount ? 1 : -1).slice(0,5);
            let labels = array.map((element) => {
                return element.movieTitle;
            });
            let values = array.map((element) => {
                return element.ticketCount;
            });
            console.log("LABELS",labels);
            console.log("VALUES",values);
            return {
                labels:labels,
                datasets: [
                    {
                        label:"Ilość sprzedanych biletów z ostatnich 7 dni",
                        data: values,
                        borderColor: "rgb(102, 99, 139)",
                        backgroundColor: "rgb(220, 218, 253)"
                    }
                ]
            }
        };
        setChartData(setChart());
    },[showings])

    console.log('BARCHART',showings);
    return (
        <div>
            <h2 className='heading'>Wykres popularności filmów:</h2>
            <div className='popularity-item'>
            <Bar options={chartOptions} data={chartData}/>
            </div>
        </div>
        
    )
}

export default PopularityChart