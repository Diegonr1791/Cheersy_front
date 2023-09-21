import { Canvas } from "@react-three/fiber";
import { Physics } from '@react-three/cannon'
import Dice from "@/components/Dice";
import Plane from "@/components/Plane";
import { Suspense } from "react";


const Game = () => {
  return (
    <Suspense fallback={null}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Physics>
          <Dice position={[0, 0, 0]} />
          <Plane />
        </Physics>
      </Canvas>
    </Suspense>
  );
};

export default Game;
