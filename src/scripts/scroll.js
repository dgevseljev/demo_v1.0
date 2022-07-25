const screen = document.querySelector('.wrapper-padding');
// const body = document.body;
const contactsContainer = document.querySelector('.footer_content-wrapper');
const contacts = document.querySelectorAll('.contacts');
document.addEventListener('scroll', anim);

function anim() {
    let end = (window.innerHeight + window.pageYOffset) >= (document.body.offsetHeight - 65);
    if (!(end))  {
        screen.classList.remove('slide-up');
        screen.classList.add('slide-down');
        contactsContainer.classList.remove('visible');
        contacts.forEach((item) => {
            item.classList.remove('display');
        });
    } else if (end){
        screen.classList.remove('slide-down');
        screen.classList.add('slide-up');
        contactsContainer.classList.add('visible');
        contacts.forEach((item) => {
            item.classList.add('display');
        });
    }  
}