import React,{Suspense, useState} from 'react';
import {Canvas} from 'react-three-fiber';
import { Physics } from "@react-three/cannon";
import { OrbitControls } from '@react-three/drei';
import Background from '../components/Background';
import Goblin from '../components/Goblin/Goblin';
import BoundingBox from '../components/BoundingBox';
import BulbPointLight from '../components/Lights/BulbPointLight';
import * as THREE from 'three'
import JapaneseHouse from '../components/JapaneseHouse';

function App() {

  return (
    <div className='App'>

      <Canvas
        camera = {{position:[-2.4,0.5,4.8]}}
        shadows
        className='canvas'
      >
        {/* <ambientLight intensity={1.15} position={[0,10,0]}/> */}

        <OrbitControls />
        <axesHelper args={[5,5,5]}/>

        <Physics>
             <JapaneseHouse
              position={[-10,14,-26]}
              rotation={[0,Math.PI,0]}
             />
          </Physics>

          <Physics>
            <Goblin
                position={[0,0,0]}
                rotation={[0, 190, 0]}
                />
        </Physics>


        <Suspense>
         <Background/>
        </Suspense>

      </Canvas>
    </div>
  );
}

export default App;
