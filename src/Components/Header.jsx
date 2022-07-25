import React from 'react';
import Logo from './Logo';
import Btn from './UI/buttons/Btn';
import { useNavigate } from 'react-router-dom'

const Header = function({displayBack, displayRules, displayCart}) {
const navigate = useNavigate();
    return (
        <header>
            <Logo/>
            <div className="buttons">
                <Btn id="btn-back" style={displayBack} onClick={()=> navigate('/')}>Назад</Btn> 
                <Btn id="btn-rules" style={displayRules} onClick={()=> navigate('/rules')}>Правила возврата</Btn>
                <Btn id="btn-cart" style={displayCart} onClick={()=> navigate('/cart')}>Корзина</Btn>
            </div>
        </header>

)}

export default Header;