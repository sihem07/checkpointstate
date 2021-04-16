import './App.css';
import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Timer from './Components/Timer/Timer'
import Footer from './Components/Footer/Footer'
class App extends React.Component{
  
    state = {
    
            fullName: "benslimen sarra",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            profession: "ingenieur Informatique: genie logiciel",
            photo:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80",
            isShow: false,
            
    }
          
          

              
              
  render() {

    return (


      <div >
        <NavBar />
        <div className="App">
        <button className="button plus" onClick={
          ()=> (this.setState({isShow :!this.state.isShow}))} >
        
          {this.state.isShow ?<div className="minus"></div> :
            <div>
              <span className="bg" id="plus" />
              <span className="symbol" />
            </div>
          }
        </button>
        
        { this.state.isShow &&
          
          <div>
          {/* counter */}

          <Timer/>

          {/* profile card  */}
            <div className="card mb-3 " style={{ margin: "150px 250px 200px 250px" }}>
                  

            <div className="row no-gutters">
            <div className="col-md-4">
            <img alt="" src={this.state.photo} style={{width:"300px",height:"313px"}}/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                  <h5 className="card-title">{this.state.fullName}</h5>
                  <p className="card-text">
                  {this.state.bio}
                  </p>
                  <p className="card-text">
                  <small className="text-muted">{this.state.profession}</small>
                  </p>
            </div>
            </div>
            </div>

            </div>
            </div>
          }
        </div>
        <Footer/>
    </div>
  );
  }
  }
export default App;
