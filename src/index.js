import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import FormPage from './FormPage';
import TopNav from './TopNav';
import About from './About';

const App=()=>{
return(
    <div>
      <TopNav/>
      <FormPage/>
      <About/>
      <Footer/>
     </div>
);
};

ReactDOM.render( <App/>,document.querySelector('#root'));
   


