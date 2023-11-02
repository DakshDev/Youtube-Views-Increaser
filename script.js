// Const and var
let main = document.getElementById('main-box');
let inp = document.getElementById('inp');
let num = document.getElementById('num')
let btn = document.getElementById('btn');
let playVideo = document.getElementById('play-video');
let videoBox = document.getElementById('video-box');

// Target
btn.addEventListener('click',clickFun);
function clickFun(){
    // INPUT
    let valueInp = inp.value;
    valueInp = valueInp.replace('watch?v=','embed/');
    // NUMBER
    let valueNum = num.value;

    if(valueInp.length == 0){
        alert('Enter url to increase your youtube videos view')
    }else if(!valueInp.includes('https')){
        alert('your url is not secure only accepted (\"https\") url !')
    }else if(valueNum.length == 0){
        alert('Enter the number as many times want to play the video')
    }else{
        for(let i=0; i<valueNum; i++){
                let createElm = document.createElement('iframe');
                createElm.setAttribute('src',valueInp);
                createElm.setAttribute('allowfullscreen','allowfullscree');
                videoBox.appendChild(createElm);         
        }
     }         
}

