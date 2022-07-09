import React from "react";


const Bulb = (props) => {


  const newLocal = 'ornge';
  return (
    <mesh className='Bulb' {...props}>
      <pointLight intensity={1.5} color={props.color} />
      <sphereBufferGeometry args={[2, 2, 2]}/>
      <meshPhongMaterial/>
    </mesh>
  )
}


export default Bulb