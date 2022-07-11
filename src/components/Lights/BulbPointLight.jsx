import React from "react";


const BulbPointLight = (props) => {


  return (
    <mesh className='BulbPointLight' {...props}>
      <pointLight intensity={2.5} color={props.color} />
      <sphereGeometry args={[0.5]}/>
      <meshPhongMaterial emissive={'gold'}/>
    </mesh>
  )
}


export default BulbPointLight