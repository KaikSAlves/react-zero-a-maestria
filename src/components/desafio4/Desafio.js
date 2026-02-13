
import UserDetails from "./UserDetails";

const Desafio = () => {

    const data = 
        [{"id": 1, "nome":"Melisent","idade":23,"profissao":"Training"},
        {"id": 2, "nome":"Lynn","idade":82,"profissao":"Human Resources"},
        {"id": 3, "nome":"Orv","idade":43,"profissao":"Support"},
        {"id": 4, "nome":"Romy","idade":88,"profissao":"Research and Development"},
        {"id": 5, "nome":"Kalila","idade":32,"profissao":"Business Development"}];

    return (
        <div>
            <h1>
                Desafio 4
            </h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Profissao</th>
                        <th>Ápto a carteira?</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <UserDetails id={item.id} nome={item.nome} idade={item.idade} profissao={item.profissao}></UserDetails>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Desafio;