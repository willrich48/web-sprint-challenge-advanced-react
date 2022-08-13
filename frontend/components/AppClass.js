import React from 'react'
import axios from 'axios'

export default class AppClass extends React.Component {
  // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
  // You can delete them and build your own logic from scratch.
  state = {
  initialMessage: '',
  initialEmail: '',
  initialSteps: 0,
  initialIndex: 4,
  xValue: 2,
  yValue: 2
  }

  getX = (x) => {
    // It it not necessary to have a state to track the coordinates.
    // It's enough to know what index the "B" is at, to be able to calculate them.
    //gett coordinates based on index and set them to state in getNextIndex
    if(x === 0 || x === 1 || x === 2) return x + 1
    if(x === 3 || x === 4 || x === 5) return x - 2
    if(x === 6 || x === 7 || x === 8) return x - 5
  } 

  getY = (y) => {
    if(y === 0 ) return y + 1
    if(y === 1 ) return y 
    if(y === 2 || y === 3 ) return y - 1
    if(y === 4 ) return y -2
    if(y === 5 ) return y - 3
    if(y === 6 ) return y - 3
    if(y === 7 ) return y - 4
    if(y === 8 ) return y - 5
  }

  reset = () => {
    this.setState({
        initialMessage: '',
        initialEmail: '',
        initialSteps: 0,
        initialIndex: 4,
        xValue: 2,
        yValue: 2,
    })
  }

  getNextIndex = (direction) => {
    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.
    if(direction === 'left' && this.state.initialIndex === 0) return this.state.initialIndex
    if(direction === 'left' && this.state.initialIndex === 3) return this.state.initialIndex
    if(direction === 'left' && this.state.initialIndex === 6) return this.state.initialIndex

    if(direction === 'right' && this.state.initialIndex === 2) return this.state.initialIndex
    if(direction === 'right' && this.state.initialIndex === 5) return this.state.initialIndex
    if(direction === 'right' && this.state.initialIndex === 8) return this.state.initialIndex

    if(direction === 'up' && this.state.initialIndex === 0) return this.state.initialIndex
    if(direction === 'up' && this.state.initialIndex === 1) return this.state.initialIndex
    if(direction === 'up' && this.state.initialIndex === 2) return this.state.initialIndex

    if(direction === 'down' && this.state.initialIndex === 6) return this.state.initialIndex
    if(direction === 'down' && this.state.initialIndex === 7) return this.state.initialIndex
    if(direction === 'down' && this.state.initialIndex === 8) return this.state.initialIndex

    if(direction === 'left') return this.state.initialIndex -1
    if(direction === 'right')return  this.state.initialIndex +1
    if(direction === 'up')return  this.state.initialIndex -3
    if(direction === 'down')return  this.state.initialIndex +3

    }

     
      helperSteps = (direction) => { 
        if(direction === 'left' && this.state.initialIndex === 1) return this.state.initialSteps + 1
        if(direction === 'left' && this.state.initialIndex === 4) return this.state.initialSteps + 1
        if(direction === 'left' && this.state.initialIndex === 7) return this.state.initialSteps + 1
        if(direction === 'left' && this.state.initialIndex === 2) return this.state.initialSteps + 1
        if(direction === 'left' && this.state.initialIndex === 5) return this.state.initialSteps + 1
        if(direction === 'left' && this.state.initialIndex === 8) return this.state.initialSteps + 1



        if(direction === 'right' && this.state.initialIndex === 0) return this.state.initialSteps + 1
        if(direction === 'right' && this.state.initialIndex === 3) return this.state.initialSteps + 1
        if(direction === 'right' && this.state.initialIndex === 6) return this.state.initialSteps + 1
        if(direction === 'right' && this.state.initialIndex === 1) return this.state.initialSteps + 1
        if(direction === 'right' && this.state.initialIndex === 4) return this.state.initialSteps + 1
        if(direction === 'right' && this.state.initialIndex === 7) return this.state.initialSteps + 1

        if(direction === 'up' && this.state.initialIndex === 3) return this.state.initialSteps + 1
        if(direction === 'up' && this.state.initialIndex === 4) return this.state.initialSteps + 1
        if(direction === 'up' && this.state.initialIndex === 5) return this.state.initialSteps + 1
        if(direction === 'up' && this.state.initialIndex === 6) return this.state.initialSteps + 1
        if(direction === 'up' && this.state.initialIndex === 7) return this.state.initialSteps + 1
        if(direction === 'up' && this.state.initialIndex === 8) return this.state.initialSteps + 1
      

        if(direction === 'down' && this.state.initialIndex === 0) return this.state.initialSteps + 1
        if(direction === 'down' && this.state.initialIndex === 1) return this.state.initialSteps + 1
        if(direction === 'down' && this.state.initialIndex === 2) return this.state.initialSteps + 1
        if(direction === 'down' && this.state.initialIndex === 3) return this.state.initialSteps + 1
        if(direction === 'down' && this.state.initialIndex === 4) return this.state.initialSteps + 1
        if(direction === 'down' && this.state.initialIndex === 5) return this.state.initialSteps + 1
     

        else return this.state.initialSteps
      }
     
      errorHelper = (direction) => {
        if(direction === 'left' && this.state.initialIndex === 0) return "You can't go left"
        if(direction === 'left' && this.state.initialIndex === 3) return "You can't go left"
        if(direction === 'left' && this.state.initialIndex === 6) return "You can't go left"

        if(direction === 'up' && this.state.initialIndex === 0) return "You can't go up"
        if(direction === 'up' && this.state.initialIndex === 1) return "You can't go up"
        if(direction === 'up' && this.state.initialIndex === 2) return "You can't go up"

        if(direction === 'down' && this.state.initialIndex === 6) return "You can't go down"
        if(direction === 'down' && this.state.initialIndex === 7) return "You can't go down"
        if(direction === 'down' && this.state.initialIndex === 8) return "You can't go down"

        if(direction === 'right' && this.state.initialIndex === 2) return "You can't go right"
        if(direction === 'right' && this.state.initialIndex === 5) return "You can't go right"
        if(direction === 'right' && this.state.initialIndex === 8) return "You can't go right"
      }
      
      // emailHelper = () => {
      //   if(this.state.initialEmail === '') return 'Ouch: email is required'
      //   if(this.state.initialEmail === 'foo@bar.baz') return 'foo@bar.baz failure #71'
      //   if(this.state.initialEmail === 'bad@email') return 'Ouch: email must be a valid email'
      // }

      reRenderInput = () => {
        this.setState({...this.state, initialEmail: '' })
      }
  

  move = (evt) => {
    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.}
      this.setState({...this.state, 
        initialIndex: this.getNextIndex(evt.target.id),
        initialSteps: this.helperSteps(evt.target.id) ,
        xValue: this.getX(this.state.initialIndex),
        yValue: this.getY(this.state.initialIndex),
        initialMessage: this.errorHelper(evt.target.id),
      })
  }

  onChange = (evt) => {
    const { value } = evt.target
    this.setState({...this.state, initialEmail: value })
  }

  onSubmit = (evt) => {
    // Use a POST request to send a payload to the server.
    evt.preventDefault()

    const dataToPost = {
      x: this.getX(this.state.initialIndex),
      y: this.getY(this.state.initialIndex),
      steps: this.state.initialSteps,
      email: this.state.initialEmail
    }

    axios.post(`http://localhost:9000/api/result`, dataToPost)
    .then(res => this.setState({...this.state, initialMessage: [res.data.message], initialEmail: ''}))
    .catch(res => this.setState({...this.state, initialMessage: res.response.data.message}))

    

  }

  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates ({this.getX(this.state.initialIndex)}, {this.getY(this.state.initialIndex)})</h3>
          <h3 id="steps">You moved {this.state.initialSteps} {this.state.initialSteps === 1 ? 'time' :'times'}</h3>
        </div>
        <div id="grid">
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
              <div key={idx} className={`square${idx === this.state.initialIndex ? ' active' : ''}`}>
                {idx === this.state.initialIndex ? 'B' : null}
              </div>
            ))
          }
        </div>
        <div className="info">
          <h3 id="message">{this.state.initialMessage}</h3>
        </div>
        <div id="keypad">
          <button onClick={this.move} id="left">LEFT</button>
          <button onClick={this.move} id="up">UP</button>
          <button onClick={this.move}  id="right">RIGHT</button>
          <button onClick={this.move} id="down">DOWN</button>
          <button onClick={this.reset} id="reset">reset</button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} data-testid='email' value={this.state.initialEmail} id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}