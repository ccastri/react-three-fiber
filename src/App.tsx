
import { Canvas } from "@react-three/fiber";
// import Tree from './components/Tree.jsx'
// import Duende from "./components/Duende.js";
import { Experience } from "./components/Experience.js";
import { Experience2 } from "./components/Experience2.js";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className=' space-y-4 h-full w-10/12'>
  <div className="border-2 bg-gradient-to-b from-blue-200 via-green-300 to-green-500 border-black h-screen space-y-8 p-4">
      {/* <p className="text-bold text-blue-500 text-xl">klk</p> */}


      <Canvas
       shadows camera={{ position: [-5, 1, 6], fov: 25 }}>
      <Experience/>
      </Canvas>
         </div>
         <div className="h-screen bg-black">
          <Canvas shadows camera={{ position: [0, 3, 9], fov: 42 }}>
      <color attach="background" args={["#15151a"]} />
      <Experience2 />
      <EffectComposer>
        <Bloom
          mipmapBlur
          luminanceThreshold={1}
          intensity={1.42}
          radius={0.32}
        />
      </EffectComposer>
    </Canvas>
    </div>
    </div>
  )
}

export default App
