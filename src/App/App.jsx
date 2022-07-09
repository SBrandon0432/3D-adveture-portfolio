import React,{Suspense} from 'react';
import {Canvas} from 'react-three-fiber';
import { Physics, Debug } from "@react-three/cannon";
import Background from '../components/Background';
import Orbit from '../components/Orbit';
import Goblin from '../components/Goblin';
import BoundingBox from '../components/BoundingBox';


function App() {



  return (
    <div className='App'>


      <Canvas
        camera = {[7,7,7]}
        shadows
        className='canvas'
      >
        <ambientLight intensity={2.15} position={[0,10,0]}/>

        <Orbit/>
        <axesHelper/>

        <Suspense fallback={null}>
          <Physics>
            <BoundingBox visible>
             <Goblin />
            </BoundingBox>
          </Physics>
        </Suspense>
{/*
        <Suspense>
         <Background/>
        </Suspense> */}


      </Canvas>
    </div>
  );
}

export default App;
