
import { Canvas } from "@react-three/fiber";
// import Tree from './components/Tree.jsx'
// import Duende from "./components/Duende.js";
import { Experience } from "./components/Experience";
import { Experience2 } from "./components/Experience2";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { CustomizationProvider } from "./contexts/Customization";
import Experience3 from "./components/Experience3";
import Configurator from "./components/Configurator";
function App() {
  // const [count, setCount] = useState(0)

  return (
    
    <div className=' space-y-4 h-full w-full'>
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
    <CustomizationProvider>
    <div className="h-screen flex relative">
       <Canvas dpr={[1, 2]}>
          <Experience3 />
          <color attach="background" args={["#213547"]} />
          <fog attach="fog" args={["#213547", 10, 20]} />
        </Canvas>
        <div className='flex flex-end right-0 bottom-0 w-4/12 absolute'>

        <Configurator/>
        </div>
    </div>
    </CustomizationProvider>
    </div>
  )
}

export default App
