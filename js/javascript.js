window.onload = function(){
  document.querySelector("#menu1 ul").style.display = 'none'
  document.querySelector(".menuMobile").addEventListener("click", function(){
      
      if(document.querySelector("#menu1 ul").style.display == 'none'){
          document.querySelector("#menu1 ul").style.display = 'block'
      } else if(document.querySelector("#menu1 ul").style.display = 'block'){
          document.querySelector("#menu1 ul").style.display = 'none'
      }
  })

  document.querySelector("#area").addEventListener("click", function(){
      if(document.querySelector(".most").style.display == 'none'){
          document.querySelector(".most").style.display = 'block'
          document.querySelector(".most").style.textAlign = 'left'
          document.querySelector(".most").style.margin = '0px 0px 0px 65px'
          document.querySelector("#area").style.fontSize = '1.2rem'
          document.querySelector("#area").style.color = 'red'
      }
      else{
          document.querySelector(".most").style.display = 'none'
          document.querySelector("#area").style.color = 'white'
          document.querySelector("#area").style.fontSize = '1rem'
      }
  })
  document.querySelector("#items")
  .addEventListener("wheel", event =>{
       if(event.deltaY < 0){
           event.target.scrollBy(-300, 0)
       }else{
          event.target.scrollBy(300, 0)
       }
  })







  const imgs = document.querySelector('#imgC')
  const img = document.querySelectorAll('#imgC .slide')
  
  let idx = 0
  
  function carrousel(){
      idx++
  
      if(idx > img.length - 2){
          idx = 0
      }
  
      imgs.style.transform = `translateX(${-idx * 300}px)`
  }
  
  setInterval(carrousel, 2000);


}