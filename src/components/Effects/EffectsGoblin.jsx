import React,{Suspense, useState} from 'react';
import * as THREE from 'three'
import {useFrame} from 'react-three-fiber';
import { EffectComposer, DepthOfField, Bloom, Vignette, GodRays } from '@react-three/postprocessing'


const EffectsGoblin = (props) => {


  return (
    <EffectComposer>
       <DepthOfField focusDistance={0} focalLength={0.12} bokehScale={2} height={480} />
    </EffectComposer>
  )
}

export default EffectsGoblin;