import { Row, Col, Button, Image } from "react-bootstrap";
import { useEffect, useState } from "react";


export default function ProfilePostCard({ content, postId }) {
    const [likes, setLikes] = useState(0);
    const pic = "https://media.licdn.com/dms/image/v2/D5635AQHtu2XlzM2EVQ/profile-framedphoto-shrink_200_200/B56Znhh8N.J8Ac-/0/1760425395488?e=1772308800&v=beta&t=224nHhaupf_wPxIXzv5vMLKMVhmNpUhkj08BBcJVHqo";

    useEffect(() => {
        fetch(`http://localhost:3000/likes/post/${postId}`)
            .then((response) => response.json())
            .then((data) => setLikes(data.length))
            .catch((error) => console.error("Error:", error));
    },[postId]);

    return (
    <Row
      className="p-3"
      style={{
        borderTop: "1px solid #D3D3D3",
        borderBottom: "1px solid #D3D3D3"
      }}
    >
      <Col sm={1}>
        <Image src={pic} fluid roundedCircle />
      </Col>

      <Col>
        <strong>Kyenn</strong>
        <span> @Kyenn.gmail.com · Apr 16</span>
        <p>{content}</p>
        <div className="d-flex justify-content-between">
          <Button variant="light">
            <i className="bi bi-chat"></i>
          </Button>
          <Button variant="light">
            <i className="bi bi-repeat"></i>
          </Button>
          <Button variant="light">
            <i className="bi bi-heart">{likes}</i>
          </Button>
          <Button variant="light">
            <i className="bi bi-graph-up"></i>
          </Button>
          <Button variant="light">
            <i className="bi bi-upload"></i>
          </Button>
        </div>
      </Col>
    </Row>
  )
}