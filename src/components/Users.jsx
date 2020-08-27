import React from 'react';
import { Table } from 'react-bootstrap';

const Users = () => {
    return (
        <>
           <Table striped bordered hover>
               <thead>
                   <tr>
                       <th>#</th>
                       <th>First Name</th>
                       <th>Last Name</th>
                       <th>Username</th>
                   </tr>
               </thead>
               <tbody>
                   <tr>
                       <td>1</td>
                       <td>Mark</td>
                       <td>Otto</td>
                       <td>@olie</td>
                   </tr>
                   <tr>
                       <td>2</td>
                       <td>Orlando</td>
                       <td>Ericu</td>
                       <td>@Spander</td>
                   </tr>
               </tbody>
           </Table>
        </>
    )
}

export default Users;