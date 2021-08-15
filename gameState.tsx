import { atom } from "recoil";

export const playerPositionState = atom({
  key: "playerPosition",
  default: { position: {} }
});

export const enemyPositionState = atom({
  key: "enemyPosition",
  default: [{x:-10, y:5, z:0, id:1, velocity:10, centered:false, direcion:1, fireRate: 10, projVelocity: 25, shield:0, type:0 }]
});

export const enemyProjectileState = atom({
    key: "enemyProjectiles",
    default: []
  });

export const playerProjectileState = atom({
  key: "playerProjectiles",
  default: []
});

// Can this be combined with player state?
export const playerScoreState = atom({
  key: "playerScore",
  default: 0
});