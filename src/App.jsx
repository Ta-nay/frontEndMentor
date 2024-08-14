/* eslint-disable no-unused-vars */
import React from 'react'
import Result from './components/Result'
import Summary from './components/Summary'

const App = () => {
  const appStyles ={
    display:'flex',
    justifyContent:'center',
    alignItems: 'center ',
    height: '100vh',
    width:'1440px'

  }
  return (
    <div style={appStyles}>
      <Result></Result>
      <Summary></Summary>
    </div>
  )
}

export default App