import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [quote, setQuote] = useState({})

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const response = await fetch(`https://dummyjson.com/quotes/random`);
    const result = await response.json();
    console.log(result);
    setQuote(result)
  }

  return (
    <>
     <form onSubmit={handleSubmit}>
      <h1 className='bg-emerald-600 text-2xl rounded-md p-3 shadow-lg mb-4 tracking-tight font-semibold text-gray-800 mt-9'>{quote.quote}
      </h1>
      <div className=' flex justify-end '>

      <h3 className='h-10 w-64 bg-slate-400 p-1 rounded-md shadow-lg mb-5 '>{quote.author}</h3>
      </div>

      
      <button type='submit' className='p-2 m-2 bg-sky-500 rounded-md     active:bg-red-950 duration-700 text-lime-950 '>Quote</button>
     </form>
      
    </>
  )
}

export default App
