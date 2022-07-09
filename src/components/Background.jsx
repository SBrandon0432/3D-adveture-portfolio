import React, {useRef, useMemo} from "react";
import { ReactThreeFiber, Canvas, useFrame, extend, useThree, useLoader } from 'react-three-fiber';
import * as THREE from 'three';
import nebula from '../Assets/nebula.jpeg'

const Background = (props) => {

  const texture = useLoader(THREE.TextureLoader, nebula);

  texture.encoding = THREE.sRGBEncoding;
  texture.mapping = THREE.EquirectangularReflectionMapping;
  return (
    <primitive attach='background' object={texture}/>
  )

}

export default Background;