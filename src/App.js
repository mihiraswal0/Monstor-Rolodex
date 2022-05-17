import logo from './logo.svg';
import './App.css';
import {Component} from 'react'

class App extends Component {
  constructor(){
    super();
    this.state={
      monsters:[

        {
          name:'Linda',
          id:'12erwrd1'
        },
        {
          name:'Frank',
          id:'12323fs'
        },
        {
          name:'Jacky',
          id:'123sdsd'
        },

      ]
    
    }
  
  }
  render(){
    return (
      <div className="App">
        {this.state.monsters.map((monster)=>{
          // return <h1 key={monster.id}>{monster.name}</h1>;
          return <div key={monster.id}>
            <h1>{monster.name}</h1>
             </div>
        })}
      </div>
    );
  }
  
}

export default App;
