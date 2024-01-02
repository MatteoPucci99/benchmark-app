import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";


const FeedbackPage = () => {
  const [selectedStars, setSelectedStars] = useState();


  const handleStarClick = (selectedStar) => {
    setSelectedStars(selectedStar);
  };

  const numOfStars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Container className="h-100 d-flex flex-column justify-content-center align-items-center text-center text-white">
      <Row className="row-cols-1">
        <Col>
          <h1 style={{fontWeight:'bold', fontSize:'3.5em'}} >Tell us how it's going</h1>
        </Col>
        <Col className="mt-4">
          <h3>
            From 0 to 10, how likely are you to recommend EPICODE,
            <br /> to a friend or a colleague?
          </h3>
        </Col>
        <Col className="mt-4">
          {numOfStars.map((el, index) => {
            const starColor =
            index <= selectedStars ? "#00FFFF" : "#0b110b";
          
            return (
              <FaStar
                key={index}
                style={{
                  fontSize: "3.5em",
                  color: starColor,
                  cursor: "pointer",
                }}
                className="me-2"
                onClick={() => handleStarClick(index)}
              />
            );
          })}
        </Col>
        <Col className="mt-4">
          <h3>Leave us an open feedback about your experience so far</h3>
        </Col>
        <Col className="mt-4">
          <input id="inputFeedback" placeholder="Write your comment here" type="text"/>
        </Col>
        <Col className="mt-4">
          <button id="moreInfoButton">MORE INFO</button>
        </Col>
      </Row>
    </Container>
  );
};

export default FeedbackPage;
