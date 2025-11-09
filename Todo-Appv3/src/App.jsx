import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import ErrorPage from "./pages/ErrorPage"
import AddTodo from "./pages/AddTodo"
import 'bootstrap/dist/css/bootstrap.min.css';
import useLocalStorage from "use-local-storage";
import { TodoContext } from "./contexts/TodoContext";


export function Layout(){
  return (
    <>
    <Navbar bg="light" varient="light">
      <Container>
        <Navbar.Brand href="/">Todos</Navbar.Brand>
      </Container>
    </Navbar>
    <Outlet />
    </>
  )
}

export default function App() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  return (
    <TodoContext.Provider value={{todos, setTodos}}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Layout />}/>
      <Route index element ={<Home />}/>
      <Route path="/AddTodo" element ={<AddTodo />}/>
      <Route path="*" element ={<ErrorPage />}/>
    </Routes>
    </BrowserRouter>
    </TodoContext.Provider>

  )
}