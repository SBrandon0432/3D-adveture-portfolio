//-------Libraries / tools
import React,{Suspense, useState} from 'react';
import * as THREE from 'three'
import {Canvas, useThree} from 'react-three-fiber';
import { Physics } from "@react-three/cannon";
import { OrbitControls, View } from '@react-three/drei';

//----------goblin Model
import Goblin from '../components/Goblin/Goblin';

//----------Scenery
import JapaneseHouse from '../components/Scenery/JapaneseHouse';
import Background from '../components/Scenery/Background';
import NatureStop from '../components/Scenery/NatureStop';

//----------Utility
import BulbPointLight from '../components/Lights/BulbPointLight';
import BoundingBox from '../components/Utility/BoundingBox';

//-------Development only
import Orbit from '../components/Utility/Orbit';  // use drei for deployment







function App() {

  return (
    <div className='App'>
      <div style={{background: 'black'}}>
        <h1 style={{
          textAlign: 'center',
          color: 'red'
        }}>
          MAY TAKE UP TO 1 MIN TO LOAD, PLEASE WAIT! CLICK RIDER TO START ADVENTURE
        </h1>
      </div>
      <div>

      </div>
      <Canvas
        frameloop="demand"
        performance = {
         {
          current: 1,
          min: 0.1,
          max: 1,
          debounce: 200,
          regress: () => {return null}
          }
        }
        shadows
        className='canvas'
        gl = {{
          powerPreference: "high-performance",
        }}
      >

          {/* <Orbit/> */}
          <OrbitControls attach={'orbitControls'}/>
          {/* <axesHelper args={[5,5,5]}/> */}

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

        <Physics>
          <NatureStop
            position={[-40,6,-16]}
            rotation={[0,3.25,0]}
          />
        </Physics>

      </Canvas>
    </div>
  );
}

export default App;
