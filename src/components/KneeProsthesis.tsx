// import React, { useRef } from 'react';
// import { Canvas, useLoader } from 'react-three-fiber';
// import { OrbitControls } from '@react-three/drei';
// import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
// import { Mesh } from 'three';

// interface IndividualPieceProps {
//   stlPath: string;
// }

// const useEffect = (()=>{

// })
// const IndividualPiece: React.FC<IndividualPieceProps> = ({ stlPath }) => {
  // const geometry = useLoader(STLLoader, stlPath) as Mesh['geometry'];
//   return <mesh geometry={geometry} />;
// };

// const KneeProsthesis: React.FC = () => {
//   const stlPaths = [
//     '/path/to/individual_piece_1.stl',
//     '/path/to/individual_piece_2.stl',
//     '/path/to/individual_piece_3.stl',
//     '/path/to/individual_piece_4.stl',
//     '/path/to/individual_piece_5.stl',
//     '/path/to/individual_piece_6.stl',
//   ];

//   return (
//     <>
//       {/* {stlPaths.map((path, index) => (
//         // <IndividualPiece key={index} stlPath={path} />
//       ))} */}
//     </>
//   );
// };

// const Scene: React.FC = () => {
  // const controlsRef = useRef<OrbitControls>();

//   return (
//     <>
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} />
//       <KneeProsthesis />
//       {/* <OrbitControls ref={controlsRef} /> */}
//     </>
//   );
// };
