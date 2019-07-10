import React from 'react'
import eventlist from '../eventlist'
import './showevent.css'
import EventInfoDisplay from './eventInfo'

class ShowEvents extends React.Component {
    state = {
        cities:[],
        search:[],
        eventsInCity:[]
    }

    componentDidMount(){
        const cities = eventlist["Items"].map(e =>{
            const city = e['VenueCity']
            return city
        })
        const uniqueCitiesSet = new Set(cities)
        const uniqueCities = Array.from(uniqueCitiesSet);
        this.setState({cities:uniqueCities})
    }

    onChange = (e)=> {
        const {cities} = this.state
        const input = e.target.value
        if(input !== ""){
            const search  = cities.filter(city=>{
                if(city.toLowerCase().includes(input.toLowerCase())) return city
            })
            this.setState({search:search})
        }
        else this.setState({search:[]})
        
    }

    cityEvents = (e) =>{
        const city = e.target.innerText
        const eventsInCity = eventlist["Items"].filter(element=>{
            if(city === element['VenueCity']) return element
        })
        this.setState({search:[],eventsInCity})
    }

    suggestedCities = ()=>{
        const {search} = this.state
        return <ul class="list-group searchlist" >
            {search.map((city,i)=>{
                return <li class="list-group-item" key={i} onClick={e=>this.cityEvents(e)}>{city}</li>
            })}
        </ul>
    }
    render(){
        const {search, eventsInCity} = this.state
        const showCities = search.length > 0 ? this.suggestedCities() : ''
        return <>
            <div class='container' style={{marginTop:'20px'}}>
                <div className='searchbox'>
                    <label for="exampleInputEmail1" style={{color:'white',fontSize:'25px'}}>Search by location</label>
                    <input type="text" className="form-control"  aria-describedby="inputGroup-sizing-default" onChange={e=>this.onChange(e)} />
                </div>
                {showCities}
                <EventInfoDisplay eventsInCity={eventsInCity}/>
            </div>

                
            </>
    }
}

export default ShowEvents