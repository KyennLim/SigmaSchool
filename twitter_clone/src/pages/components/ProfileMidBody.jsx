import { Col, Row, Button, Nav, Image, Spinner } from "react-bootstrap";
import ProfilePostCard from "./ProfilePostCard"
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsByUser } from "./features/posts/postSlice";


export default function ProfileMidBody() {
    const url = "https://pbs.twimg.com/profile_banners/83072625/1602845571/1500x500";
    const pic = "https://media.licdn.com/dms/image/v2/D5635AQHtu2XlzM2EVQ/profile-framedphoto-shrink_200_200/B56Znhh8N.J8Ac-/0/1760425395488?e=1772308800&v=beta&t=224nHhaupf_wPxIXzv5vMLKMVhmNpUhkj08BBcJVHqo";

    const dispatch = useDispatch();
    const posts = useSelector((store) => store.posts.posts);
    const loading = useSelector((store) => store.posts.loading);

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if(token) {
            const decodedToken = jwtDecode(token);
            const userId = decodedToken.id;
            dispatch(fetchPostsByUser(userId));
        }
    },[dispatch]);
    return (
    <Col sm={6} className="bg-light" style={{ border: "1px solid lightgrey" }}>
      <Image src={url} fluid />
      <br />
      <Image
        src={pic}
        roundedCircle
        style={{
          width: 150,
          position: "absolute",
          top: "140px",
          border: "4px solid #F8F9FA",
          marginLeft: 15,
        }}
      />
      <br />

      <Row className="justify-content-end">
        <Col xs="auto">
          <Button className="rounded-pill mt-2" variant="outline-secondary">
            Edit Profile
          </Button>
        </Col>
      </Row>

      <p className="mt-5" style={{ margin: 0, fontWeight: "bold", fontSize: "15px" }}>
        Kyenn
      </p>

      <p style={{ marginBottom: "2px" }}>@Kyenn.gmail.com</p>

      <p>I help people switch careers to be a software developer at sigmaschool.co</p>

      <p>Student</p>

      <p>
        <strong>271</strong> Following <strong>610</strong> Followers
      </p>

      <Nav variant="underline" defaultActiveKey="/home" justify>
        <Nav.Item>
          <Nav.Link eventKey="/home">Tweets</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Replies</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Highlights</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Media</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4">Likes</Nav.Link>
        </Nav.Item>
      </Nav>
      {loading && (
        <Spinner animation="border" className="ms-3 mt-3" variant="primary"/>
      )}

      {posts.length > 0 && posts.map((post)=> (
        <ProfilePostCard key={post.id} content={post.content} postId={post.id} />
      ))}

    </Col>
  );
}
