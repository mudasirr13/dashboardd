import React, { useState } from 'react'
import Swal from 'sweetalert2';

import Header from './Header';
import List from './List';
import Add from './Add';


import { employeesData } from '../../data';

function Dashboard() {

    const [employees, setEmployees] = useState(employeesData);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    

   const handleEdit=(id)=>{
    const editedPerson = employees.filter((employee)=>employee.id ===id)
    
   }
   const  handleDelete=(id)=>{
    const deletedPerson=employees.filter((employee)=>employee.id !==id)
    setEmployees(deletedPerson)
   }

    return (
        <div className='container'>
           {!isAdding &&(
            <>
            <Header setIsAdding={setIsAdding}/>
           
            <List employees={employees}   handleEdit={handleEdit} handleDelete={handleDelete}/>
            </>
          
           )}
           {isAdding &&(
            <>
            <Add employees={employees} setIsAdding={setIsAdding} setEmployees={setEmployees}/>
            </>
           )}
          
        </div>
    )
}

export default Dashboard;