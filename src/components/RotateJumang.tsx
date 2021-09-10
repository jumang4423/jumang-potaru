import React, { useEffect, useState } from "react"
import * as THREE from "three"
import { Canvas, useFrame } from "react-three-fiber"
import { globalHistory } from '@reach/router'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import "@/styles/component/RotateJumang.scss"
interface Props {
  hovered: boolean
  setHover: Function
}

//when the browser webGL is disabled, normally all components r hidden somehow
//this function for escaping the problem
function isWebGLAvailable() {
  try {
    var canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {

    return false;

  }
}

const Jumang3D: React.FC<Props> = ({ hovered, setHover }: Props) => {
  const [model, setModel] = useState<any>(null)
  const [radRotate, setradRotate] = useState<any>(0.0)
  const [ticker, setTicker] = useState<number>(40)
  const [ticker2, setTicker2] = useState<number>(0)

  // load model
  useEffect(() => {
    new GLTFLoader().load("/jumang.glb", setModel)
  }, [])

  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === 'PUSH') setTicker2(40)
    })
  }, [setTicker])

  // rotate jumang boi
  useFrame(({clock}) => {
    // rotate thing
    setradRotate(radRotate + 0.0125)
    ticker !== 0 && setTicker(ticker => ticker - 1)
    ticker2 !== 0 && setTicker2(ticker => ticker - 1)
  })

  // if model is loaded, return jumang 3d model!
  return model ? <primitive
    object={model.scene}
    rotation={[0, 0, radRotate]}
    position={[0, (ticker / 40) * Math.sin(ticker / 3.0) + (ticker2 * ticker2 / 250.0),0]}
    antialias={false}
    onClick={() => setHover(!hovered)}
  /> : null
}

export default () => {

  const [hovered, setHover] = useState(false)

  return (
    <div id="container">
      <Canvas
        camera={{ position: [0, 12, 1], fov: 45 }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = false
          gl.shadowMap.type = THREE.PCFSoftShadowMap
        }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight
          castShadow
          position={[0, 100, 100]}
          intensity={0.2}
          shadow-mapSize-width={513}
          shadow-mapSize-height={360}
          shadow-camera-far={90}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        {/*some point light*/}
        {isWebGLAvailable() ? <Jumang3D hovered={hovered} setHover={setHover} /> : <p id="webglError"></p>}
      </Canvas>
    </div>
  );
};