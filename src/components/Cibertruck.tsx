        import { useRef } from 'react'
        import { useGLTF, 
        
         } from '@react-three/drei'
        
        
        export default function Cybertruck(props: any) {
          const group = useRef()
          const { nodes, materials }: any = useGLTF('/model.gltf')
        //   console.log(nodes);
//            useEffect(() => {
//     materials.lights.toneMapped = false;
//     materials.warninglights.toneMapped = false;
//     materials.warninglights.color = new THREE.Color(82, 0, 0);
//   });
          return (
            <group ref={group} {...props} dispose={null}>
        <group scale={0.1} >
<mesh geometry={nodes.Cylinder018_Cylinder007.geometry} material={materials.Car} />
<mesh geometry={nodes.Cylinder018_Cylinder007_1.geometry} material={materials.Windshield} />
</group>

            </group>
          )
        }

useGLTF.preload('/model.gltf')