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
        console.log(eventsInCity)
        this.setState({search:[],eventsInCity})
    }

    suggestedCities = ()=>{
        const {search} = this.state
        return <ul class="list-group searchlist rounded" style={{position:'absolute',zIndex:10}} >
            {search.map((city,i)=>{
                return <li class="list-group-item rounded" key={i} onClick={e=>this.cityEvents(e)}>{city}</li>
            })}
        </ul>
    }
    render(){
        const {search, eventsInCity} = this.state
        const showCities = search.length > 0 ? this.suggestedCities() : ''
        return <>
            <div class='container' style={{marginTop:'20px',position:'relative'}} onKeyDown={e=>{if(e.keyCode=== 27) this.setState({search:[]})}}>
                <div class='row'>
                    <div class='col'>
                        <div className='searchbox rounded'>
                            <label for="exampleInputEmail1" style={{color:'white',fontSize:'25px'}}>Search by location</label>
                            <input type="text" className="form-control"  aria-describedby="inputGroup-sizing-default" onChange={e=>this.onChange(e)} />
                        </div>
                    </div>
                    <div class='col'>
                        <div className='advanced rounded' style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                            <h3 style={{color:'white',fontSize:'30px'}}><i className="fa fa-bars"></i> &nbsp;Advanced Search</h3>
                            <button type="button" className="btn btn-light" id='adv-srch-btn' style={{fontSize:'18px'}}>Click Here</button>
                            
                        </div>
                    </div>
                </div>
                {showCities}
                <EventInfoDisplay eventsInCity={eventsInCity}/>
            </div>

                
            </>
    }
}

export default ShowEvents