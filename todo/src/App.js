import React, {useReducer} from 'react';
import Title from './components/Title';
import List from './components/List';
import Form from './components/Form';
import {todoReducer, initialState} from './reducers/todoReducer';
import './App.css';

const App = () => {

  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div className="App">
     <Title />
     <List data={state.todos}/>
     <Form />
    </div>
  );
}

export default App;
