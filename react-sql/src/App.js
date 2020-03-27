import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const moment = require('moment');

class App extends Component {
  state = {
    events: [],
    event: {
      event_name: 'event name',
      event_id: 'event id',
      event_date: 'event date',
      event_detail: 'event detail'
    },
    rgsEvent: {
      id: 1,
      event_id: 101,
      name: 'your name'
    },
    rgsNames: {
      event_id: 101,
      respNames: []
    }
  }

componentDidMount(){
  this.getEvents();
  this.fetchRGS();
}
  
getEvents = _ => {
  fetch('https://event-sourabhsrk.herokuapp.com/events')
   .then(response => response.json())
   .then(response => this.setState({ events: response.data}))
   .catch(err => console.error(err))
  }

addEvent = _ => {
  const { event } = this.state;
  fetch(`https://event-sourabhsrk.herokuapp.com/events/add?id=${event.event_id}&name=${event.event_name}&date=${event.event_date}&detail=${event.event_detail}`)
    .then(this.getEvents)
    .catch(err => console.error(err))
}

regEvent = _ => {
  const { rgsEvent } = this.state;
  fetch(`https://event-sourabhsrk.herokuapp.com/events/rgs?id=${rgsEvent.id}&event_id=${rgsEvent.event_id}&name=${rgsEvent.name}`)
    .then(response => {
      if(response.ok){
        alert('successfully registered');
        console.log("successfully registered");
      }
    })
    .catch(err => console.error(err))
}

fetchRGS = _ => {
  const { rgsNames } = this.state;
  fetch(`https://event-sourabhsrk.herokuapp.com/events/event-rgs?event_id=${rgsNames.event_id}`)
    .then(response => response.json())
    .then(response => this.setState({ rgsNames: { respNames: response.data } }))
    .catch(err => console.error(err))
}

renderEvents = ({event_id,event_name,event_detail,event_date}) => <div key={event_id}>{event_name} {event_detail}  {moment(event_date).format("DD-MM-YYYY")} </div>

fetchNames = ({rgs_name}) => <div key={rgs_name}> {rgs_name} </div>


render(){
 const {events,event,rgsEvent,rgsNames} = this.state;
  return (
    <div className="App">
      <header className="App-header">
        <img src ={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">welcome to Sourabhsrk project</h1>
      </header>
      { events.map(this.renderEvents)}
      <div>
        <input 
          value={event.event_id} 
          onChange={e => this.setState({ event: { ...event, event_id: e.target.value }})} />
        <input 
          value={event.event_name}
          onChange={e => this.setState({ event: { ...event, event_name: e.target.value }})} /> 
        <input 
          value={event.event_date}
          onChange={e => this.setState({ event: { ...event, event_date: e.target.value }})} /> 
        <input 
          value={event.event_detail}
          onChange={e => this.setState({ event: { ...event, event_detail: e.target.value }})} />
        <button onClick={this.addEvent}>Add Event </button>
      </div>
      <div>
        <input 
          value={rgsEvent.id}
          onChange={e => this.setState({ rgsEvent: { ...rgsEvent, id: e.target.value }})} />
        <input 
          value={rgsEvent.event_id}
          onChange={e => this.setState({ rgsEvent: { ...rgsEvent, event_id: e.target.value }})} />
        <input 
          value={rgsEvent.name}
          onChange={e => this.setState({ rgsEvent: { ...rgsEvent, name: e.target.value }})} />
        <button onClick={this.regEvent}>OK </button>
      </div>
      <div>
        <input 
          value={rgsNames.event_id}
          onChange={e => this.setState({ rgsNames: { ...rgsNames, event_id: e.target.value }})} />
        <button 
          onClick={()=>this.fetchRGS}> OK </button>
        {rgsNames.respNames.map(this.fetchNames)} 
      </div>
    </div>
            
  );
 }
}

export default App;
