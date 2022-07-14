import React, { lazy, Suspense, useRef } from "react";
import { useFrame, useThree, extend } from "react-three-fiber";
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import {FrontLoader} from 'three/examples/jsm/loaders/FontLoader'
const Model = lazy(()=> import('../Utility/Model'))
extend({TextGeometry});


const Sign = (props) => {
  const {
    scene,
    gl,
    camera
  } = useThree();
  const ref = useRef();

  useFrame((state)=> {

  })
    const font = new FrontLoader().parse(props.path);

  return (
    <group
      position={props?.position}
      ref = {ref}
      {...props}
      >
        <mesh>
          <textGeometry
            args={[]}
            font={font}
          />
          <meshPhysicalMaterial/>
        </mesh>
    </group>
  )
}


export default Sign