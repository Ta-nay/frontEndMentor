/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import Stat from './Stat'
const Summary = () => {
    const data = [
        {
          "category": "Reaction",
          "score": 80,
          "icon": "./assets/images/icon-reaction.svg",
          "color":"#FFF6F5",
          "fontcol":'#FF5555'
        },
        {
          "category": "Memory",
          "score": 92,
          "icon": "./assets/images/icon-memory.svg",
          "color":"#FFFBF2",
          "fontcol":'#FFB21E'
        },
        {
          "category": "Verbal",
          "score": 61,
          "icon": "./assets/images/icon-verbal.svg",
          "color":"#F2FAFA",
          "fontcol":'#00BB8F'
        },
        {
          "category": "Visual",
          "score": 72,
          "icon": "./assets/images/icon-visual.svg",
          "color":"#F3F3FD",
          "fontcol":'#1125D6'
        }
      ]
      
    const myStyle= {
        backgroundColor:'white',
        width:'250px',
        height:'350px',
        borderRadius:'20px',
         boxShadow:'5px 5px 10px rgba(0, 0, 0, 0.2)'
    }

    const buttonContainerStyle = {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
  }

  const buttonStyle = {
      backgroundColor: 'hsl(224, 30%, 27%)',
      width: '80%',
      height: '40px',
      borderRadius: '20px',
      color:'white'
  }

  return (
    <div style={myStyle}>
        <h2 style={{textAlign:'left',textwidth:'100',fontSize:'18px',marginLeft:'30px',marginBottom:'20px'}}>Summary</h2>
        <div style={{display:'flex',justifyContent:'space-evenly',flexDirection:'column'}}>
        {
          data.map((stat)=>(
            <div>
            <Stat 
            key={stat.category}
            category={stat.category}
            score={stat.score}
            icon={stat.icon}
            color={stat.color}
            fontcol={stat.fontcol}
            ></Stat>
            </div>
          ))
        }
        </div>
        <div style={buttonContainerStyle}>
                <button style={buttonStyle}>Continue</button>
            </div>
        </div>
  )
}

export default Summary