import { Col } from "react-bootstrap"

function Item(props) {
  return (
    <Col md={4}>
      <img src={process.env.PUBLIC_URL + "/img/s" + (props.index + 1) +".png"} alt={"s" + (props.index + 1)} width="50%" />
      <h4>{props.data.title}</h4>
      <p>{props.data.price}</p>
    </Col>
  );
}

export default Item;