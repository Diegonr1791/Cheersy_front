import { useBox } from '@react-three/cannon'
import { useGLTF } from '@react-three/drei';
import { ThreeElements } from '@react-three/fiber';

const Dice = (props: ThreeElements['mesh']) => {
    const [ref, api] = useBox(() => ({ mass: 1, props }))
    const { scene } = useGLTF('./dice2.glb');

    return (
        <mesh ref={ref}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Dice
