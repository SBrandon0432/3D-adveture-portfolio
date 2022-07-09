import React,{Suspense} from 'react';
import {Canvas} from 'react-three-fiber';
import Background from '../components/Background';
import Orbit from '../components/Orbit';
import Goblin from '../components/Goblin';

function App() {
  return (
    <div className='App'>



      <Canvas
        camera = {[7,7,7]}
        shadows
      >
        <ambientLight intensity={2.15} position={[0,10,0]}/>

        <Orbit/>
        <axesHelper/>

        <Suspense fallback={null}>
          <Goblin />
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
