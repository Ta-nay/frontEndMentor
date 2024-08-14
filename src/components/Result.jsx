/* eslint-disable no-unused-vars */
import React from 'react'

const Result = () => {
    const myStyle= {
        background: 'linear-gradient(hsl(252, 100%, 67%), hsl(241, 81%, 54%))',
        width:'250px',
        height:'350px',
        borderRadius:'20px'
    }
  return (
    <div style={myStyle}>
        <p style={{color:'#D2CAFF',textAlign:'center',fontSize:'18px',fontWeight:'800'}}>Your Result</p>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap',flexDirection:'column',height:'125px',width:'125px',borderRadius:'50%',background: 'linear-gradient(hsla(256, 72%, 46%, 1),hsla(241, 72%, 46%, 0))',margin:'auto'}}>
        <h1 style={{color: 'white', fontSize: '50px', margin: '0'}}>76</h1>
        <p style={{color: '#8F82FF', margin: '0'}}>of 100</p>
        </div>
        <div style={{color:'white',textAlign:'center',textwidth:'100'}}>
        <p style={{color:'white',textAlign:'center',fontSize:'20px',fontWeight:'800'}}>Great</p>
        <p style={{textAlign:'center',width:'75%', margin:'auto',fontSize:'14px',fontWeight:'300'}}>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
    </div>
  )
}

export default Result