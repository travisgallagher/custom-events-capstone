import React, { useEffect, useState } from 'react'
import "./index.css"
import axios from 'axios'

export const Employees = ({setPageTitle}) => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [employees, setEmployees] = useState([]);

const clearForm = () => {
  setFname('');
  setLname('');
  setEmail('');
  setPhone('');
};

const handleGetEmployees = async () => {
  if(employees.length > 0) {
  setEmployees([]);
  }
  try {
    const res = await axios.get('http://localhost:4004/employees');
    console.log(res.data);
    
    setEmployees(res.data);
  } catch (error) {
    console.error(error);
  }
};
const handleDeleteEmployee = async (employee) => {
 const deleteUser = window.confirm(`Are you sure you want to delete ${employee.fname} ${employee.lname}`)
 if(deleteUser) {
  try {
    await axios.delete(`http://localhost:4004/employees/${employee.employeeid}`);
    handleGetEmployees();
  } catch (error) {
    console.error(error);
  }
 }
}
  const handleCreateEmployee = async (e) => {
    e.preventDefault();
    const reqBody = {
      fName:fname, 
      lName:lname, 
      phone, 
      email, 
      empAge:18, 
      address:"", 
      city:"", 
      state:"", 
      zipcode:0, 
      empPay:20,
      isPartTime:true,
      isEventManager: false,
    }
    try {
     await axios.post('http://localhost:4004/employees',{data:reqBody});
      alert(`${fname} created!`);
      handleGetEmployees();
      clearForm();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetEmployees();
    setPageTitle('Employees')
  },[])

  return (
    <div className='employeeContainer wrapper'>
       <div className='employeeList'>
      <div className='employeesContainer'>
      <h1>Employees</h1>

        {employees.length > 0 &&
          employees.map((e, i) => (
          <div className='employees' key={i}>
            <div className='employee'>
                <h4>{e.fname} {e.lname}</h4>
                <h4>Email: <span>{e.email}</span></h4>
                <h4>Phone: <span>{e.phone}</span></h4>
                <h4>Status: <span>{e.isparttime ? "Part Timer" : "Full Timer"}</span></h4>
                <button onClick={() => handleDeleteEmployee(e)}>Delete Employee</button>
            </div>
          </div>
          ))
        }
      </div>
    </div>
      <form onSubmit={handleCreateEmployee} className="employeeForm">
        <div className='formHeader'>
        <h1>Add Employee</h1>
        </div>
        <div className="formField">
          <input onChange={e => setFname(e.target.value)} value={fname} placeholder='first name' type="text" name="fname" id="fname" required/>
        </div>
        <div className="formField">
          <input onChange={e => setLname(e.target.value)} value={lname} placeholder='last name' type="text" name="lname" id="lname" required/>
        </div>
        <div className="formField">
          <input onChange={e => setEmail(e.target.value)} value={email} placeholder='email' type="email" name="email" id="email" required/>
        </div>
        <div className="formField">
          <input onChange={e => setPhone(e.target.value)} value={phone} placeholder='phone number' type="phone" name="phone" id="phone" required/>
        </div>
        <button  onSubmit={handleCreateEmployee} type='submit'>Submit</button>
    </form>
    </div>
  )
}
