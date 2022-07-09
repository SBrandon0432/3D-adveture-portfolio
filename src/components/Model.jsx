import React, {lazy, Suspense} from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useBox } from '@react-three/cannon';

const Model = props =>{


  const model = useLoader(
    GLTFLoader, props.path
  ) //loads file

    let mixer;
    if (model.animations.length > 0) {
      mixer = new THREE.AnimationMixer(model.scene);
      model.animations.forEach((clip, index) => {
        const action = mixer.clipAction(clip);
        action.play();
      })
    }

    useFrame((scene, delta)=> {
      mixer?.update(delta)
    }); // renders animations

  model.scene.traverse(child => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.side = THREE.FrontSide;
    }
  }) // loads shadows

  return (
      <primitive
        scale={props.scale}
        object={model.scene}
      /> // model render
  )

}

export default Model