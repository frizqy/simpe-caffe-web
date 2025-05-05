import './App.css'

function Navbar() {
  return (
    <div className='w-full p-[20px] fixed font-(family-name:--Lora)'>
        <header className='flex items-center justify-between'>
            <div className='animate-(--animate-fade-out-1) w-[100px] flex text-center justify-center'>
                <p className='font-black'>Simpe Caffe</p>
            </div>
            <nav className='animate-(--animate-fade-out-2) flex items-center justify-center'>
                <ul className='flex justify-center items-center gap-3'>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Service</a></li>
                    <div className='animate-(--animate-fade-out-3) w-[100px] bg-black flex text-center justify-center rounded-2xl'>
                    <button className='text-white'>ContactUs</button>
                    </div>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Navbar