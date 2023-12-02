import React, { useState,useRef,useEffect } from 'react'

function Add({employees,setIsAdding,setEmployees}) {
  const[firstName,setFirstName]=useState()
  const[lastName,setLastName]=useState()
  const[email,setEmail]=useState()
  const[salary,setSalary]=useState()
  const[date,setDate]=useState()
  
  const textInput = useRef(null)
  
  useEffect(()=>{
    textInput.current.focus()
  },[])
  const handleAdd=(e)=>{
   e.preventDefault();
   if(!firstName || !lastName || !email || !salary || !date ){
    return alert("all fields are required")
   }
   const id = employees.length + 1
   const newEmployee= {
    id,
    firstName,
    lastName,
    email,
    salary,
    date
   }
   employees.push(newEmployee);
   setEmployees(employees);
   setIsAdding(false);
   
   alert('data submitted')
  }
 
    return (
 <div className="small-container">
    <form onSubmit={handleAdd}>
        <h1>Add employee</h1>
        <label htmlFor="firstName">First Name </label>
        <input type="text" id='firstName' ref={textInput} name='firstName' value={firstName} onChange={e=>setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name </label>
        <input type="text" id='lastName' name='lastName' value={lastName} onChange={e=>setLastName(e.target.value)}
        />
        <label htmlFor="email">Email </label>
        <input type="email" id='email' name='email' value={email} onChange={e=>setEmail(e.target.value)}
        />
        <label htmlFor="salary"> Salary ($)</label>
        <input type="number" id='salary' name='salary' value={salary} onChange={e=>setSalary(e.target.value)}
        />
        <label htmlFor="date"> Date</label>
        <input type="date" id='date' name='date' value={date} onChange={e=>setDate(e.target.value)}
        />
       
        <div style={{marginTop:'30px'}}>
         <input type="submit" value='Add'/>
        
         <input type="button" value="Cancel"className='muted-button' 
         onClick={()=>setIsAdding(false)}/>
        </div>
    </form>
 </div>
  )
}

export default Add