import React, {useState, useEffect} from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable(props) {
  const {data} = props
  const [keys, setKeys] = useState([]);
  
  useEffect(() => {
    if (data.length > 0) {
      setKeys(Object.keys(data[0]));
    }
  }, [data]);

  return (
    <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {keys && 
                keys.map((key, index) => (
                <TableCell key={index}>{key.toUpperCase()}</TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {data && 
                data.map((item, rowIndex) => (
                <TableRow key={rowIndex}>
                    {keys.map((key, index) => (
                    <TableCell key={index}>{item[key]}</TableCell>
                    ))}
                </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  );
}
