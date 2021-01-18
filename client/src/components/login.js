import React from 'react';
import './App.css';
     
function App() {
  return (
    <div className='login-register-wrapper'>
      <h1>登録フォーム</h1>
      <div className='name'>
        <input type='text' id="name" placeholder='お名前'></input>
      </div>
      <div className='nav-button'>
        <button id='loginBtn' class='active'>登録</button>
      </div>
    </div>
  );
}git checkout main
 
export default App;