import React,{Suspense} from 'react';
import {Canvas} from 'react-three-fiber';
import Background from '../components/Background';

function App() {
  return (
    <div className='App'>



      <Canvas>


        <Suspense>
         <Background/>
        </Suspense>


      </Canvas>
    </div>
  );
}

export default App;
