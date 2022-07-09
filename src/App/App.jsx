import React,{Suspense} from 'react';
import {Canvas} from 'react-three-fiber';
import { Physics, Debug } from "@react-three/cannon";
import Background from '../components/Background';
import Orbit from '../components/Orbit';
import Goblin from '../components/Goblin';
import BoundingBox from '../components/BoundingBox';
import Bulb from '../components/Bulb';

function App() {



  return (
    <div className='App'>

      <Canvas
        camera = {[7,7,7]}
        shadows
        className='canvas'
      >
        <ambientLight intensity={2.15} position={[0,10,0]}/>

        <mesh position={[0,3,0]}>
          <pointLight color='white' intensity={2}
            castShadow
          />
          <sphereBufferGeometry args={[1,1,1]}/>
          <meshPhongMaterial color={'white'}/>
        </mesh>

        <Orbit/>
        <axesHelper/>

        <Suspense fallback={null}>
          <Physics>
            <BoundingBox visible>
             <Goblin />
            </BoundingBox>
          </Physics>
        </Suspense>


        <Suspense>
         <Background/>
        </Suspense>

        <mesh position={[0,-2,0]}>
      <boxBufferGeometry args={[5,1,5]} />
      <meshPhysicalMaterial color={'black'}/>
    </mesh>


      </Canvas>
    </div>
  );
}

export default App;
