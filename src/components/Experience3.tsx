import {
  Backdrop,
  BakeShadows,
  Float,
  MeshReflectorMaterial,
  OrbitControls,
  PresentationControls,
  Stage,
  useGLTF,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Chair from "./Chair";
// import Chair from "./Chair";
// import Shoe from "./Shoe";

const Experience3: React.FC = () => {
    
  return (
    <>
      <PresentationControls
        speed={1.5}
        global
        zoom={0.7}
        polar={[-0.1, Math.PI / 4]}
        // rotation={[Math.PI / 8, Math.PI / 4, 0]}
      >
        <ambientLight intensity={0.2} />
        <Stage environment="city" intensity={0.6} castShadow={false}>
          <Chair />
        </Stage>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
          <planeGeometry args={[170, 170]} />
          <MeshReflectorMaterial
            mirror={0}
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#101010"
            metalness={0.5}
            envMapIntensity={0}
        dithering={true}
         mixContrast={1}
        // debug={0}
        // reflectorOffset={0.2}
          />
        </mesh>
      </PresentationControls>
    </>
  );
};

export default Experience3;