
import { useEffect, useState } from 'react';
import './App.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


function App() {

  const url = "http://localhost:3000/products";
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const paginationModel = { page: 0, pageSize: 5 };

  const fields = [{ field: 'id', headerName: 'ID', width: 200 },
  { field: 'name', headerName: 'Nome', width: 560 },
  { field: 'price', headerName: 'Preço', width: 500 }]

  useEffect(() => {
    async function fetchData(){
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data)
    }

    fetchData();
  }, []);

  const save = async (e) => {
      e.preventDefault();

      const product = {
        name, price
      };

      const res = await fetch(url , {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      });

      const data = await res.json();

      setProducts((prevProducts) => [...prevProducts, data])

      clear();
  }

  const clear = () => {
    setName("");
    setPrice("");
  }
  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <div className='data-container'>
         <Paper sx={{ width: '100%' }}>
          <DataGrid
            rows={products}
            columns={fields}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10, 20, 50]}
            checkboxSelection
            sx={{ border: 0 }}
          />
         </Paper>
        <form onSubmit={save} className='form'>
          <h2>Formulário</h2>
          {/* <TextField label="Id" variant="outlined" value={id} onChange={(e) => setId(e.target.value)} /> */}
          <TextField label="Nome" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
          <TextField label="Preço" variant="outlined" value={price} onChange={(e) => setPrice(e.target.value)} />
          <Stack spacing={2} direction="row">
              <Button variant="contained" type='submit'>Salvar</Button>
              <Button variant="outlined" onClick={() => clear()}>Limpar</Button>
          </Stack>
        </form>
      </div>
     
    </div>
  );
}

export default App;
