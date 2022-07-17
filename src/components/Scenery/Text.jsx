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
      scale={props?.scale}
      ref = {ref}
      >
        <mesh>
          <Text3D
            rotation={props?.rotation}
            font={props?.path}
            {...props}
            >
            GitHub!
            <meshLambertMaterial
              emissive={props?.emissiveColor}
              color = {props?.color}
              depthTest={true}
              depthWrite={true}
            />
          </Text3D>
        </mesh>
    </group>
  )
}


export default Sign