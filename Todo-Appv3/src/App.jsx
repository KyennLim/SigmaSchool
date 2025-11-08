import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import ErrorPage from "./pages/ErrorPage"
import AddTodo from "./pages/AddTodo"
import "bootstrap"


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
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Layout />}/>
      <Route index element ={<Home />}/>
      <Route path="/AddTodo" element ={<AddTodo />}/>
      <Route path="*" element ={<ErrorPage />}/>
    </Routes>
    </BrowserRouter>

  )
}