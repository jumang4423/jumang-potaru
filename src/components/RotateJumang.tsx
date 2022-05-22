import React, {useEffect, useState} from "react"
import * as THREE from "three"
import {Canvas, useFrame} from "@react-three/fiber"
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import "@/styles/component/RotateJumang.scss"
import {EffectComposer, Grid} from "@react-three/postprocessing";
import {BlendFunction} from 'postprocessing'

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

const Jumang3D: React.FC<Props> = ({hovered, setHover}: Props) => {
  const [model, setModel] = useState<any>(null)
  const [radRotate, setradRotate] = useState<any>(0.0)
  const [ticker, setTicker] = useState<number>(40)
  const [ticker2, setTicker2] = useState<number>(0)
  const viewState = {
    objectNumber: 1
  }

  // load model
  useEffect(() => {
    new GLTFLoader().load("/jumang.glb", setModel)
  }, [])

  // rotate jumang boi
  useFrame(({clock}) => {
    // rotate thing
    setradRotate(radRotate + 0.0125)
    ticker !== 0 && setTicker(ticker => ticker - 1)
    ticker2 !== 0 && setTicker2(ticker => ticker - 1)
  })

  // if model is loaded, return jumang 3d model!

  if (model === null) {
    return (<></>)
  }

  return <primitive
    object={model.scene}
    rotation={[0, 0.25, radRotate]}
    position={[0, (ticker2 * ticker2 * ticker2 * ticker2 / 100000.0), 0]}
    antialias={false}
    onClick={() => setHover(!hovered)}
  />
}

export default () => {

  const [hovered, setHover] = useState(false)

  return (
    <div id="container">
      <Canvas
        style={{
          height: "365px",
        }}
        frameloop="demand"
        camera={{position: [-0.2, 32, 1], fov: 12}}
        onCreated={({gl}) => {
          gl.shadowMap.enabled = true
          gl.shadowMap.type = THREE.VSMShadowMap
        }}
      >
        <ambientLight intensity={0.7}/>
        <directionalLight
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
        <EffectComposer>
          <Grid scale={0.9} lineWidth={0.01} blendFunction={BlendFunction.AVERAGE}/>
        </EffectComposer>

        {/*some point light*/}
        {isWebGLAvailable() ? <Jumang3D hovered={hovered} setHover={setHover}/> : <p id="webglError"></p>}
      </Canvas>
    </div>
  );
};
