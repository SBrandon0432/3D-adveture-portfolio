import React, { lazy, Suspense, useRef } from "react";
import { useFrame, useThree, extend} from "@react-three/fiber";
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader'
import { Text3D, Html } from "@react-three/drei";
const Model = lazy(()=> import('../Utility/Model'))
// extend({TextGeometry});


const Sign = (props) => {
  const {
    scene,
    gl,
    camera
  } = useThree();
  const ref = useRef();



  return (
    <group
      position={props?.position}
      scale={props?.scale}
      ref = {ref}
      className='text_button'
      onClick = {(e)=> {
        console.log(e)
        window.location = props?.url
      }}
      >
        <mesh
          >
          <Text3D
            rotation={props?.rotation}
            font={props?.path}
            {...props}
            >
            {props.text}
            <meshLambertMaterial
              emissive={props?.emissiveColor}
              color = {props?.color}
            />

          </Text3D>
        </mesh>
    </group>
  )
}


export default Sign