import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export const PopularityTable = ({showings}) => {
    const [tableData, setTableData] = useState([]);
    // console.log('TABLE',showings);
    useEffect(() => {
        const setData = () =>{
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
            //   console.log(array);
            return array.sort((a,b) => a.ticketCount <= b.ticketCount ? 1 : -1).slice(0,5);
        };
        setTableData(setData());
    },[showings])
  return (
  <div>
    <h2 className='heading'>Tabela popularności filmów:</h2>
    <Table className='popularity-item'>
        <TableHead>
            <TableRow>
                <TableCell align='center'>Tytuł filmu</TableCell>
                <TableCell align='center'>Ilość sprzedanych biletów</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {tableData.map((showing) => (
                <TableRow key={showing.movieTitle}>
                    <TableCell align='center'>{showing.movieTitle}</TableCell>
                    <TableCell align='center'>{showing.ticketCount}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
  </div>
  )
}
