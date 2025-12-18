import { Container, Row, Col } from "react-bootstrap";
import Item from "../components/Item";

const items = [
    { id: 1, name: "Pen", description: "It's a pen", price: "RM10" },
    {
        id:2,
        name: "Laptop",
        description: "I think it's a laptop",
        price: "RM1200",
    },
    { id: 3, name: "iphone 2", description: "Might be iphone 3", price: "RM30"},
];

export default function Home() {
    return (
        <Container>
            <Row>
                {items.map((item) =>(
                    <Col key={item.id} md={3}>
                        <Item item={item}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}