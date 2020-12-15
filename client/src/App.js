import React, {createRef} from 'react'
import './App.css';
import {useMutation} from '@apollo/client'
import {createMessageMutation} from './Schema/index'
 
function App() {
  const messageValue = createRef();
  const [addMessage] = useMutation(createMessageMutation);

  const submit = () => {
    let message = messageValue.current.value;
    addMessage({variables:{data:{message}}})
    .then(data => {
      console.log('response', data)
    }).catch(err => console.log(err))
  }
 
  return (
    <div>
     <h1>ADD A MESSAGE</h1>
     <input type="text" ref={messageValue} placeholder="Add A Message" />
     <button onClick={submit} >Add</button>
    </div>
  );
}

export default App;
