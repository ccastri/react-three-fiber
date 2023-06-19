import { Environment, MeshReflectorMaterial, OrbitControls } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import { useRef } from "react";
import Duende from "./Duende";
import TreeSpruce from "./Tree";
import WolfKorrigan from "./Wolf-Korrigan";

interface IMovingItemProps {
  children: React.ReactNode;
}
const OFFSET_X =3.5

// Por props va a recibir la posicion actual y el incremento (_state, delta)
// El numero multiplicando a delta controla la velocidad
// La condicion es para cuando estén mas lejos de 20 unidades en x,
//  se reinicia al primer frame
const MovingItem: React.FC<IMovingItemProps> = ({children}) =>{
    const ref = useRef<THREE.Group | null>(null)

    useFrame((_state, delta) =>{
     if (ref.current) {
        ref.current.position.x += delta *3
        if (ref.current.position.x >= OFFSET_X) ref.current.position.x = -OFFSET_X
    }
    })
    return <group ref={ref}>{children}</group>
}


// El Background tiene su propio grupo:
// El elemento en movimiento va a estar dentro de una etiqueta de grupo
// El mesh de background me sirve para probar luces, sombres y demás efectos visuales
// En los materiales
const Background: React.FC = () => {
const ref = useRef<THREE.Group | null>(null);

return (
<group  position={[0, 0.05, 0]} ref={ref}>
{/* <LampPost scale={[0.5, 0.5, 0.5]} position={[0, 0, -1.5]} /> */}
<MovingItem>

<TreeSpruce scale={[0.1, 0.1, 0.1]} position={[0.36, 0, -1.5]} />

<TreeSpruce scale={[0.12, 0.12, 0.12]} position={[0.28, 0, -4]} />
<TreeSpruce scale={[0.2, 0.1, 0.1]} position={[1.5, 0, 5]} />

<TreeSpruce scale={[0.2, 0.12, 0.12]} position={[1, 0, 3]} />
</MovingItem>
<mesh receiveShadow position={[0, -0.5, 0]}
rotation-x={-Math.PI/2}>
        <planeBufferGeometry args={[20, 20]} />
        <MeshReflectorMaterial
        envMapIntensity={0}
        dithering={true}
        mirror={0.2}
        roughness={0.7}
        mixStrength={5}
        mixContrast={1}
        resolution={1024}
        depthScale={0.01}
        minDepthThreshold={1}
        depthToBlurRatioBias={0.25}
        // debug={0}
        reflectorOffset={0.2}
        color="#489d4b"
         blur={[1000, 400]}
        mixBlur={30}
        />
       
      </mesh>

{/* <Rock scale={[0.1, 0.1, 0.1]} position={[0, 0, 1]} /> */}
</group>
);
};

export const Experience = () => {
return (
<>
<OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI/2} />
<ambientLight intensity={0.2} 
 
/>
<directionalLight position={[0, 10, 0]} intensity={1} color="white" castShadow />
<Environment preset="sunset"  blur={0.8} />
<group position={[2, -1.35, -0.5]}>
<Background  />

<Duende
    rotation-y={-Math.PI / 2}
    position={[-1.6, 1, -1]}
    scale={[1.5, 1.5, 1.5]}
/>
<WolfKorrigan
className="border-2 border-black"
    rotation-y={-Math.PI / 2}
    position={[-1.9, -0.02, 0]}
    scale={[1.5, 1.5, 1.5]}
/>



</group>
</>
);
};