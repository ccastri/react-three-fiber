import { Environment, OrbitControls } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import { useRef } from "react";
import TreeSpruce from "./Tree";

import Duende from "./Duende";
import WolfKorrigan from "./Wolf-Korrigan";

const OFFSET_X =3.5
const MovingItem = (props: any) =>{
    const ref = useRef<any>()

    useFrame((_state, delta) =>{
     if (ref.current) {
        ref.current.position.x += delta *3
        if (ref.current.position.x >= OFFSET_X)
      ref.current.position.x = -OFFSET_X
    }
    })
    return <group ref={ref}>{props.children}</group>
}
const Background = () => {
const ref = useRef<any>();

return (
<group  position={[0, 0.05, 0]} ref={ref}>
{/* <LampPost scale={[0.5, 0.5, 0.5]} position={[0, 0, -1.5]} /> */}
<MovingItem>

<TreeSpruce scale={[0.1, 0.1, 0.1]} position={[0.36, 0, -1.5]} />

<TreeSpruce scale={[0.12, 0.12, 0.12]} position={[0.28, 0, -4]} />
<TreeSpruce scale={[0.2, 0.1, 0.1]} position={[0.36, 0, -1.5]} />

<TreeSpruce scale={[0.2, 0.12, 0.12]} position={[0.28, 0, -4]} />
</MovingItem>

{/* <Rock scale={[0.1, 0.1, 0.1]} position={[0, 0, 1]} /> */}
</group>
);
};

export const Experience = () => {
return (
<>
<OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI/2} />
<ambientLight intensity={0.2} 
castShadow 
/>
<Environment preset="sunset"  blur={0.8} />
<group position={[2, -1.35, -0.5]}>
<Background  />
{/* <Ankou
    rotation-y={-Math.PI / 2}
    position={[0.9, 0, 0]}
    scale={[0.5, 0.5, 0.5]}
/> */}
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
{/* <ContactShadows */}
{/* <Floor /> */}
      {/* <SoftShadows /> */}


</group>
</>
);
};