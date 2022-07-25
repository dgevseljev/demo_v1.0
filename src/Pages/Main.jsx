import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer';
import Grid from '../Components/Grid';
import Header from '../Components/Header';
import Products from '../Components/Products';
import SectionTitle from '../Components/UI/title/SectionTitle';

const Main = function(props) {

const base = [{id: 1, category: 'Аккаунты Facebook с созданным БМ или Фан Пейдж', 
  prods: [{id:11, name: 'Аккаунт Facebook (RU) - заполненные, без друзей - создан БМ + токен'},
  {id:12, name: 'Аккаунт Facebook (UA) - заполненные, без друзей - создан БМ + токен'},
  {id:13, name:'Аккаунт Facebook (UA) - ФАРМ, заполненные, 0-50 друзей, - создан ФП + токен '}]},
{id:2, category: 'Аккаунты Facebook под автозалив', 
  prods: [{id:21, name:'Аккаунт Facebook (Казахстан) для рекламы - заполненные, без друзей + ТОКЕН'}]},
{id:3, category:'Аккаунты Facebook ручной фарм и ПЗРД', 
  prods:[{id:31, name: 'Аккаунт Facebook (Украина) для рекламы - заполненные, друзья 0-50 + почта + FanPage'},
  {id:32, name: 'Аккаунт Facebook (Украина) для рекламы - Фарм до 14 дней, Ава, ФП, БМ (50$), личная рк БМ '},
  {id:33, name:'Аккаунт Facebook (Украина) для рекламы - 2 родных BM 250$, SMS+ Email+ Друзья до 50, ФП, EAAB, EAAG + UserAgent, Cookies'},
  {id:34, name:'Аккаунт Facebook (Украина) для рекламы - фарм 7-15 дней, друзья 0-50 + почта + пройден ЗРД + токен'}]},
{id:4, category:'Аккаунты Facebook без друзей', 
prods: [{id:41, name: 'Аккаунт Facebook (Украина) для рекламы - фото + куки + FanPage'},
  {id:42, name:'Аккаунт Facebook (Россия) для рекламы - фото + куки + FanPage'}]}  
]

  const [prodsList, setProdsList] = useState()
  const [ctgList, setCtgList] = useState()

  function createCtgList() {
    console.log('base: ', base)
    let copyBase = [];
    base.map((ctg) => {
      let id = ctg.id;
      let name = ctg.category;
      // console.log(cgt.name)
      copyBase.push({id, name})
    })
    setCtgList(copyBase);
    console.log('copyBase: ', copyBase);
  }

  function whatCategory(id){
    console.log('in whatCategory, clicked id = ',id)
    base.map((ctg) => {
      if (ctg.id === id) {
        setProdsList(ctg.prods)
      }
    })
    console.log('prods: ', prodsList)
  }

  useEffect(() => {
    createCtgList();
    }, []);

  return (
    <div>
      <div className={props.classScroll}>
        <Header
          displayBack={{display:'none'}}
          displayRules={{display:'inline-block'}}
          displayCart={{marginLeft:'20px'}}/>
        <SectionTitle title='Категории' subtitle={{firstRow: 'Выберите категорию'}}/>
        {(ctgList) && <Grid ctg={whatCategory} list={ctgList}/>}
        {/* <Grid ctg={whatCategory} list={ctgList}/> */}
        {(prodsList) && <Products productss={prodsList}/>}
        {/* <Products productss={prodsList}/> */}
      </div>
      <Footer classFooter={props.classFooter} classContact={props.classContact}/>
    </div>  
  )}

export default Main