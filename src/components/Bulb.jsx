import React from "react";
import * as THREE from 'three';



const Bulb = (props) => {

  return (
    <mesh className='Bulb' {...props}>
      <pointLight intensity={1.5} color={'blue'} />
      <sphereBufferGeometry args={[0, 10, 0]}/>
      <meshPhongMaterial/>
    </mesh>
  )
}


export default Bulb