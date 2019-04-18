
export default function(){

  let els = document.querySelectorAll('.btn-waves')

  Array.from(els).forEach(el => {
    el.addEventListener('click', ripple )
  })

  function ripple(e){
    
    let old = document.querySelector('.ripple')
    if(old) old.remove()

    let span = document.createElement('span')
    span.classList.add('ripple')

    

    this.prepend(span)

    let height, width, rect
    
    rect = this.getBoundingClientRect()
    
    if(rect.height > rect.width){
      height = rect.height
      width = height
    } else {
      width = rect.width
      height = width
    }
  
    let x = e.clientX - rect.left - (width / 2)
    let y = e.clientY - rect.top - (height / 2)
    console.log(e.clientX, e.clientY)
    console.log(rect.left)

    span.style.height = height + 'px'
    span.style.width = width + 'px'
    span.style.top = y + 'px'
    span.style.left = x + 'px'
    span.classList.add('rippleEffect')

  }

}

