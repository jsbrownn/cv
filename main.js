console.log("cv еще не доработано, в процессе...очень торопился обновить(")

const modal = document.querySelector('#modalWindow')
const iframe = document.querySelector('#iframe-project')
const closeEl = document.querySelector('.modal-window-close')
const modalTitle = document.querySelector('.modal-window-title');
const wrapper = document.querySelector('.wrapper');
const overlay = document.querySelector('.modal__overlay');
const menuToogle = document.querySelector('#menu__toggle')



menuToogle.addEventListener('change',(event)=>{
 console.log('click',event.target)
  const btn = event.target;

  const removeChecked =()=>{
    btn.checked = false;
  }

  if(btn.checked){
    document.addEventListener('click',removeChecked,false)
  } 
  else
  {
    document.removeEventListener('click',removeChecked,false)
    btn.checked = true;
  }  

});


const closeModal = (event) =>{

  

    document.body.style.overflow = 'scroll'
    wrapper.style.filter = 'none';
    overlay.style.visibility = 'hidden';
    iframe.src = "";
    overlay.removeEventListener('click', closeModal)

}


const showModal = (card) => {

  const projectSrc = {
    gitproject: 'https://gitproject.vercel.app/',
    momentum : 'https://momentum-jsbrownn.netlify.app/',
    museum : 'https://rolling-scopes-school.github.io/jsbrownn-JSFE2021Q3/museum/',
    tictactoe: 'https://jsbrownn.github.io/tic-tac-toe/'
  }

  modalTitle.textContent = card.id;
  document.body.style.overflow = 'hidden';
  wrapper.style.filter = 'brightness(0.2)';
  overlay.style.visibility = 'visible';
  iframe.src = projectSrc[card.id];
  overlay.addEventListener('click',closeModal);
  overlay.addEventListener('keydown',closeModal);

}

const cards = document.querySelectorAll('.projects_card')
cards.forEach( card => {
  card.addEventListener('click', () =>{
    showModal(card)
  })
})