import * as React from 'react'
import { Canvas} from '@react-three/fiber';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from '../components/BoxComponent';
import Button from 'react-bootstrap/Button';
export default function MainContainer(){

    return(
      <>
      <Row>
        <Col style={{justifyContent: 'center'}} xs={{span:12}}>
          <h1>Main Page</h1>
        </Col>
      </Row>
      <Row>
        <Col style={{justifyContent: 'center'}} xs={{span:12}}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </Canvas>
        </Col>
      </Row>
      <Row>
        <Col style={{justifyContent: 'center'}} xs={{span:12}}>
        <Button onClick={() => []}>Test Button</Button>
        </Col>
      </Row>
      </>
    )
  }