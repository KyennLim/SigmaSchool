

import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import { store } from './store';
import Home from './pages/Home';
import Cart from './pages/Cart';

export function Layout() {
  const cartItemCount = useSelector(state=> state.cart.length);

  return (
    <>
    <Navbar bg='light' variant='light'>
      <Container>
        <Navbar.Brand as={Link} to={'/'}>E-Commerce App</Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to={'/cart'}>
          <i className='bi bi-cart'></i>
          <Badge pill variant="primary">
            {cartItemCount}
          </Badge>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="cart" element={<Cart />}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </Provider>
  )
}