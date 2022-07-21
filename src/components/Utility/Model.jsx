import React, { Suspense} from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGLTF  } from '@react-three/drei'

const Model = props =>{
    const model = useGLTF(props.path)
    if (props?.consoleModel) {
      console.log(model, `model from ${props?.path}`)
    }

    let mixer;

    if (props.animate) {
    if (model.animations.length > 0) {
      mixer = new THREE.AnimationMixer(model.scene);
      model.animations.forEach((clip, index) => {
        const action = mixer.clipAction(clip);
        action.play();
      })
    }
  } // animations on/off

    useFrame((scene, delta)=> {
      mixer?.update(delta)

      // console.log(scene.camera.position)


    }); // renders animations

  model.scene.traverse(child => {
    if (child.isMesh) {
      // console.log(child.material, 'mesh')

      if (child.material.name === 'Grnd') {
        child.material.visible = false // turns bikes shadow off for right now.
      } // Goblin bike

      if (child.material.depthTest) {
        child.material.depthWrite=true;
      } // Goblin bike

      child.castShadow = true;
      child.receiveShadow = true;
      child.material.side = THREE.DoubleSide;

    }
  }) // loads shadows

  return (
    <Suspense>
      <primitive
        scale={props.scale}
        object={model.scene}
        />
      </Suspense>
  )
}

export default Model