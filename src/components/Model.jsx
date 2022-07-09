import React, { Suspense} from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

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
    } // animations

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
    <Suspense>
      <primitive
        {...props}
        scale={props.scale}
        object={model.scene}
        />
      </Suspense>
  )

}

export default Model