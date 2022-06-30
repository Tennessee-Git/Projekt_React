import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export const PopularityTable = ({showings}) => {
    console.log('TABLE',showings);
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
            {showings.map((showing) => (
                <TableRow key={showing.id}>
                    <TableCell align='center'>{showing.movieTitle}</TableCell>
                    <TableCell align='center'>{showing.ticketCount}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
  </div>
  )
}
