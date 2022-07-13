import * as THREE from 'three'

const CameraState = {
  cameraPos: new THREE.Vector3(-40,0,8),
  target: new THREE.Vector3(-40,0,0),
  shouldUpdate: true
}

export default CameraState;