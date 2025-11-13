import { useState } from 'react'
import { Container, Form, Button, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [height, setHeight] = useState(0);
  const [weight, setweight] = useState(0);
  const bmi = height > 0 ? (weight /Math.pow(height,2)) : 0;

  const getBMICategory = () => {
    if (bmi === 0) return "";
    if (bmi < 18.5) return "Underweight";
    if (bmi < 24.9) return "Normal weight";
    if (bmi < 29.9) return "Overweight";
    return "Obese";
  };

  return (
    <Container className="my-3">
      <Card className="my-3">
        <Card.Body>
          <Card.Title>BMI calculator</Card.Title>

          <Form>
            <Form.Group>

              <Form.Label>Height (m)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your height in meters"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />

              <Form.Label>weight (kg)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your weight in kg"
                value={weight}
                onChange={(e) => setweight(e.target.value)}
              />

              <Button
              varient="primary"
              className='my-3'
              onClick={(e) => e.preventDefault()}
              >Calculate</Button>
            </Form.Group>
          </Form>

          {bmi > 0 && (
            <div className="text-center mt-4">
              <h4>BMI: {bmi}</h4>
              <p>{getBMICategory()}</p>
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  )
}

export default App
