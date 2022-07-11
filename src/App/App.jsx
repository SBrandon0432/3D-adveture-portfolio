import React,{Suspense} from 'react';
import {Canvas} from 'react-three-fiber';
import { Physics, Debug } from "@react-three/cannon";
import Background from '../components/Background';
import Orbit from '../components/Orbit';
import Goblin from '../components/Goblin';
import BoundingBox from '../components/BoundingBox';
import Bulb from '../components/Bulb';
import * as THREE from 'three'
import JapaneseHouse from '../components/JapaneseHouse';

function App() {



  return (
    <div className='App'>

      <Canvas
        camera = {[7,7,7]}
        shadows
        className='canvas'
      >
        <ambientLight intensity={2.15} position={[0,10,0]}/>

        <Bulb  position={[0,6,0]} color={'white'}/>
        <Orbit/>
        <axesHelper args={[5,5,5]}/>

        <Physics>
            <BoundingBox visible>
             <JapaneseHouse
              position={[-9,14,-26]}
              rotation={[0,Math.PI,0]}
             />
            </BoundingBox>
          </Physics>


          <Physics>
            <BoundingBox visible>
             <Goblin
                position={[0,0,0]}
                rotation={[0, 190, 0]}
             />
            </BoundingBox>
          </Physics>


        <Suspense>
         <Background/>
        </Suspense>

      </Canvas>
    </div>
  );
}

export default App;
