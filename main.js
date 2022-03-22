console.log("cv еще не доработано, в процессе...очень торопился обновить(")

const modal = document.querySelector('#modalWindow')
const iframe = document.querySelector('#iframe-project')
const closeEl = document.querySelector('.modal-window-close')
const modalTitle = document.querySelector('.modal-window-title');
const wrapper = document.querySelector('.wrapper')

const closeModal = (event) =>{

 
  if( event.target === closeEl){
    document.body.style.overflow = 'scroll'
    wrapper.style.filter = 'none';
    modal.style.display = 'none'
    iframe.src = ""
  }
  
}


const showModal = (card) => {


  const projectSrc = {
    gitproject: 'https://gitproject.vercel.app/',
    momentum : 'https://momentum-jsbrownn.netlify.app/',
    museum : 'https://rolling-scopes-school.github.io/jsbrownn-JSFE2021Q3/museum/',
    tictactoe: 'https://jsbrownn.github.io/tic-tac-toe/'
  }

 

  
  modalTitle.textContent = card.id;
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  wrapper.style.filter = 'brightness(0.2)';
  iframe.src = projectSrc[card.id];
  
  
  document.addEventListener('click', (event) =>{
    closeModal(event)
  })

}

const cards = document.querySelectorAll('.projects_card')
cards.forEach( card => {
  card.addEventListener('click', () =>{
    showModal(card)
  })
})