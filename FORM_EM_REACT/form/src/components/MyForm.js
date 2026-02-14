import { useState } from "react";
import "./MyForm.css";  

const MyForm = ({user}) => {

  const [name, setName] = useState(user? user.name : "");
  const [email, setEmail] = useState(user? user.email : "");
  const [onSaved, setOnSaved] = useState(false);

  const clearForm = () => {
    setName("");
    setEmail("");
  }
  const save = (event) => {
    event.preventDefault();
    setOnSaved(true);
    clearForm();
  }

  return (
    <div>
      <form onSubmit={save}>
        <div>
            <label htmlFor="name">Nome</label>
            <input
             type="text"
             name='name'
             onChange={(e) => setName(e.target.value)}
             placeholder='Nome'
             value={name}/>
            <label>
              
              <span>Email</span>
              <input 
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                value={email}/>

            </label>

            <input type="submit" value="enviar" />

            {onSaved && 
              <ul>
                <li>Nome salvo {name}</li>
                <li>Email salvo {email}</li>
              </ul>
            }
        </div>
      </form>
    </div>
  )
}

export default MyForm
