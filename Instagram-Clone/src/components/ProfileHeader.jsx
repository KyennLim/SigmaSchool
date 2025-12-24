import { Row, Col, Image, Button} from "react-bootstrap";
import { useContext } from "react";
import { ProfileContext } from "../App";


function ProfileHeader(){
    const {
        image, 
        name, 
        posts_no, 
        followers, 
        following, 
        subheader,
        account_type, 
        description, 
        link,
    } = useContext(ProfileContext);
    return(
        <Row className="p-5">
            <Col md={3} className="d-flex align-items-center justify-content-center">
                <Image 
                src={image}
                alt="Profile"
                className="rounded-circle"
                style={{ width: "150px", height: "150px" }}
                roundedCircle
                />
            </Col>
            <Col md={9}>
            <span className="me-4" style={{ fontSize:"20px" }}>
                {name}
            </span>
            <Button className="me-2">Follow back</Button>
            <Button variant="light me-2">Message</Button>
            <Button variant="light me-2">
                <i className="bi bi-person-plus"></i>
            </Button>
            <Button variant="light">
                <i className="bi bi-three-dots"></i>
            </Button>
            <br />
            <br />
            <p style={{ margin: 0, fontWeight: "bold"}}>{subheader}</p>
            <p style={{ margin: 0, color: "grey"}}>{subheader}</p>
            <p style={{ margin: 0 }}>{description}</p>
            <a href={link}>{link}</a>
            </Col>
        </Row>
    );
}

export default ProfileHeader