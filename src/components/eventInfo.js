import React from 'react'

const EventInfoDisplay = props =>{
    const {eventsInCity} = props
    return eventsInCity.map(element=>{
        const {Weekday,DayOfMonth,MonthName,Year,Time} = element.CalendarViewModel
        return <>
            <div class='row' style={{marginLeft:0}}>
                <div class='col-4 jumbotron' style={{padding:0,marginBottom:0,borderRadius:0}}>
                    <p class="lead">{`${Weekday} ${DayOfMonth} ${MonthName} ${Year}`}</p>
                    <p>{Time}</p>
                </div>
                <div class='col-8'>
                    <p style={{fontWeight:500}}>Elton John</p>
                </div>
            </div>
        </>
    }) 
}

export default EventInfoDisplay;

