import React, { useState } from 'react';
import './style/main.css'
import './style/footer.css'
import './style/products.css'
import './style/rules.css'
import './style/cart.css'


import Main from './Pages/Main';
import Rules from './Pages/Rules';
import Footer from './Components/Footer';
import Cart from './Pages/Cart';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Components/AppRouter';


function App() {

  //   const [classScroll, setClassSrcoll] = useState('wrapper-padding');
  //   const [classFooter, setClassFooter] = useState('footer_content-wrapper');
  //   const [classContact, setClassContact] = useState('contacts');
    
  //   function anim() {
  //       let end = (window.innerHeight + window.pageYOffset) >= (document.body.offsetHeight - 65);
  //       if (!(end))  {
  //           setClassSrcoll('wrapper-padding slide-down');
  //           setClassFooter('footer_content-wrapper');
  //           setClassContact('contacts')
  //       } else {
  //           setClassSrcoll('wrapper-padding slide-up');
  //           setClassFooter('footer_content-wrapper visible');
  //           setClassContact('contacts display')
  //       }
  //   }
  
  // document.addEventListener('scroll', anim);
  
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
    // <div className="App">
    //   <Cart classScroll={classScroll}/>
    //   {/* <Rules classScroll={classScroll}/> */}
    //   {/* <Main classScroll={classScroll}/> */}
    //   <Footer classFooter={classFooter} classContact={classContact}/>
    // </div>
    
  );
}

export default App;
