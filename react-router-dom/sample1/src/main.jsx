import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route , RouterProvider, createBrowserRouter , createRoutesFromElements} from 'react-router-dom'
import './index.css'
import Home  from './components/Home.jsx'
import  About from './components/About.jsx'
import  Contact  from './components/Contact.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
  
    <Route path = '' element = {<Home/>} />
   <Route path = '/about' element = {<About/>} />
   <Route path = '/contact' element = {<Contact/>} />

 
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
