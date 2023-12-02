import React from 'react'

function List({employees,handleEdit,handleDelete}) {
 
 
    return (
    <div className='contain-table'>
        <table className='striped-table'>
  <thead>
    <tr>
      <th>No.</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Salary</th>
      <th>Date</th>
      <th colSpan={2} className='text-center'>
        Action
      </th>
    </tr>
  </thead>
  <tbody>
   {employees.length > 0 ? (
    employees.map((employee,i)=>{
        const{id,firstName,lastName,email,salary,date}=employee;
       return  (
            <tr key={id}>
            <td>{i + 1}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>${salary}</td>
            <td>{date}</td>
           
           <td className='text-left'>
            <button  className='button-muted-button' onClick={()=>handleDelete(id)}>Delete</button>
           </td>
            </tr>
        )
    })
   ):
   (
    <tr>
        <td colSpan={7}>No employee</td>
    </tr>
   )}
  
  </tbody>
</table>
    </div>
  )
}

export default List