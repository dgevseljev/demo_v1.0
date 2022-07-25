import React, { useState } from 'react';
import classes from './SectionRules.module.css'

const SectionRules = function() {

    const [classArrow, setClassArrow] = useState(`${classes.arrow}`);
    const [classBody, setClassBody] = useState(`${classes.rulesBody}`);

    
    function show(event) {
        event.stopPropagation();
        console.log({classArrow})
        if (classArrow === `${classes.arrow}`) {
            setClassArrow(`${classes.arrow} ${classes.up}`)
            setClassBody(`${classes.display} ${classes.rulesBody}`)
        } else {
            setClassArrow(`${classes.arrow}`)
            setClassBody(`${classes.rulesBody}`)
        }
    }

    return (
        <section className={classes.rules}>
            <div className={classes.rulesHeader} onClick={show}>
                <div className={classes.rulesCaption}>Правила возврата</div>
                <div className={classArrow}></div>
            </div>
            <div className={classBody}>
            <strong>Правила замены аккаунта:</strong>
            <br></br>
            <ul>
                <li>1.Гарантия на товар 1 час позже о замене, пожалуйста, не пишите. </li>
                <li>2. Принятый товар не подлежит возврату, возможна только замена аккаунта.</li>
                <li>3. Покупайте то количество, которое сможете проверить в ближайшее время.</li>
                <li>4. Приобретайте аккаунты только в том случае, если знаете как ими пользоваться.</li>
                <li>5. Ваша гарантия замены – запись видео или скриншот в течение 1 часа после покупки.</li>
                <li>6. Ответ оператора до 12 часов в рабочее время.</li>
            </ul>
            <br></br>
            <strong>Что НЕ является основанием для замены:</strong>
            <br></br>
            <ul>
                <li>– Блокировка во время фарма фарм – любые действия на аккаунте;</li>
                <li>– Запрет рекламной деятельности на аккаунте;</li>
                <li>– Блокировка аккаунта после привязки карты в билинге;</li>
                <li>– Трудности с созданием business manager.</li>
            </ul>
            <br></br>
            <strong>ВАЖНО: После покупки аккаунта, администрация магазина не несет ответственности за их использование в тех или иных целях. <br></br>Все действия на аккаунте остаются на полной юридической ответственности покупателя.</strong>
            <br></br>
            <br></br>После покупки аккаунта ОБЯЗАТЕЛЬНО требуется их чекнуть проверить. Если Вы вошли в аккаунт и он заблокирован, мы вправе отказать в замене Вы самостоятельно нажимаете кнопку «согласен с правилами» при оформлении заказа.
            <br></br><br></br>
            <strong>Для получения замены предоставьте следующие данные в одном сообщении:</strong>
            <br></br>
            <ul>
                <li>1. Адрес электронной почты;</li>
                <li>2. Дата и время заказа;</li>
                <li>3. Номер заказа;</li>
                <li>4. Файл с аккаунтом;</li>
                <li>5. ID проблемных аккаунтов;</li>
                <li>6. Описание проблемы.</li>
            </ul>
            </div>
        </section>
)}

export default SectionRules;