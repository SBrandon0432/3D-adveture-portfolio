import React, {useRef} from "react";
import { ReactThreeFiber, Canvas, useFrame, extend, useThree, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import marble from '../../Assets/marbleTexture.jpeg'


const Plane = (props) => {

  const ref = useRef()
  const texture = useLoader(THREE.TextureLoader, marble);

  return (
    <group
      rotation={props?.rotation}
    >

    <mesh
    {...props}
    receiveShadow
    ref={ref}
    >
      <cylinderBufferGeometry
        args={[11,11,.5]}

      />
      <meshPhysicalMaterial
        map={texture}
        metalness={0}
        reflectivity={1}
        clearcoat={1}
        />
    </mesh>
  </group>
  )
}

export default Plane;


