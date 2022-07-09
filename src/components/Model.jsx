import React, { Suspense} from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGLTF  } from '@react-three/drei'

const Model = props =>{

  // const model = useLoader(
  //   GLTFLoader, props.path
  // ) //loads file
    const model = useGLTF(props.path)

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
      // console.log(child.material.depthWrite, 'mesh')

      if (child.material.depthTest) {
        child.material.depthWrite=true;
      }

      child.castShadow = true;
      child.receiveShadow = true;
      child.material.side = THREE.DoubleSide;
    }
  }) // loads shadows

  return (
    <Suspense>
      <primitive
        {...props}
        scale={props.scale}
        object={model.scene}
        transparent={false}
        />
      </Suspense>
  )

}

export default Model