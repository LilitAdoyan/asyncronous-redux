import React, { useEffect } from 'react';
import logo from './logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { editName,  loadUser,  selectName } from './features/currentUser/currenUserSlice';

function App() {
  
  const name=useSelector(selectName)
    
    const dispatch=useDispatch<any>()

    useEffect(()=>{
      dispatch(loadUser())
    },[])
  return (
    <div className="App">
     <h1>{name}</h1>
     <input type='text'  value={name} 
     onChange={(e)=>{dispatch(editName(e.target.value))}}
  />
    </div>
  );
}

export default App;
