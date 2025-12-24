import { Row, Col } from "react-bootstrap";


function ProfileHeader(){
    return(
        <Row className="p-5">
            <Col md={3} className="d-flex align-items-center justify-content-center">
                <img 
                src="https://sig1.co/logo-1"
                alt="Profile"
                className="rounded-circle"
                style={{ width: "150px", height: "150px" }}
                />
            </Col>
            <Col md={9}>profile description</Col>
        </Row>
    );
}

export default ProfileHeader