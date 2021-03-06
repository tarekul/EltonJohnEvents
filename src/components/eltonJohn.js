import React from 'react'
import './eltonJohn.css'

const EltonJohnImg = props =>{
    return (
        <><div class='row' style={{borderBottom:'0.5px solid white'}}>
            <div className='col-1' style={{backgroundColor:'#2B2A30'}}></div>
            <div className='col-10' style={{backgroundColor:'#2B2A30'}}>
                <h2 style={{color:'white',fontWeight:'700px'}}>Elton John Tickets</h2>
            </div>
            <div class='col-1' style={{backgroundColor:'#2B2A30'}}></div>
        </div>
        <div class='row'>
            <div className='col-1' style={{backgroundColor:'#2B2A30',height:'70vh'}}></div>
            <div className='col-10 eltondiv' style={{display:'flex', flexWrap:'wrap'}}>
                <p class="lead" style={{color:'#efefef',fontSize:'16px',fontFamily:'Helvetica Neue',marginRight:'60vw'}}>We're the world’s largest secondary marketplace for tickets to live events. All tickets are fully protected by our guarantee. Prices are set by sellers and may be below or above face value.</p>
                <div style={{alignSelf:'flex-end'}}>
                    <p class="lead" >Elton John Tickets</p>
                </div>
                
            </div>
            <div className='col-1' style={{backgroundColor:'#2B2A30'}}></div>
        </div></>
    )
}

export default EltonJohnImg