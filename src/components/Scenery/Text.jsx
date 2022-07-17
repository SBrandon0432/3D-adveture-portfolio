import React, { lazy, Suspense, useRef } from "react";
import { useFrame, useThree, extend} from "react-three-fiber";
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader'
import { Text3D } from "@react-three/drei";
const Model = lazy(()=> import('../Utility/Model'))
// extend({TextGeometry});


const Sign = (props) => {
  const {
    scene,
    gl,
    camera
  } = useThree();
  const ref = useRef();

  useFrame((state)=> {

  })
    const font = new FontLoader().parse(props?.path);

  return (
    <group
      position={props?.position}
      ref = {ref}
      {...props}
      >
        <mesh>
          <Text3D font={props.path}>
            test!
            <meshLambertMaterial />
          </Text3D>
        </mesh>
    </group>
  )
}


export default Sign