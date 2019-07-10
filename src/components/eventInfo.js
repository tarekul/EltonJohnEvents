import React from 'react'

const EventInfoDisplay = props =>{
    const {eventsInCity} = props
    return eventsInCity.map(element=>{
        const {Weekday,DayOfMonth,MonthName,Year,Time} = element.CalendarViewModel
        const {VenueName, VenueCountry,VenueCity,IsCheapestCityContent} = element
        return <>
            <div class='row' style={{marginLeft:0,border:'1px solid #d3d3d3', marginTop: '13px'}}>
                <div class='col-4 jumbotron' style={{padding:'20px',marginBottom:0,borderRadius:0}}>
                    <p class="lead" style={{fontWeight:600,color:'#37383A'}}>{`${Weekday} ${DayOfMonth} ${MonthName} ${Year}`}</p>
                    <p style={{fontSize:'14px'}}>{Time}</p>
                </div>
                <div class='col-8' style={{position:'relative'}}>
                    <p style={{fontWeight:500}}>Elton John</p>
                    <p>{`${VenueName},`} <b>{`${VenueCity},`}</b> <b>{`${VenueCountry} `}</b></p>
                    {IsCheapestCityContent ? <p style={{color:'green',fontSize:'13px'}}>{IsCheapestCityContent}</p> : ''}
                    <button type="button" class="btn btn-success float-right">View Tickets</button>
                </div>
            </div>
        </>
    }) 
}

export default EventInfoDisplay;

