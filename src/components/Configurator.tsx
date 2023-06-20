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
    <div className='py-2 flex w-full overflow-y-auto px-8 space-y-4 flex-col flex-end left-24 text-slate-200 border- border-black h-full '>
       <>
       <div className='flex flex-col '>

        <h2 className='font-bold text-2xl mb-4'>Chair Materials</h2>
        <div className='ml-2 mb-5 flex flex-wrap space-x-4 '>

        <h3
        className={`border-2 rounded font-bold px-2 py-2 to-slate-900 ${material === 'leather' ? 'bg-gradient-to-b text-xl  from-slate-200' : 'border-2 border-slate-200'}`}
        onClick={() => handleMaterialClick('leather')}
       
        >
        Leather
      </h3>
      <h3
        className={`border-2 rounded text-xl font-bold px-2 py-2 to-slate-900 ${material === 'fabric' ? 'bg-gradient-to-b   from-slate-200' : 'border-2 border-slate-200'}`}
        onClick={() => handleMaterialClick('fabric')}

        >
        Fabric
      </h3>
          </div>
          </div>
        </>
  <h2 className='font-bold text-2xl text-slate-300'>Chair Color</h2>
<div className='flex flex-wrap'>
{chairColors.map((color, index) => (
  <div key={index} className={`flex flex-col  w-20  border- border-red-500 space-x-2 md:w-[33.33% xl:w-[25%] p-3 `}>
    <div
      className={`cursor-pointer ${
        chairColor === color ? 'border-4 border-slate-200' : ''
      } rounded-full mx-auto items-center justify-center flex` }
      onClick={() => setChairColor(color)}
      style={{ backgroundColor: color.color, height: '35px', width: '35px' }}
    ></div>
    <h3 onClick={() => setChairColor(color)} className='mx-auto text-slate-300 font-bold text-xl text-center'>{color.name}</h3>
  </div>
))}
</div>

  <h2 className=" text-slate-300 font-bold text-2xl">Cushion</h2>
<div className='flex flex-wrap'>
{cushionColors.map((color, index) => (
  <div key={index} className='flex flex-col  w-20  border- border-red-500 space-x-2 md:w-[33.33% xl:w-[25%] px-3 py-3 '>
    <div
      className={`${color.color} === ${chairColors} flex cursor-pointer flex-col rounded-full ${
        cushionColor === color ? 'border-4 border-slate-200' : ''
      } rounded-full mx-auto flex` }
      onClick={()=>setCushionColor(color)}
      style={{ backgroundColor: color.color, height: '35px', width: '35px' }}
    ></div>
    <h3 className='text-center text-slate-300 font-bold text-xl'>{color.name}</h3>
  </div>
))}
        </div>
        <>
        <div className='flex flex-col'>
          <h2 className= 'font-bold text-2xl text-slate-300 mb-4'>Legs</h2>
          <div className= 'ml-4 flex space-x-4'>

          <h3 className={`border-2 cursor-pointer rounded font-bold text-slate-300 px-2 py-2 to-slate-900 ${legs === 1 ? 'bg-gradient-to-b text-xl  from-slate-200' : 'border-2 border-slate-200'}`} onClick={()=> handleLegClick(1)}>Medium</h3>
          <h3 className={`border-2 cursor-pointer rounded font-bold text-slate-300 px-2 py-2 to-slate-900 ${legs === 2 ? 'bg-gradient-to-b text-xl  from-slate-200' : 'border-2 border-slate-200'}`} onClick={()=> handleLegClick(2)}>Classic</h3>
          </div>
        </div>
        </>
        </div>
  )
}

export default Configurator