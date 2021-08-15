import * as React from 'react'
import * as THREE from 'three'
import {enemyPositionState} from '../gameState'
import { useRecoilValue } from "recoil";

export default function EnemyComponent(props: JSX.IntrinsicElements['sprite']) {
    const enemies = useRecoilValue(enemyPositionState);
    const loader = new THREE.TextureLoader();
    // A png with transparency to use as the target sprite.
    const texture = loader.load("/art/enemy_ship.png");
    return (
      <group>
        {enemies.map((enemy: any) => (
          <sprite
          position={[enemy.x, enemy.y, enemy.z]}
          key={`${enemy.id}`}>
            <spriteMaterial attach="material" map={texture} />
          </sprite>
        ))}
      </group>
    )
  }