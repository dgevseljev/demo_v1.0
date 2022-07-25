import React, { useState } from 'react';
import Contact from './Contact/Contact';

const Footer = function({classFooter, classContact}) {
    
    const contacts = [
        {title: 'Телеграм', links:['https://t.me/kiss_my_traffic', 'https://t.me/KMTDAILY']},
        {title: 'YouTube', links:['https://youtube.com/kiss_my_traffic']},
        {title: 'Правила возврата', links:['по ссылке']}
    ]
    
    return (
        <footer id='footer'>
            <div className={classFooter}>
                {contacts.map((contact) => {
                    return <Contact title={contact.title} links={contact.links} classContact={classContact} key={contact.title}/>
               })}
            </div>
        </footer>
    )}

export default Footer;