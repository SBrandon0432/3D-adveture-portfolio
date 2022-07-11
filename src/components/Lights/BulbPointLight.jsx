import React from "react";


const BulbPointLight = (props) => {


  return (

      <mesh className='BulbPointLight' {...props}>
        <pointLight intensity={props?.intensity} color={props.color} ref={props?.lightRef}/>
        <sphereGeometry args={[props.radius]}/>
        <meshPhongMaterial emissive={props?.emissive}/>
      </mesh>
  )
}


export default BulbPointLight