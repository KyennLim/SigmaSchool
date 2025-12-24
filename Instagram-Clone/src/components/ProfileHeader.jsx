import { Row, Col, Image} from "react-bootstrap";
import { useContext } from "react";
import { ProfileContext } from "../App";


function ProfileHeader(){
    const { image } = useContext(ProfileContext);
    return(
        <Row className="p-5">
            <Col md={3} className="d-flex align-items-center justify-content-center">
                <Image 
                src={image}
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