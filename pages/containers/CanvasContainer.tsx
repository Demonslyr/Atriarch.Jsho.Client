import * as React from 'react'

type canvasProps = any

const Canvas = (props:canvasProps) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);

    const { draw, maxRad, ...rest} = props;

    React.useEffect(() => {
        const canvas = canvasRef.current;
        if(!canvas){return;}
        const context = canvas.getContext('2d');
        if(!context){return;}

        let frameCount = 0;
        let animationFrameId:number;

        const render = () => {
            frameCount++;
            draw(context, frameCount, maxRad);
            animationFrameId = window.requestAnimationFrame(render);
        }
        render();
        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }
    }, []);

    return <canvas ref={canvasRef} {...rest} />
}

export default Canvas