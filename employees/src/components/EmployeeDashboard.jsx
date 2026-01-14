import { useEffect, useState } from "react";

const API = 'https://employees-three.vercel.app/employees'

function EmployeeDashboard() {
    const [employees, setEmployees] = useState([]);  // Changed from {} to []
    const [filteredEmployees, setFilteredEmployees] = useState([]);
    const [department, setDepartment] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const fetchEmployees = () => {
        fetch(API)
            .then(res => res.json())
            .then(data => setEmployees(data))
            .catch(err => setErrorMessage(err.message))
    }

    useEffect(() => {
        fetchEmployees();
    }, []);

    const handleEmployees = () => {
        const filterEmployees = employees.filter((employee) => employee.department === department);
        setFilteredEmployees(filterEmployees);
        setDepartment('');
    }

    // Calculate stats
    const totalEmployees = employees.length;
    
    const averageYears = employees.length > 0 
        ? (employees.reduce((sum, emp) => sum + Number(emp.yearsAtCompany), 0) / employees.length).toFixed(1)
        : 0;
    
    const longestServingEmployee = employees.length > 0
        ? employees.reduce((max, emp) => Number(emp.yearsAtCompany) > Number(max.yearsAtCompany) ? emp : max, employees[0])
        : null;

    // Display filtered employees if filter is active, otherwise show all
    const displayEmployees = filteredEmployees.length > 0 ? filteredEmployees : employees;

    return(
        <div>
            <h3>Employees stats Dashboard</h3>
            <input 
                type="text"
                placeholder="Filter by department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
            />
            <button onClick={handleEmployees}>Filter</button>
            <button onClick={() => setFilteredEmployees([])}>Show All</button>
            
            {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
            
            <h4>Stats</h4>
            <p>Total employees: {totalEmployees}</p>
            <p>Average years at company: {averageYears}</p>
            {longestServingEmployee && (
                <p>Longest serving employee: {longestServingEmployee.name} - {longestServingEmployee.yearsAtCompany} years</p>
            )}
            
            <ul>
                {displayEmployees.map((employee) => (
                    <li key={employee.id}>
                        <p>{employee.name} - {employee.position} - {employee.department} - {employee.yearsAtCompany}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EmployeeDashboard;