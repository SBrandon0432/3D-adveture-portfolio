import React from "react";


const Bulb = (props) => {


  return (
    <mesh className='Bulb' {...props}>
      <pointLight intensity={2.5} color={props.color} />
      <sphereGeometry args={[0.5]}/>
      <meshPhongMaterial emissive={'gold'}/>
    </mesh>
  )
}


export default Bulb