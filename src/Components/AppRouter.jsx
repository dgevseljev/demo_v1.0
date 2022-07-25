import React, {useState} from 'react';
import {Routes, Route, Redirect} from 'react-router-dom'
import Cart from '../Pages/Cart';
import Main from '../Pages/Main';
import Rules from '../Pages/Rules';

const AppRouter = () => {

    const [classScroll, setClassSrcoll] = useState('wrapper-padding');
    const [classFooter, setClassFooter] = useState('footer_content-wrapper');
    const [classContact, setClassContact] = useState('contacts');
    
    function anim() {
        let end = (window.innerHeight + window.pageYOffset) >= (document.body.offsetHeight - 65);
        if (!(end))  {
            setClassSrcoll('wrapper-padding slide-down');
            setClassFooter('footer_content-wrapper');
            setClassContact('contacts')
        } else {
            setClassSrcoll('wrapper-padding slide-up');
            setClassFooter('footer_content-wrapper visible');
            setClassContact('contacts display')
        }
    }
  
  document.addEventListener('scroll', anim);

    return (
        <div className="app">
        <Routes>
            <Route path='/' element={<Main 
                classScroll={classScroll}
                classFooter={classFooter} 
                classContact={classContact}/>} exact/>
            <Route path='/cart' element={<Cart
                classScroll={classScroll}
                classFooter={classFooter} 
                classContact={classContact}/>} exact/> 
            <Route path='/rules' element={<Rules 
                classScroll={classScroll}
                classFooter={classFooter} 
                classContact={classContact}/>} exact/> 
        </Routes>
        </div>
)}

export default AppRouter;