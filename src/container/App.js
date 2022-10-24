import React, {Component} from "react";
import Cardlist from "../components/Cardlist";
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from "../components/ErrorBoundry";


  
class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }


    componentDidMount() {
        fetch('https://my-json-server.typicode.com/vanha777/RoboFriendsProject/robots')
          .then(response => response.json())
          .then(robots => this.setState({robots : robots}));
    }



    OnSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
       
    
    } 

    render(){
        const filteredRobots = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else{
            return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange ={this.OnSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                    <Cardlist robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
             </div>
             );
             }
    }
}

  export default App;
  