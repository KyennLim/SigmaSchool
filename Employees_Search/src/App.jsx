
import React,{ useState, useEffect } from "react";

function App(){
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchEmployees(id){
    const response = await fetch(`https://employees-three.vercel.app/employees/search/${id}`)
    const data = await response.json();
    return data
  }

  function handleSearchTerm(event){
    setSearchTerm(event.target.value)
  };

  function handleEmployeeData(data){
    setResults(data);
  }

  useEffect(() => {
    if(searchTerm) {
      setLoading(true);
      fetchEmployees(searchTerm)
      .then((data) => handleEmployeeData(data))
      .catch((error) => console.error(error))
      .finally(()=>setLoading(false))
    }
  },[searchTerm])

  return(
    <>
      <h1>Employee Search</h1>
      <input 
      type="text"
      onChange={(e) => handleSearchTerm(e)}
      placeholder="Type a name"
      />
      {loading ? <p>Searching employee...</p>:""}
      {!loading ?(results.length > 0 && 
      <ul>
        {results.map((employee, index)=> 
        <li key={index}>
          <p>{employee.name} - {employee.department}</p>
        </li>
        )}
      </ul>)
      :
      <p>No employees found</p>
      }
    </>
  );
}

export default App;