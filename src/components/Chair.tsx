import { useGLTF, useTexture } from "@react-three/drei";

import * as THREE from "three";
import { useCustomization } from "../contexts/Customization";



function Chair(props: any) {
  const { nodes, materials }: any = useGLTF("./chair.gltf");
  const { material, legs, chairColor, cushionColor } = useCustomization();

  // Obtects to be destructured within {...props}
  const leatherTextureProps = useTexture({
    // map: "./textures/leather/Leather_008_Base Color.jpg",
    normalMap: "./textures/leather/Leather_008_Normal.jpg",
    roughnessMap: "./textures/leather/Leather_008_Roughness.jpg",
    aoMap: "./textures/leather/Leather_008_Ambient Occlusion.jpg",
  });

  const fabricTextureProps = useTexture({
    // map: "./textures/fabric/Fabric_Knitted_006_basecolor.jpg",
    normalMap: "./textures/fabric/Fabric_Knitted_006_normal.jpg",
    roughnessMap: "./textures/fabric/Fabric_Knitted_006_roughness.jpg",
    aoMap: "./textures/fabric/Fabric_Knitted_006_ambientOcclusion.jpg",
  });
// !Repeat textures for uniformity and ram optimization
  // leatherTextureProps.map.repeat.set(3, 3);
  leatherTextureProps.normalMap.repeat.set(3, 3);
  leatherTextureProps.roughnessMap.repeat.set(3, 3);
  leatherTextureProps.aoMap.repeat.set(3, 3);
  // leatherTextureProps.map.wrapS = leatherTextureProps.map.wrapT =
  //   THREE.MirroredRepeatWrapping;
  //! This is for iterating over each X and Y axis and repeat the leather texture element
  // !All across the chair (wrapS for horizontal and wrapT for vertical)
  // leatherTextureProps.normalMap.wrapS = leatherTextureProps.normalMap.wrapT =
  //   THREE.MirroredRepeatWrapping;
  leatherTextureProps.roughnessMap.wrapS =
    leatherTextureProps.roughnessMap.wrapT = THREE.MirroredRepeatWrapping;
  leatherTextureProps.aoMap.wrapS = leatherTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;
//! Color de la textura original
  // fabricTextureProps.map.repeat.set(3, 3);
  fabricTextureProps.normalMap.repeat.set(3, 3);
  fabricTextureProps.roughnessMap.repeat.set(3, 3);
  fabricTextureProps.aoMap.repeat.set(3, 3);
  //! Color de la textura original
  // fabricTextureProps.map.wrapS = fabricTextureProps.map.wrapT =
  //   THREE.RepeatWrapping;
  fabricTextureProps.normalMap.wrapS = 
  fabricTextureProps.normalMap.wrapT =
    THREE.RepeatWrapping;
  fabricTextureProps.roughnessMap.wrapS =
    fabricTextureProps.roughnessMap.wrapT =
     THREE.RepeatWrapping;
  fabricTextureProps.aoMap.wrapS = 
  fabricTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Chair.geometry} castShadow>
          {/* 
          1. Usamos las props del leatherTextureObject para que se añadan al mesh de la silla.
          2. Añadimos el color desde el contextAPI para que cambie dependiendo
            de la seleccion del usuario */}
        <meshStandardMaterial
        {...leatherTextureProps}
         opacity={0.9}
          envMapIntensity={1}
          roughness={0.98}
          // color="green"
          {...(material === "leather"
            ? leatherTextureProps
            : fabricTextureProps)}
          color={chairColor.color}
          
        />
      </mesh>
      <mesh
        geometry={nodes.Cushion.geometry}
        position={[0, 0.06, 0.04]}
        // castShadow
      >
        {/* Añadimos el color desde el contextAPI para que cambie dependiendo
            de la seleccion del usuario */}
        <meshStandardMaterial
          {...fabricTextureProps}
          color={cushionColor.color}
          // color='white'
        />
      </mesh>
      <mesh
        geometry={nodes.Legs1.geometry}
        material={materials.Legs}
        visible={legs === 1}
        // color='white'
        castShadow
      />
      <mesh
        geometry={nodes.Legs2.geometry}
        material={materials.Legs}
        visible={legs === 2}
      />
    </group>
  );
}

export default Chair;

useGLTF.preload("./chair.gltf");