import { useEffect, useState } from "react";
import { deletePost } from "../App";

const API = 'https://employees-three.vercel.app/employees'

function AddEmployee() {
    // form input data
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [department, setDepartment] = useState('');
    const [yearsAtCompany, setYearsAtCompany] = useState('');

    // list and error
    const [employees,setEmployees] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const fetchEmployees = () => {
        fetch(API)
            .then(res => res.json())
            .then(data => setEmployees(data))
            .catch(err => setErrorMessage(err))
    }

    useEffect(() => {
        fetchEmployees();
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(API, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, position, department, yearsAtCompany })
        })
        .then(res => res.json())
        .then(fetchEmployees)
        .catch(err => console.error(err));

        setName('');
        setPosition('');
        setDepartment('');
        setYearsAtCompany('');
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="name?"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                 />
                 <input 
                type="text"
                placeholder="position?"
                value={position}
                required
                onChange={(e) => setPosition(e.target.value)}
                 />
                 <input 
                type="text"
                placeholder="department?"
                value={department}
                required
                onChange={(e) => setDepartment(e.target.value)}
                 />
                 <input 
                type="text"
                placeholder="years At Company?"
                value={yearsAtCompany}
                required
                onChange={(e) => setYearsAtCompany(e.target.value)}
                 />
                 <button type="submit">add Employee</button>
            </form>
            {errorMessage && (
                <p>errorMessage</p>
            )}
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id}>
                        <p>{employee.name} - {employee.position} - {employee.department} - {employee.yearsAtCompany}</p>
                        <button onClick={() => deletePost(employee.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AddEmployee;