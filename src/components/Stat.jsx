/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const Stat = ({category, score, icon, color,fontcol}) => {
  return (
    <div style={{display: 'flex', width: '80%',height:'40px',justifyContent: 'space-between', alignItems: 'center',backgroundColor:color,margin:'auto',marginBottom:'10px', borderRadius:'8px',fontWeight:'800'}}>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <img src={icon} alt={category} height={12} width={12} style={{marginRight: '10px', marginLeft:'10px'}}/>
        <span style={{fontSize: '12px',color:fontcol}}>{category}</span>
      </div>
      <div style={{fontSize: '12px',marginRight:'10px'}}>
        <span style={{marginRight:'5px'}}>{score}</span>
        <span style={{color:'gray',fontSize:'11px'}}>/ 100</span>
      </div>
    </div>
  )
}

export default Stat
