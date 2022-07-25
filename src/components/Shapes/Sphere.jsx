import React from "react";
import * as THREE from 'three'
import { } from "react-three-fiber";


const Sphere = (props) => {

  return (
    <sphereGeometry args={[props?.radius]}/>
  )
}


export default Sphere;