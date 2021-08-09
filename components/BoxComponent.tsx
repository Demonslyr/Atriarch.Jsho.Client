import * as React from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export default function Box(props: JSX.IntrinsicElements['mesh']) {
    const mesh = React.useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = React.useState(false)
    const [active, setActive] = React.useState(false)
    useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
  }