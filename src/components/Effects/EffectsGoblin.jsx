import React,{Suspense, useState} from 'react';
import * as THREE from 'three'
import {useFrame} from '@react-three/fiber';
import { EffectComposer, DepthOfField, Bloom, Vignette, GodRays } from '@react-three/postprocessing'
import { Cloud, Effects } from '@react-three/drei';


const EffectsGoblin = (props) => {


  return (
    <group>
    <EffectComposer>
       <DepthOfField focusDistance={0} focalLength={0.06} bokehScale={2} height={480} />
    </EffectComposer>
    </group>
  )
}

export default EffectsGoblin;