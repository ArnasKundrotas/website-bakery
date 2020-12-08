import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    users: [],
    loading: false
  }

  async componentDidMount () {
    const res = await axios.get('https://api.github.com/users');
    console.log(res.data);
  }
  
  
  render(){
    
    const name = 'John Dow';
    const foo = () => 'Bar';
    
    return (
    
    <div className="App">
      <Navbar />
    </div>

    );
  }
}
export default App;
