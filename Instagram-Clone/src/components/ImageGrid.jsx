import { useContext } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { ProfileContext } from "../App";

export default function ImageGrid(){
    const images = useContext(ProfileContext).posts.map(post => post.image);

    const renderImages = () => {
        return images.map((src, index) => (
            <Col key={index} md={4} className="p-1">
                <Image 
                src={src}
                alt={`Post ${index + 1}`}
                fluid
                />
            </Col>
        ));
    };
    return(
        <Row>
            {renderImages()}
        </Row>
    );
};