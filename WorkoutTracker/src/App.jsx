
import { Row, Container, Col, Button } from "react-bootstrap";
import { createContext } from "react";
import WorkoutTracker from "./WorkoutTracker";

export const WorkoutContext = createContext();

export default function App() {
    return (
        <WorkoutContext.Provider value={{}}>
            <Container style={{width: "100dvw", margin: 0, padding: 0}}>
                <Row>
                    <Col>
                        <h1 className="text-center mt-4">Workout Tracker</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <WorkoutTracker />
                    </Col>
                </Row>
            </Container>
        </WorkoutContext.Provider>
    )
}