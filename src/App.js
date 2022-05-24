import logo from './logo.svg';
import './App.css';
import {Component} from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';
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
        <h1 className="app-title">Monster Rolodex</h1>
       <SearchBox onChangeHandler={onsearchChange} placeholder={'Search Monster'} className={'search-box'}/>
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
  
}

export default App;
