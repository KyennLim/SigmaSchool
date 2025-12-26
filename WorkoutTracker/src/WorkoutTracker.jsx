import { Button, Row, Col} from "react-bootstrap";
import { useState } from "react";

export default function WorkoutTracker() {
    const [running, setRunning] = useState(0);
    const [lifting, setLifting] = useState(0);
    const [cycling, setCycling] = useState(0);

    function handleRunning() {
        setRunning(running + 5);
    }

    function handleLifting() {
        setLifting(lifting + 5);
    }
    
    function handleCycling() {
        setCycling(cycling + 5);
    }

    function handleReset() {
        setRunning(0);
        setLifting(0);
        setCycling(0);
    }

    return (
        <Col className="text-center mt-4">
            <Row className="mb-4 justify-content-center align-items-center">
                <Col>
                    <Button variant="light" className="m-2" onClick={handleRunning}>
                        🏃‍♂️ add 5 min
                    </Button>
                </Col>
                <Col>
                    <Button variant="light" className="m-2" onClick={handleLifting}>
                        🏋️‍♂️ add 5 min
                    </Button>
                </Col>
                <Col>
                    <Button variant="light" className="m-2" onClick={handleCycling}>
                        🚴‍♀️ add 5 min
                    </Button>
                </Col>
            </Row>
            <Row className="mb-4 flex flex-column justify-content-center align-items-center">
                <p>Running: {running} minutes</p>
                <p>Lifting: {lifting} minutes</p>
                <p>Cycling: {cycling} minutes</p>
            </Row>
            <p>{`you have workout a a grand total of ${running + lifting + cycling} minutes`}</p>
            <Button variant="primary" onClick={handleReset}>Reset</Button>
        </ Col>
    )
};