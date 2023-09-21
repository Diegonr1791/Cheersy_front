import { usePlane } from '@react-three/cannon'
const Plane = () => {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }))

    return (
      <mesh ref={ref}>
        <planeGeometry args={[100, 100]} />
      </mesh>
    )
}

export default Plane
