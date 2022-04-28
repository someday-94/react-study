import { Button } from "react-bootstrap"
import "../css/Jumbotron.css"

function Jumbotron() {
    return (
      <div className="jumbotron">
        <h1>Test, Project!</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p>
          <Button variant="primary" href="/detail">Learn more</Button>
        </p>
      </div>
    );
}

export default Jumbotron;