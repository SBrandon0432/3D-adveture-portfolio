import React from "react";


const Bulb = (props) => {


  return (
    <mesh className='Bulb' {...props}>
      <pointLight intensity={1.5} color={'white'} />
      <sphereBufferGeometry args={[2, 2, 2]}/>
      <meshPhongMaterial/>
    </mesh>
  )
}


export default Bulb