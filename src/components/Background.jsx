import React, {useRef, useMemo} from "react";
import { ReactThreeFiber, Canvas, useFrame, extend, useThree, useLoader } from 'react-three-fiber';
import * as THREE from 'three';
import space from '../Assets/space.jpeg'
import nebula from '../Assets/nebula.jpeg'

const Background = (props) => {

  const {gl} = useThree();
  const texture = useLoader(THREE.TextureLoader, nebula);

  texture.encoding = THREE.sRGBEncoding;
  texture.mapping = THREE.EquirectangularReflectionMapping;
  return (
    <primitive attach='background' object={texture}/>
  )

}

export default Background;