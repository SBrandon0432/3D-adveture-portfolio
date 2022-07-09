import React,{Suspense} from 'react';
import {Canvas} from 'react-three-fiber';
import Background from '../components/Background';
import Orbit from '../components/Orbit';

function App() {
  return (
    <div className='App'>



      <Canvas
        camera = {[7,7,7]}
      >
        <Orbit/>
        <Suspense>
         <Background/>
        </Suspense>


      </Canvas>
    </div>
  );
}

export default App;
