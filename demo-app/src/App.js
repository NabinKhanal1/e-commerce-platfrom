
import './App.css';
import MyRoute from './MyRoute';
import cartReducer from './redux/reducers/cartReducer';
import { legacy_createStore } from 'redux'; //to help to know compiler that any reducer is a store
import { Provider } from 'react-redux';  //to provide data from  reducer to components
import store from './store';

function App() {
  // const store=legacy_createStore(cartReducer)
   return (
    <Provider store={store}>
      <MyRoute />
    </Provider>
  );
}

export default App;
//component name should  start from capital letter