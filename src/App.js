import logo from './logo.svg';
import './App.css';
import {Component} from 'react'

class App extends Component {
  constructor(){
    super();
    this.state={
      monsters:[],
      search:''
     
    };
  
  }
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>this.setState(()=>{
      return {monsters:users}
    },
    ()=>{console.log(this.state)}
    ))
    // .then((users)=>console.log(users));
  }
  onsearchChange=(event)=>{ 
    const searchString =event.target.value.toLowerCase();//it will contain the string we type in box

      this.setState(()=>{
       return {search:searchString}; //to set the state of new find elmnts
     }
     );
    }
  render(){
    const{monsters,search}=this.state;
    const{onsearchChange}=this;
    
    const filteredMonster=monsters.filter((monster)=>{    //this.state.monsters.filter tha replace krdiya
      return monster.name.toLowerCase().includes(search);   //this.state.search        //an array of filter monster based on the search
      });
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='Search Monsters' onChange={onsearchChange //this.onsearchange

        }
         />

        {
        filteredMonster.map((monster)=>{
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
