import './App.css';
import * as React from 'react'
import Login from './Pages/Login';


import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <ChakraProvider>
     <Login />
    </ChakraProvider>
  )
}

export default App;
