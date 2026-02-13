import { useState } from "react";

const ListRender = () => {

    const [list, setList] = useState(
        [{"id":1,"first_name":"Kissie","last_name":"Firbanks","email":"kfirbanks0@yolasite.com","gender":"Female","ip_address":"112.98.37.18"},
        {"id":2,"first_name":"Dov","last_name":"Oglethorpe","email":"doglethorpe1@ow.ly","gender":"Male","ip_address":"195.200.67.37"},
        {"id":3,"first_name":"Gabriello","last_name":"Dimock","email":"gdimock2@tiny.cc","gender":"Male","ip_address":"215.134.134.171"},
        {"id":4,"first_name":"Marlin","last_name":"Follan","email":"mfollan3@angelfire.com","gender":"Male","ip_address":"24.62.79.183"},
        {"id":5,"first_name":"Isabeau","last_name":"Moukes","email":"imoukes4@archive.org","gender":"Female","ip_address":"37.253.104.184"},
        {"id":6,"first_name":"Maxine","last_name":"Sheehan","email":"msheehan5@unesco.org","gender":"Female","ip_address":"155.63.43.87"},
        {"id":7,"first_name":"Susi","last_name":"Chitham","email":"schitham6@uiuc.edu","gender":"Female","ip_address":"16.148.22.153"},
        {"id":8,"first_name":"Prisca","last_name":"Found","email":"pfound7@google.com","gender":"Female","ip_address":"253.133.120.17"},
        {"id":9,"first_name":"Oralee","last_name":"Bricket","email":"obricket8@homestead.com","gender":"Female","ip_address":"186.130.36.94"},
        {"id":10,"first_name":"Whitney","last_name":"Raulstone","email":"wraulstone9@amazon.de","gender":"Male","ip_address":"63.195.79.184"}]
    );

    const [fields] = useState(["Id", "Nome", "Sobrenome", "Email", "Gênero", 'Ip', "Ações"])

    const removeUser = (id) => {
        setList((prevList) => {
            
            return prevList.filter((user) => id !== user.id);

        });
    }

    return (
    
        <div>
            <table>
                <thead>
                    <tr>
                        {fields.map((field, i) => (
                            <th key={i}>
                                <span>{field}</span>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {list.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>{item.gender}</td>
                            <td>{item.ip_address}</td>
                            <td><button onClick={() => removeUser(item.id)}>Excluir</button></td>
                        </tr>
                    ))}
                </tbody>    
            </table>
        </div>
    );
};

export default ListRender;