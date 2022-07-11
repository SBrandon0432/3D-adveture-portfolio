import React, { useRef } from "react";
import { useFrame, extend, useThree } from 'react-three-fiber';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
extend({OrbitControls});

const Orbit = (props) => {
  const {
    camera,
    gl,
  } = useThree();
  const ref = useRef();
  useFrame(()=>ref.current.update() )
  return (
    <orbitControls
      attach='orbitControls'
      ref={ref}
      args={[camera, gl.domElement]}
    />
  )
}

export default Orbit