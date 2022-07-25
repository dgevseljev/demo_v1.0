import React from 'react';
import { useNavigate } from 'react-router-dom'


const Contact = function({title,links, classContact}) {
    const navigate = useNavigate()
    const linksList = links.map((link) => {
        if (link === 'по ссылке') {
            return <a key={link} onClick={()=> navigate('/rules')} className="footer-link">{link}<br></br></a>
        } else {
        return <a key={link} href="" className="footer-link">{link}<br></br></a>
        }
    })

    return (
        <div className={classContact}>
            <h3 className="contact_title">{title}</h3>
            <p className="contact_body">
                {linksList}
            </p>
        </div>
    )}

export default Contact;