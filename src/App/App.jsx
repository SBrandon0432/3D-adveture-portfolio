import React,{Suspense, useState} from 'react';
import {Canvas} from 'react-three-fiber';
import { Physics, Debug } from "@react-three/cannon";
import { OrbitControls } from '@react-three/drei';
import Background from '../components/Background';
import Orbit from '../components/Orbit';
import Goblin from '../components/Goblin';
import BoundingBox from '../components/BoundingBox';
import Bulb from '../components/Bulb';
import * as THREE from 'three'
import JapaneseHouse from '../components/JapaneseHouse';
import MoveGoblin from '../components/MoveBiker';

function App() {
  const [isMove, setIsMove] = useState(false)

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
            <BoundingBox visible>
             <JapaneseHouse
              position={[-10,14,-26]}
              rotation={[0,Math.PI,0]}
             />
            </BoundingBox>
          </Physics>


          {
            isMove ?
            <group >
              <Physics>
               <BoundingBox visible>
                <MoveGoblin
                    position={[0,0,0]}
                    rotation={[0, 190, 0]}
                    />
              </BoundingBox>
            </Physics>
            </group>
            :
            <group>

            <Physics>
            <BoundingBox visible>
             <Goblin
                position={[0,0,0]}
                rotation={[0, 190, 0]}
                move={setIsMove}
                />
            </BoundingBox>
          </Physics>
          </group>
          }





        <Suspense>
         <Background/>
        </Suspense>

      </Canvas>
    </div>
  );
}

export default App;
