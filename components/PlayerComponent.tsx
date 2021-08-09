import * as React from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export default function PlayerComponent(props: JSX.IntrinsicElements['sprite']) {
    const player = React.useRef<THREE.Sprite>(null!)
    
    const loader = new THREE.TextureLoader();
    // A png with transparency to use as the target sprite.
    const texture = loader.load("/art/player_ship.png");

    useFrame(({mouse}) => {
      // var vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
      // vector.unproject( camera );
      // var dir = vector.sub( camera.position ).normalize();
      // var distance = - camera.position.z / dir.z;
      // var pos = camera.position.clone().add( dir.multiplyScalar( distance ) );

      // arbitrary multiplier to keep 
        player.current.position.y = mouse.y*10.8;
        player.current.position.x = mouse.x*19.15;
    });
    return (
      <sprite
      position={[0, 0, 0]}
      ref={player}>
        <spriteMaterial attach="material" map={texture} />
      </sprite>
    )
  }