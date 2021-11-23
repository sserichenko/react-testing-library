import {useState, useEffect} from 'react'
import List from "../List"
import Search from '../Search/Search';
import './App.css';

const data = [
  "HTML", "CSS", "JavaScript", "REACT", "ANGULAR", "Vue", "NODEJS"
]

function App() {

  const [search, setSearch] = useState('');
  const [items, setItems] = useState(data);

  useEffect(() => {
    setItems(data.filter(item => item.toLowerCase().includes(search.toLowerCase())))
  },[search])


  return (
    <div className="App">
      <div className="App-header">
        <Search value={search} onChange={(e) => setSearch(e.target.value)}>
          Find course: 
        </Search>
        <List items={items}/>
      </div>
    </div>
  );
}

export default App;
