

const SelectCard = ({bg, text}) => {
  return (
     <div className='relative'>
              <img src={bg} alt='Borabora' className="w-full h-full object-cover"/>
              <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
              <p className='right-10 bottom-4 absolute text-white font-bold text-2xl'>{ text.toUpperCase()}</p>
              </div>
          </div>
  )
}

export default SelectCard