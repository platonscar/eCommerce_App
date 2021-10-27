import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer.js/ItemListContainer';
// import data from '../data';

function App() {
  
  // fetch(data)
  // .then( response =>{
  //     return response.json();
  // })
  // .then(response => {
  //     console.log(response)
  // })
  return (

    <main>
        <Header/>
        <ItemListContainer/>
    </main>
        
  );
}

export default App;
