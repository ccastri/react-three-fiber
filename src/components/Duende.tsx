import { useAnimations, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { Vector3 } from 'three';

type ModelProps = {
  [key: string]: any;
};

export default function Duende(props: ModelProps) {
  const group = useRef<any>();
  const { nodes, materials, animations }: any = useGLTF('/duende.gltf');
  const { actions, mixer } = useAnimations(animations, group);
  // console.log(actions)

  useEffect(() => {
  
 if (actions && actions['pose_chapeau'] && actions['course_chapeau']) {
  actions['pose_chapeau'].play();
  actions['course_chapeau'].play();
}
  mixer.timeScale=2; 
}, [])
 const modelPosition = new Vector3(0, 0, 0); // Set the desired position [x, y, z]
  return (
    <group ref={group} {...props} position={modelPosition} dispose={null}>
      <group rotation={[0, 0.01, 0]}>
        <primitive object={nodes.root} />
        <skinnedMesh  geometry={nodes.Chapeau.geometry} material={materials['color_main.014']} skeleton={nodes.Chapeau.skeleton} />
      </group>
    </group>
  );
}

useGLTF.preload('/duende.gltf');
