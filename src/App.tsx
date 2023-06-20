import { Canvas } from "@react-three/fiber";
// import Tree from './components/Tree.jsx'
// import Duende from "./components/Duende.js";
import { Experience } from "./components/Experience";
import { Experience2 } from "./components/Experience2";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { CustomizationProvider } from "./contexts/Customization";
import Experience3 from "./components/Experience3";
import Configurator from "./components/Configurator";
import ProstheticForm from "./components/Parameters";
import KneeProthesisExperience from "./components/KneeProthesisExperience";
function App() {
  return (
    
    <div className=' space-y-4 h-full w-full'>
      {/* <div className="border-2 bg-gradient-to-b from-blue-200 via-green-300 to-green-500 border-black h-screen space-y-8 p-4"> */}

{/* Animation: elf up in a wolf's back speeding fast with anothe elf runnign behind them*/}
      {/* <Canvas
       shadows camera={{ position: [-5, 1, 6], fov: 25 }}>
      <Experience/>
      </Canvas>
         </div> */}


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





{/*! TODO: I've to figure out why R3F is not letting me use THREE JS modules 
For orbit controls and stl loader in the KneeProthesisExperience Component
formulary is working but I need the loader firs
*/}
    <CustomizationProvider>
    <div className=" h-screen flex relative">
      {/* dpr controls the resolution on diferent devices: 
          1px for larger screens and 2px por retine kind of screens */}
        <color attach="background" args={["#213547"]} />
        <fog attach="fog" args={["#213547", 10, 20]} />
       <Canvas dpr={[1, 2]}>
          <Experience3 />
          {/* <KneeProthesisExperience /> */}
        </Canvas>
            {/* <Canvas dpr={[1, 2]}>
      
      </Canvas > */}
        <div className='flex flex-end opacity-50 hover:opacity-100  hover:bg-slate-500 transition-all transform hover:ease-in-out duration-150 hover:scale-105 p-4 max-h-44 max-w-100 border-2  overflow-x-hidden   overflow-y-auto w-11/12 absolute'>


        {/* <ProstheticForm/> */}
        <Configurator/>
        </div>
    </div>
    </CustomizationProvider>




    
    </div>
  )
}

export default App


// TODO: Variables to configure the printer
// {
//   "name": "ProthesisPrintingParameters",
//   "properties": [
//     {
//       "name": "material",
//       "type": "string",
//       "description": "The material used for printing the prosthesis."
//     },
//     {
//       "name": "layerHeight",
//       "type": "number",
//       "description": "The layer height used for printing the prosthesis in millimeters."
//     },
//     {
//       "name": "infillDensity",
//       "type": "number",
//       "description": "The infill density used for printing the prosthesis as a percentage."
//     },
//     {
//       "name": "supportEnabled",
//       "type": "boolean",
//       "description": "Indicates whether support structures are enabled or disabled."
//     }
//   ]
// }
