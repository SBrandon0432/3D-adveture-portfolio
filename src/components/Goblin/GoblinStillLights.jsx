import React from "react";
import BulbPointLight from "../Lights/BulbPointLight";

const GoblinStillLights = (props) => {

  return (
    <group className = 'goblin_still_lights' >

      <BulbPointLight
          position={[-5.5, 4.3, -8.1]}
          color={'#e89848'}
          emissive={''}
          intensity={0.6}
          radius={[0]}

          />


      <BulbPointLight
          position={[-1.4, 3.4, -0.9]}
          color={'#f5d7ba'}
          emissive={''}
          intensity={2.1}
          radius={[0]}

          />


      <BulbPointLight
          position={[-7.4, 3, -5.8]}
          color={'blue'}
          emissive={''}
          intensity={0.6}
          radius={[0]}

          />


    </group>

  )
}

export default GoblinStillLights;