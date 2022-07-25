    const screen = document.getElementById('wrapper-padding');
  const contactsContainer = document.getElementById('footer_content-wrapper');
  document.addEventListener('scroll', anim);

  function anim() {
    let end = (window.innerHeight + window.pageYOffset) >= (document.body.offsetHeight - 65);
    console.log('screen = ');
    console.log(screen);
    if (!(end))  {
        screen.classList.remove('slide-up');
        screen.classList.add('slide-down');
        contactsContainer.classList.remove('visible');
        // contacts.forEach((item) => {
        //     item.classList.remove('display');
        // });
    } else if (end){
        screen.classList.remove('slide-down');
        screen.classList.add('slide-up');
        contactsContainer.classList.add('visible');
        // contacts.forEach((item) => {
        //     item.classList.add('display');
        // });
    }  
  }