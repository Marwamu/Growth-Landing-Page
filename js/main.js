// FAQ Accordion 
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content')

    faqContainer.addEventListener('click', (e)=>{
       const groupHeader = e.target.closest('.faq-group-header')
       
       if(!groupHeader) return;

       const group = groupHeader.parentElement;
       const groupBody= group.querySelector('.faq-group-body')
       const icon = groupHeader.querySelector('i')


    //    Toggle Icons
    icon.classList.toggle('fa-plus')
    icon.classList.toggle('fa-minus')

    //    Toggle Vibaility Body
    groupBody.classList.toggle('open')

    //    CLose other FAQ bodies
    const otherGroups = faqContainer.querySelectorAll('.faq-group');
    console.log(otherGroups)
    otherGroups.forEach((otherGroups) =>{
        if(otherGroups !== group){
            const otherGroupBody = otherGroups.querySelector('.faq-group-body');
            const otherGroupIcon = otherGroups.querySelector('i');

            otherGroupBody.classList.remove('open')
            otherGroupIcon.classList.remove('fa-minus')
            otherGroupIcon.classList.add('fa-plus')
        }
    })

    })
})


// Mobile Menu

document.addEventListener('DOMContentLoaded', ()=>{
    const hamurgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu')

    hamurgerButton.addEventListener('click', ()=> mobileMenu.classList.toggle('active'))
})