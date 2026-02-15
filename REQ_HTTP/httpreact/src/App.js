
import { useEffect, useState } from 'react';
import './App.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function App() {

  const url = "http://localhost:3000/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data)
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth:400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='left'>Id</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Price&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell scope="row">{row.id} </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default App;
