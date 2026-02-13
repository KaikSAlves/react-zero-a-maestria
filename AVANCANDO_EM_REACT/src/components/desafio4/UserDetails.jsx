

const UserDetails = ({id, nome, idade, profissao}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{nome}</td>
      <td>{idade}</td>
      <td>{profissao}</td>
      <td>{idade >= 18? "Sim": "Não"}</td>
    </tr>
  )
}

export default UserDetails
