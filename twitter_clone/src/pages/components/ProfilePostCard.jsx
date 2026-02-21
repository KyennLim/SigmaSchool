import { Row, Col, Button, Image } from "react-bootstrap";


export default function ProfilePostCard() {
    const pic = "https://media.licdn.com/dms/image/v2/D5635AQHtu2XlzM2EVQ/profile-framedphoto-shrink_200_200/B56Znhh8N.J8Ac-/0/1760425395488?e=1772308800&v=beta&t=224nHhaupf_wPxIXzv5vMLKMVhmNpUhkj08BBcJVHqo";

    return (
        <Row
            className="p-3 "
            style={{
                borderTop: "1px solid #D3D3D3", 
                borderBottom: "1px solid #D3D3D3"
            }}
        >
            <Col sm={1}>
                <Image src={pic} roundedCircle />
            </Col>

            <Col>
                <strong>Kyenns</strong>
                <span>@kyenn.gmail.com . Apr 16</span>
                <p>WEEEELCOME</p>
                <div className="d-flex justify-content-between">
                    <Button variant="light">
                        <i className="bi bi-chat"></i>
                    </Button>
                    <Button variant="light">
                        <i className="bi bi-repeat"></i>
                    </Button>
                    <Button variant="light">
                        <i className="bi bi-heart"></i>
                    </Button>
                    <Button variant="light">
                        <i className="bi bi-graph-up"></i>
                    </Button>
                    <Button variant="light">
                        <i className="bi bi-three-dots"></i>
                    </Button>
                </div>
            </Col>
        </Row>
    )
}