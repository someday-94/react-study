import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Item from "../components/Item";
import sample from "../data/sample";
//import aData from "./data" // import a from "./data.js"     .js 를 생략 가능, 작명 가능
//import {b, c} from "./data" // 여려 개의 데이터를 import 할때는 작명을 못하고 export할때 사용한 이름을 그대로 사용해 한다.

function Detail() {
  let [data] = useState(sample);

  return (
    <Container>
      <Row>
        {
          /* data.map(function(data, index) { */
          data.map((data, index) => {
            return <Item data={data} key={index} index={index} />;
          })
        }
      </Row>
    </Container>
  );
}

export default Detail;