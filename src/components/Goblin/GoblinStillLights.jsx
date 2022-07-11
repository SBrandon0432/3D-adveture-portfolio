import React, {lazy, Suspense, useRef, useState} from "react";
import { useFrame, useThree } from "react-three-fiber";
import * as THREE from 'three'
import BulbPointLight from "../Lights/BulbPointLight";
import BoundingBox from "../Utility/BoundingBox";
import Dragables from "../Utility/DragControls";

const GoblinStillLights = (props) => {

  return (
    <group>
      <Dragables transformGroup>

      <BoundingBox dims={[5,5,5]}>
      <BulbPointLight
          position={[-4, 3, 0]}
          color={'#e89848'}/>
        </BoundingBox>
        </Dragables>

    </group>

  )
}

export default GoblinStillLights;