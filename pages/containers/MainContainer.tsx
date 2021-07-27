import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Canvas from './CanvasContainer'
import Button from 'react-bootstrap/Button'
export default function MainContainer(){
    const draw = (context: CanvasRenderingContext2D, frameCount: number) => {
        context.fillStyle = '#000000';
        context.beginPath();
        context.arc(50,100,20*Math.sin(frameCount*0.05)**2,0,2*Math.PI);
        context.fill();
    }
    return(
      <>
      <Row>
        <Col style={{justifyContent: 'center'}} xs={{span:12}}>
          <h1>Main Page</h1>
        </Col>
      </Row>
      <Row>
        <Col style={{justifyContent: 'center'}} xs={{span:12}}>
            <Canvas
              draw={draw}
            />
        </Col>
      </Row>
      <Row>
        <Col style={{justifyContent: 'center'}} xs={{span:12}}>
        <Button onClick={() => alert("Hi")}>Test Button</Button>
        </Col>
      </Row>
      </>
    )
  }