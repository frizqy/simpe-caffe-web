import './App.css'

function App() {
  return (
    <>
      <div className='w-full h-screen flex flex-col justify-center items-center'>
        <div className=' overflow-hidden w-full h-1/2 justify-center items-center text-right'>
          <p className='animate-(--animate-fade-in-2) font-[--Lora] text-9xl font-extralight'>Simpe Caffe</p>
          <p className='animate-(--animate-fade-in-3) font-[--Lora] text-8xl font-extralight'>Warung Kopi</p>
        </div>
        <div className='animate-(--animate-fade-out-up-2) w-full h-1/3 bg-[url(./assets/a.jpg)] bg-center bg-cover bg-no-repeat justify-center text-center'>

        </div>
      </div>
    </>
  )
}

export default App
