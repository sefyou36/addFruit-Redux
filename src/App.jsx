
import { legacy_createStore as createStore } from 'redux'
import { fruitReducer } from './redux/reducer'
import Cart from './component/Cart'
import { Provider } from 'react-redux'
import './App.css'
import AddFruit from './component/AddFruit'


const store = createStore(fruitReducer);

// store.dispatch({type:ADD_FRUIT,payload:{id:1,fruit:'🍒',quantity:2}})

// store.dispatch(addFruit(1,'🍒',2))

// const unsubscribe = store.subscribe(()=>console.log(store.getState()))
// store.dispatch(addFruit(1,'🍐',3))
// store.dispatch(addFruit(2,'🍑',6))
// store.dispatch(addFruit(3,'🍒',7))
// store.dispatch(deleteFruit(3))
// store.dispatch(incrementFruit(1))
// store.dispatch(decrementFruit(2))
// store.dispatch(clearFruit(2))
// store.dispatch(updateFruit(1,100))


function App() {
 

  return (
    <Provider store={store}>
    <h1>Hello from Redux !</h1>
    <Cart/>
    <AddFruit/>
    
      
    </Provider>
  )
}

export default App
