import * as React from 'react'

const useCanvas = (draw: (context: CanvasRenderingContext2D|null, frameCount: number) => void) => {
  
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  
  React.useEffect(() => {
    
    const canvas = canvasRef.current;
    if(!canvas){return;}
    const context = canvas.getContext('2d');
    if(!context){return;}
    let frameCount = 0;
    let animationFrameId: number;
    
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return canvasRef
}

export default useCanvas