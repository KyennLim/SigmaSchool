import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";


export default function Home(){
    const todos = useContext(TodoContext).todos;
    return (
        <Container>
            <h1 className="my-3">your todos</h1>
            <Row>
                <CardGroup todos={todos}/>
            </Row>
        </Container>
    )
}

function CardGroup({todos}) {
    return todos.map((todo) => {
        const completed = todo.completed
        const bg = completed ? "success" : "danger"
        return (
            <Col md={4} key={todo.id}>
                <Card className="my-3">
                    <Card.Body>
                        <Card.Title>{todo.Title}</Card.Title>
                        <Card.Text>{todo.Text}</Card.Text>
                        <Badge bg={bg}>{!completed && "Not"}completed</Badge>
                    </Card.Body>
                </Card>
            </Col>
        )
    }) 
}