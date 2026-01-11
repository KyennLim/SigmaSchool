
import { useState } from "react"
import AddEmployee from "./components/AddEmployee"

export function deletePost(id){
  const API = `https://employees-three.vercel.app/employees/${id}`
  fetch(API, {
    method: "DELETE",
    headers: { 'Content-Type': 'application/json' },
  })
};

function App() {
  return(
    <div>
      <AddEmployee/>
    </div>
  )
};

export default App;