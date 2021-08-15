import { useRecoilState } from "recoil";
import { enemyPositionState, enemyProjectileState, playerProjectileState, playerScoreState } from "./gameState";

function distance(p1:any, p2:any) {
    const a = p2.x - p1.x;
    const b = p2.y - p1.y;
    const c = p2.z - p1.z;
  
    return Math.sqrt(a * a + b * b + c * c);
  }

  function GameTimer() {
    const [enemyPosition, setEnemyPosition] = useRecoilState<any>(enemyPositionState);
    const [enemyProjectiles, setEnemyProjectiles] = useRecoilState(enemyProjectileState);
    const [playerProjectile, setPlayerProjectile] = useRecoilState(playerProjectileState);
    const [playerScore, setPlayerScore] = useRecoilState(playerScoreState);

    // Detect hits on enemies

    // Detect hits on player

    // Move enemies... and spawn entities/projectiles?
    setEnemyPosition(enemyPosition.map((enemy:any) => ({x: enemy.x, y: enemy.y, z: enemy.z,...enemy})))
    // Move all projectiles
  }