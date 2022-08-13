import React, { useState} from 'react'
import axios from 'axios'

export default function AppFunctional(props) {
  const [state, setState] = useState({
    initialMessage: '',
    initialEmail: '',
    initialSteps: 0,
    initialIndex: 4,
    xValue: 2,
    yValue: 2
    })
  
    const getX = (x) => {
      // It it not necessary to have a state to track the coordinates.
      // It's enough to know what index the "B" is at, to be able to calculate them.
      //gett coordinates based on index and set them to state in getNextIndex
      if(x === 0 || x === 1 || x === 2) return x + 1
      if(x === 3 || x === 4 || x === 5) return x - 2
      if(x === 6 || x === 7 || x === 8) return x - 5
    } 
  
    const getY = (y) => {
      if(y === 0 ) return y + 1
      if(y === 1 ) return y 
      if(y === 2 || y === 3 ) return y - 1
      if(y === 4 ) return y -2
      if(y === 5 ) return y - 3
      if(y === 6 ) return y - 3
      if(y === 7 ) return y - 4
      if(y === 8 ) return y - 5
    }
  
    const reset = () => {
      setState({
          initialMessage: '',
          initialEmail: '',
          initialSteps: 0,
          initialIndex: 4,
          xValue: 2,
          yValue: 2,
      })
    }
  
    const getNextIndex = (direction) => {
      //  helper takes a direction ("left", "up", etc) and calculates what the next index
      // of the "B" would be. If the move is impossible because we are at the edge of the grid,
      //  helper should return the current index unchanged.
      if(direction === 'left' && state.initialIndex === 0) return state.initialIndex
      if(direction === 'left' && state.initialIndex === 3) return state.initialIndex
      if(direction === 'left' && state.initialIndex === 6) return state.initialIndex
  
      if(direction === 'right' && state.initialIndex === 2) return state.initialIndex
      if(direction === 'right' && state.initialIndex === 5) return state.initialIndex
      if(direction === 'right' && state.initialIndex === 8) return state.initialIndex
  
      if(direction === 'up' && state.initialIndex === 0) return state.initialIndex
      if(direction === 'up' && state.initialIndex === 1) return state.initialIndex
      if(direction === 'up' && state.initialIndex === 2) return state.initialIndex
  
      if(direction === 'down' && state.initialIndex === 6) return state.initialIndex
      if(direction === 'down' && state.initialIndex === 7) return state.initialIndex
      if(direction === 'down' && state.initialIndex === 8) return state.initialIndex
  
      if(direction === 'left') return state.initialIndex -1
      if(direction === 'right')return  state.initialIndex +1
      if(direction === 'up')return  state.initialIndex -3
      if(direction === 'down')return  state.initialIndex +3
  
      }
  
       
        const helperSteps = (direction) => { 
          if(direction === 'left' && state.initialIndex === 1) return state.initialSteps + 1
          if(direction === 'left' && state.initialIndex === 4) return state.initialSteps + 1
          if(direction === 'left' && state.initialIndex === 7) return state.initialSteps + 1
          if(direction === 'left' && state.initialIndex === 2) return state.initialSteps + 1
          if(direction === 'left' && state.initialIndex === 5) return state.initialSteps + 1
          if(direction === 'left' && state.initialIndex === 8) return state.initialSteps + 1
  
  
  
          if(direction === 'right' && state.initialIndex === 0) return state.initialSteps + 1
          if(direction === 'right' && state.initialIndex === 3) return state.initialSteps + 1
          if(direction === 'right' && state.initialIndex === 6) return state.initialSteps + 1
          if(direction === 'right' && state.initialIndex === 1) return state.initialSteps + 1
          if(direction === 'right' && state.initialIndex === 4) return state.initialSteps + 1
          if(direction === 'right' && state.initialIndex === 7) return state.initialSteps + 1
  
          if(direction === 'up' && state.initialIndex === 3) return state.initialSteps + 1
          if(direction === 'up' && state.initialIndex === 4) return state.initialSteps + 1
          if(direction === 'up' && state.initialIndex === 5) return state.initialSteps + 1
          if(direction === 'up' && state.initialIndex === 6) return state.initialSteps + 1
          if(direction === 'up' && state.initialIndex === 7) return state.initialSteps + 1
          if(direction === 'up' && state.initialIndex === 8) return state.initialSteps + 1
        
  
          if(direction === 'down' && state.initialIndex === 0) return state.initialSteps + 1
          if(direction === 'down' && state.initialIndex === 1) return state.initialSteps + 1
          if(direction === 'down' && state.initialIndex === 2) return state.initialSteps + 1
          if(direction === 'down' && state.initialIndex === 3) return state.initialSteps + 1
          if(direction === 'down' && state.initialIndex === 4) return state.initialSteps + 1
          if(direction === 'down' && state.initialIndex === 5) return state.initialSteps + 1
       
  
          else return state.initialSteps
        }
       
        const errorHelper = (direction) => {
          if(direction === 'left' && state.initialIndex === 0) return "You can't go left"
          if(direction === 'left' && state.initialIndex === 3) return "You can't go left"
          if(direction === 'left' && state.initialIndex === 6) return "You can't go left"
  
          if(direction === 'up' && state.initialIndex === 0) return "You can't go up"
          if(direction === 'up' && state.initialIndex === 1) return "You can't go up"
          if(direction === 'up' && state.initialIndex === 2) return "You can't go up"
  
          if(direction === 'down' && state.initialIndex === 6) return "You can't go down"
          if(direction === 'down' && state.initialIndex === 7) return "You can't go down"
          if(direction === 'down' && state.initialIndex === 8) return "You can't go down"
  
          if(direction === 'right' && state.initialIndex === 2) return "You can't go right"
          if(direction === 'right' && state.initialIndex === 5) return "You can't go right"
          if(direction === 'right' && state.initialIndex === 8) return "You can't go right"
        }
    
  
    const move = (evt) => {
      //  event handler can use the helper above to obtain a new index for the "B",
      // and change any states accordingly.}
        
        setState({...state, 
          initialIndex: getNextIndex(evt.target.id),
          initialSteps: helperSteps(evt.target.id) ,
          xValue: getX(state.initialIndex),
          yValue: getY(state.initialIndex),
          initialMessage: errorHelper(evt.target.id),
    
    })
    }
  
    const onChange = (evt) => {
      setState({...state, initialEmail: evt.target.value })
    }
  
    const onSubmit = (evt) => {
      // Use a POST request to send a payload to the server.
      evt.preventDefault()
  
      const dataToPost = {
        x: getX(state.initialIndex),
        y: getY(state.initialIndex),
        steps: state.initialSteps,
        email: state.initialEmail
      }
  
      axios.post(`http://localhost:9000/api/result`, dataToPost)
      .then(res => setState({...state, initialMessage: [res.data.message], initialEmail: ''}))
      .catch(res => setState({...state, initialMessage: res.response.data.message}))
    }
    
  
 
      const { className } = props
      return (
        <div id="wrapper" className={className}>
          <div className="info">
            <h3 id="coordinates">Coordinates ({getX(state.initialIndex)}, {getY(state.initialIndex)})</h3>
            <h3 id="steps">You moved {state.initialSteps} {state.initialSteps === 1 ? 'time' :'times'}</h3>
          </div>
          <div id="grid">
            {
              [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
                <div key={idx} className={`square${idx === state.initialIndex ? ' active' : ''}`}>
                  {idx === state.initialIndex ? 'B' : null}
                </div>
              ))
            }
          </div>
          <div className="info">
            <h3 id="message">{state.initialMessage}</h3>
          </div>
          <div id="keypad">
            <button onClick={move} id="left">LEFT</button>
            <button onClick={move} id="up">UP</button>
            <button onClick={move}  id="right">RIGHT</button>
            <button onClick={move} id="down">DOWN</button>
            <button onClick={reset} id="reset">reset</button>
          </div>
          <form onSubmit={onSubmit}>
            <input onChange={onChange} value={state.initialEmail}  id="email" type="email" placeholder="type email"></input>
            <input id="submit" type="submit"></input>
          </form>
        </div>
      )
          }