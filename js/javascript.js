window.onload = function(){
    document.querySelector(".menuMobile").addEventListener("click", function(){
        if(document.querySelector("#menu1 ul").style.display == 'block'){
            document.querySelector("#menu1 ul").style.display = 'none'
        } else{
            document.querySelector("#menu1 ul").style.display = 'block'
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


}