import React from 'react'
import './Timer.css'

class Timer extends React.Component{

                  state = {
                        timer: 0,
                        intervall:null
      }

                  componentDidMount() {
                  this.setState({
                  intervall: setInterval(
                  () => this.setState({ timer: this.state.timer + 1 }),
                  1000
                  ),
                  });
      }
      

      render() {
            

            

            return(
                  <div className="flex">
                        <div id="counter">
                        <div id="counter-number">{Math.floor((this.state.timer / 3600) )}       
                        </div>
                        <svg>
                        <circle r="18" cx="20" cy="20"></circle>
                        </svg>
                        </div>
                        <div id="counter">
                        <div id="counter-number">{Math.floor((this.state.timer % 3600) / 60)}       
                        </div>
                        <svg>
                        <circle r="18" cx="20" cy="20"></circle>
                        </svg>
                        </div>
                        

                        <div id="counter">
                        <div id="counter-number">{Math.floor((this.state.timer % 3600) % 60)}       
                        </div>
                        <svg>
                        <circle r="18" cx="20" cy="20"></circle>
                              </svg>
                              
                              </div>
                  </div>
            )
      
      }


}

export default Timer