import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import SectionRules from '../Components/SectionRules/SectionRules';
import ShoppingList from '../Components/ShoppingList/ShoppingList';
import CurrentWay from '../Components/UI/PaymentWay/CurrentWay';
import PaymentWay from '../Components/UI/PaymentWay/PaymentWay';
import SectionTitle from '../Components/UI/title/SectionTitle';

const Cart = function(props) {

    const [payment, setPayment] = useState([
        {name: 'Qiwi', current: 'payment_way inside-current'},
        {name: 'Криптовалюта', current: 'payment_way', width: 0, offset: 0},
        {name: 'Карта', current: 'payment_way', width: 0, offset: 0},
    ])

    const [currentPos, setCurrentPos] = useState({
        width: 0, offset:0})

    function moveTumbler(width, offset, name) {
        setCurrentPos({width, offset})
        let copyPayment = [];
        copyPayment = payment.slice();
        copyPayment.map((way) => {
            if (way.name !== name) 
                way.current = 'payment_way'
            else 
                way.current = 'payment_way inside-current';    
        })
        setPayment(copyPayment);
    }


    return (
        <div>
        <div className={props.classScroll}>
            <Header 
                displayRules={{display:'none'}}
                displayBack={{display:'inline-block'}}
                displayCart={{display:'none'}}/>
            <SectionTitle title='Корзина' subtitle={{firstRow:'Подтвердите выбор'}}/> 
            <ShoppingList/>
            <SectionRules/>
            <SectionTitle
                title='e-mail'
                subtitle={{
                    firstRow: 'Укажите Ваш e-mail',
                    secondRow: 'На него мы вышлем данные о покупке. Мы не будем рассылать спам'
                }}/>
            <form className="mail-form" action="">
                <input id="mail" type="email" placeholder="example@gmail.com"></input>
            </form> 
            <SectionTitle
                style={{marginTop: '40px'}}
                title='Оплата'
                subtitle={{
                    firstRow: 'Выберите удобный способ оплаты'
                }}/>

            <div className="payment_position_wrapper">
            <div className="payment_wrapper">
                <div className="payment_container">
                    <ul className="payment_list">
                        {payment.map((way) => {
                            return <PaymentWay 
                                key={way.name} 
                                way={way.name}
                                current={way.current}
                                move={moveTumbler}
                                /> 
                        })}
                    </ul>
                    <CurrentWay width={currentPos.width} offset={currentPos.offset}/>
                    <button className="btn-payment">К оплате</button>
                </div>
            </div>   
            </div>
        </div>
        <Footer classFooter={props.classFooter} classContact={props.classContact}/>
        </div> 
)}

export default Cart;