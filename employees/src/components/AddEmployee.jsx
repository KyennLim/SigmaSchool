import { useEffect, useState } from "react";

const API = 'https://employees-three.vercel.app/employees'

function AddEmployee() {
    // form input data
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [department, setDepartment] = useState('');
    const [yearsAtCompany, setYearsAtCompany] = useState('');

    // list and error
    const [employees, setEmployees] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    // Track which employee is being edited
    const [editingId, setEditingId] = useState(null);

    const fetchEmployees = () => {
        fetch(API)
            .then(res => res.json())
            .then(data => setEmployees(data))
            .catch(err => setErrorMessage(err.message))
    }

    useEffect(() => {
        fetchEmployees();
    }, []);

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

    const deletePost = (id) => {
        const deleteAPI = `${API}/${id}`;
        fetch(deleteAPI, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            if (res.ok) {
                setEmployees(employees.filter(emp => emp.id !== id));
            } else {
                console.error(`Failed to delete employee ${id}: ${res.status}`);
                setErrorMessage(`Failed to delete employee. Status: ${res.status}`);
            }
        })
        .catch(err => {
            console.error('Delete error:', err);
            setErrorMessage('Error deleting employee');
        });
    }

    const updatePost = (id, updatedData) => {
        const updateAPI = `${API}/${id}`;
        fetch(updateAPI, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedData)
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(`Failed to update: ${res.status}`);
            }
        })
        .then(() => {
            fetchEmployees();
            setEditingId(null);
        })
        .catch(err => {
            console.error('Update error:', err);
            setErrorMessage('Error updating employee');
        });
    }

    const handleUpdate = (employee) => {
        const updatedData = {
            name: prompt("New name:", employee.name) || employee.name,
            position: prompt("New position:", employee.position) || employee.position,
            department: prompt("New department:", employee.department) || employee.department,
            yearsAtCompany: prompt("Years at company:", employee.yearsAtCompany) || employee.yearsAtCompany
        };
        
        updatePost(employee.id, updatedData);
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
                <p style={{color: 'red'}}>{errorMessage}</p>
            )}
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id}>
                        <p>{employee.name} - {employee.position} - {employee.department} - {employee.yearsAtCompany}</p>
                        <button onClick={() => deletePost(employee.id)}>Delete</button>
                        <button onClick={() => handleUpdate(employee)}>Update</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AddEmployee;