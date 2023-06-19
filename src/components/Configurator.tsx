import React from 'react'
import { useCustomization } from '../contexts/Customization'

const Configurator = () => {
    const {material, setMaterial} = useCustomization();
    console.log(material)
    const handleMaterialClick = (selectedMaterial: string) => {
    setMaterial(selectedMaterial);
  };
  return (
    <div className='flex w-full  flex-col flex-end left-24 text-slate-200 border-2 border-black h-full '>
        <h1>Chair Materials</h1>

        <h2
        onClick={() => handleMaterialClick('leather')}
        style={{ color: material === 'leather' ? 'red' : 'inherit' }}
      >
        Leather
      </h2>
      <h2
        onClick={() => handleMaterialClick('fabric')}
        style={{ color: material === 'fabric' ? 'red' : 'inherit' }}
      >
        Fabric
      </h2>
        </div>
  )
}

export default Configurator