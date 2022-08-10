import React, {useRef} from "react";
import { ReactThreeFiber, Canvas, useFrame, extend, useThree, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import marble from '../../Assets/marbleTexture.jpeg'


const Plane = (props) => {

  const ref = useRef()
  const texture = useLoader(THREE.TextureLoader, marble);

  return (
    <mesh
    {...props}
    receiveShadow
    ref={ref}
    >
      <boxBufferGeometry args={[10,2,10]}/>
      <meshPhysicalMaterial
        map={texture}
        metalness={0}
        reflectivity={1}
        clearcoat={1}
      />
    </mesh>
  )
}

export default Plane;


