import { Row, Col, Button, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";


export default function ProfilePostCard({ content, postId }) {
    const [likes, setLikes] = useState([]);

    // Decoding to get the userId
    const token = localStorage.getItem("authToken");
    const decode = jwtDecode(token);
    const userId = decode.id;


    const pic = "https://media.licdn.com/dms/image/v2/D5635AQHtu2XlzM2EVQ/profile-framedphoto-shrink_200_200/B56Znhh8N.J8Ac-/0/1760425395488?e=1772308800&v=beta&t=224nHhaupf_wPxIXzv5vMLKMVhmNpUhkj08BBcJVHqo";
    const baseUrl = "http://localhost:3000";

    useEffect(() => {
        fetch(`${baseUrl}/likes/post/${postId}`)
        .then((response) => response.json())
        .then((data) => setLikes(data))
        .catch((error) => console.error("Error:", error));
    }, [postId]);

    const isLiked = likes.some((like) => like.user_id === userId);

    const handleLike = () => (isLiked? removeFromLikes() : addToLikes());

    const addToLikes = () => {
        axios.post(`${baseUrl}/likes`, { 
            user_id: userId,
            post_id: postId
        })
        .then((response) => {
            setLikes([...likes, {...response.data,likes_id:response.data.id}]);
        })
        .catch((error) => console.error("Error:", error));
    }

    const removeFromLikes = () => {
        const like = likes.find((like) => like.user_id === userId);
        if (like) {
            axios.put(`${baseUrl}/likes/${userId}/${postId}`) // Include userId and postId in the url
            .then(() => {
                // Update the state to reflect the removed like
                setLikes(likes.filter((likeItem) => likeItem.user_id !== userId)); 
            })
            .catch((error) => console.error("Error:", error));
        }
    };
    

    useEffect(() => {
        fetch(`http://localhost:3000/likes/post/${postId}`)
            .then((response) => response.json())
            .then((data) => setLikes(data))
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
          <Button variant="light" onClick={handleLike}>
            {isLiked ? (
                <i className="bi bi-heart-fill text-danger"></i>
            ) : (
                <i className="bi bi-heart"></i>
            )}
            {likes.length}
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