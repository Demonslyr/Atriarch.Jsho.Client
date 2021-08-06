import React from 'react';
import useCanvas from '../hooks/useCanvas';

type canvasProps = any

const Canvas = (props: canvasProps) => {  
  
  const { draw, ...rest } = props
  const canvasRef = useCanvas(draw)
  
  return <canvas ref={canvasRef} {...rest}/>
}

export default Canvas