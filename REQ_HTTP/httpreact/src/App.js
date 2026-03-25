
import { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useFetch } from './hooks/useFetch';

function App() {


  const url = "http://localhost:3000/products";
  const [products, setProducts] = useState([]);

  const {data: items, httpConfig} = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");


  // useEffect(() => {
  //   async function fetchData(){
  //     const res = await fetch(url)
  //     const data = await res.json()
  //     setProducts(data)
  //   }

  //   fetchData();
  // }, []);

  const save = async (e) => {
      e.preventDefault();

      let product = {
        name,
        price
      };

      // const res = await fetch(url , {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify(product)
      // });

      // const data = await res.json();

      // setProducts((prevProducts) => [...prevProducts, data])

      httpConfig(product, "POST");

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
         <ul>
          {items && items.map((product) => (
            <li key={product.id}>
              {product.name} - R$ {product.price}
            </li>
          ))}
         </ul>
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
