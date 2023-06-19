import { chairColors, cushionColors, useCustomization } from '../contexts/Customization';

const Configurator = () => {
    const {material, setMaterial, legs, setLegs, chairColor, setChairColor, cushionColor, setCushionColor} = useCustomization();

    console.log(chairColor)
    console.log(cushionColor)
    const handleMaterialClick = (selectedMaterial: string) => {
    setMaterial(selectedMaterial);
  };
    const handleLegClick = (selectedLeg: number) => {
    setLegs(selectedLeg);
  };
  return (
    <div className='py-2 flex w-full overflow-y-auto space-y-2 flex-col flex-end left-24 text-slate-200 border- border-black h-full '>
       <>
       <div className='flex flex-col'>

        <h2>Chair Materials</h2>
        <div className='ml-2 flex flex-wrap'>

        <h3
        onClick={() => handleMaterialClick('leather')}
        style={{ color: material === 'leather' ? 'red' : 'inherit' }}
        >
        Leather
      </h3>
      <h3
        onClick={() => handleMaterialClick('fabric')}
        style={{ color: material === 'fabric' ? 'red' : 'inherit' }}
        >
        Fabric
      </h3>
          </div>
          </div>
        </>
  <h2>Chair Color</h2>
<div className='flex flex-wrap'>
{chairColors.map((color, index) => (
  <div key={index} className={`flex flex-col  w-20  border- border-red-500 space-x-2 md:w-[33.33% xl:w-[25%] p-3 `}>
    <div
      className={`${color.color} === ${chairColors} ${
        chairColor === color ? 'border-2 border-slate-200' : ''
      } rounded-full mx-auto items-center flex` }
      onClick={() => setChairColor(color)}
      style={{ backgroundColor: color.color, height: '35px', width: '35px' }}
    ></div>
    <h3 onClick={() => setChairColor(color)} className='mx-auto text-center'>{color.name}</h3>
  </div>
))}
</div>

  <h2>Cushion</h2>
<div className='flex flex-wrap'>
{cushionColors.map((color, index) => (
  <div key={index} className='flex flex-col  w-20  border- border-red-500 space-x-2 md:w-[33.33% xl:w-[25%] p-3 '>
    <div
      className={`${color.color} === ${chairColors} flex flex-col rounded-full ${
        cushionColor === color ? 'border-2 border-slate-200' : ''
      } rounded-full mx-auto flex` }
      onClick={()=>setCushionColor(color)}
      style={{ backgroundColor: color.color, height: '35px', width: '35px' }}
    ></div>
    <h3 className='text-center'>{color.name}</h3>
  </div>
))}
        </div>
        <>
        <div className='flex flex-col'>
          <h2>Legs</h2>
          <div className= 'ml-4 flex space-x-4'>

          <h3 className={legs === 1 ? 'text-red-500': ''} onClick={()=> handleLegClick(1)}>Medium</h3>
          <h3 className={legs === 2 ? 'text-red-500' : ''} onClick={()=> handleLegClick(2)}>Classic</h3>
          </div>
        </div>
        </>
        </div>
  )
}

export default Configurator