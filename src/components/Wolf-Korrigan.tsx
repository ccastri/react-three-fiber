import  { useRef, useEffect } from 'react'
import { useGLTF, 
        
        useAnimations } from '@react-three/drei'
        
        
export default function Model(props: any) {
    const group = useRef()
    const { nodes, materials, animations }: any = useGLTF('/wolf-korrigan.gltf')
    const { actions, mixer } = useAnimations(animations, group)
    console.log(actions)
    useEffect(() => {
        if (actions && actions['course_loup'] && actions['course_cavalier']) {
        actions['course_loup'].play()  
        actions['course_cavalier'].play()
         mixer.timeScale=2;   
        }
    }, [])

    return (
            <group ref={group} {...props} dispose={null}>
        <group rotation={[0, 0.48, 0,]} scale={0.15} >
<primitive object={nodes.root} />
<skinnedMesh castShadow geometry={nodes.Cavalier.geometry} material={materials['color_main.015']} skeleton={nodes.Cavalier.skeleton} />
</group>
<group scale={0.61} >
<primitive object={nodes.spine004} />
<skinnedMesh castShadow geometry={nodes.Loup.geometry} material={materials['color_main.002']} skeleton={nodes.Loup.skeleton} />
</group>

            </group>
          )
        }

useGLTF.preload('/wolf-korrigan.gltf')