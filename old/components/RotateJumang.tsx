import React, { useEffect, useState } from "react";
import * as THREE from "three"
import { Canvas, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
// import { softShadows } from "drei";
import "@/styles/component/RotateJumang.scss";

// softShadows( {
//   frustrum: 100,
//   size: 100,
//   near: 100,
//   samples: 100,
//   rings: 100
// });

const Jumang3D = () => {
  const [model, setModel] = useState(null)
  const [radRotate, setradRotate] = useState(0.0)

  useEffect(() => {
    new GLTFLoader().load("/jumang.glb", setModel)
  },[])

  useFrame(() => {
    setradRotate(radRotate + 0.01);
  })

  return model ? <primitive object={model.scene} rotation={[ 0, 0, radRotate]} /> : null

}

export default () => {
  return (
    <div id="container">
      <Canvas
        camera={{ position: [0, 12, 1], fov: 50 }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true
          gl.shadowMap.type = THREE.PCFSoftShadowMap
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          position={[0, 100, 100]}
          intensity={0.4}
          shadow-mapSize-width={1027}
          shadow-mapSize-height={720}
          shadow-camera-far={90}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        {/*some point light*/}
        <Jumang3D />
      </Canvas>
    </div>
  );
};