
// Old code ))//



let titleAudio = new Audio;
let firstCar = new Audio;
let secondCar = new Audio;
let thirdCar = new Audio;
let forthCar = new Audio;
let fifthCar = new Audio;
let sixthCar = new Audio;
let seventhCar = new Audio;
let eightCar = new Audio;
let ninthCar = new Audio;
let tenthCar = new Audio;
let machineVoice = new Audio;
machineVoice.src = "./sound/machine-voice.mp3";
var navBar = document.querySelector(".navbar-left");
function machineVoiceFun(){
    machineVoice.play();
    return;
}
let boolean = true;
let boolean2 = true;
let boolean3 = true;
let boolean4 = true;
let boolean5 = true;
let boolean6 = true;
let boolean7 = true;
let boolean8 = true;
let boolean9 = true;
let boolean10 = true;
let boolean11 = true;

window.onscroll = function a(){
    console.log(document.body.scrollTop);
    if(document.body.scrollTop > 405 && document.body.scrollTop <= 1000){
        if(boolean === true){
            for(let i=0;i<navBar.children.length; i++){
                navBar.children[i].style.cssText = `color: #fff;`;
            }
            titleAudio.src = "./sound/1.mp3";
            titleAudio.play();
            firstCar.pause();
            secondCar.pause();
            thirdCar.pause();
            forthCar.pause();
            fifthCar.pause();
            sixthCar.pause();
            seventhCar.pause();
            eightCar.pause();
            ninthCar.pause();
            tenthCar.pause();
            titleAudio.loop = false;
            boolean = false;
            boolean2 = true;
            boolean3 = true;
            boolean4 = true;
            boolean5 = true;
            boolean6 = true;
            boolean7 = true;
            boolean8 = true;
            boolean9 = true;
            boolean10 = true;
            boolean11 = true;
        }else{return;}
    }
    if(document.body.scrollTop > 1000 && document.body.scrollTop <= 1600){
        if(boolean2 === true){
            for(let i=0;i<navBar.children.length; i++){
                navBar.children[i].style.cssText = `color: #000;`;
            }
            firstCar.src = "./sound/2.mp3";
            titleAudio.pause();
            secondCar.pause();
            thirdCar.pause();
            forthCar.pause();
            fifthCar.pause();
            sixthCar.pause();
            seventhCar.pause();
            eightCar.pause();
            ninthCar.pause();
            tenthCar.pause();
            firstCar.play();
            firstCar.loop = false;
            boolean2 = false;
            boolean = true;
            boolean3 = true;
            boolean4 = true;
            boolean5 = true;
            boolean6 = true;
            boolean7 = true;
            boolean8 = true;
            boolean9 = true;
            boolean10 = true;
            boolean11 = true;
        }else{return;}
    }
    if(document.body.scrollTop > 1600 && document.body.scrollTop <= 2002){
        if(boolean3 === true){
            for(let i=0;i<navBar.children.length; i++){
                navBar.children[i].style.cssText = `color: #fff;`;
            }
            secondCar.src = "./sound/3.mp3";
            titleAudio.pause();
            firstCar.pause();
            thirdCar.pause();
            forthCar.pause();
            fifthCar.pause();
            sixthCar.pause();
            seventhCar.pause();
            eightCar.pause();
            ninthCar.pause();
            tenthCar.pause();
            secondCar.play();
            secondCar.loop = false;
            boolean3 = false;
            boolean = true;
            boolean2 = true;
            boolean4 = true;
            boolean5 = true;
            boolean6 = true;
            boolean7 = true;
            boolean8 = true;
            boolean9 = true;
            boolean10 = true;
            boolean11 = true;
        }else{return;}
    }
    if(document.body.scrollTop > 2003 && document.body.scrollTop <= 2669){
        if(boolean4 === true){
            for(let i=0;i<navBar.children.length; i++){
                navBar.children[i].style.cssText = `color: #000;`;
            }
            thirdCar.src = "./sound/4.mp3";
            titleAudio.pause();
            firstCar.pause();
            secondCar.pause();
            forthCar.pause();
            fifthCar.pause();
            sixthCar.pause();
            seventhCar.pause();
            eightCar.pause();
            ninthCar.pause();
            tenthCar.pause();
            thirdCar.play();
            thirdCar.loop = false;
            boolean4 = false;
            boolean = true;
            boolean2 = true;
            boolean3 = true;
            boolean5 = true;
            boolean6 = true;
            boolean7 = true;
            boolean8 = true;
            boolean9 = true;
            boolean10 = true;
            boolean11 = true;
        }else{return;}
    }
    if(document.body.scrollTop > 2670 && document.body.scrollTop <= 3335){
        if(boolean5 === true){
            for(let i=0;i<navBar.children.length; i++){
                navBar.children[i].style.cssText = `color: #fff;`;
            }
            forthCar.src = "./sound/5.mp3";
            titleAudio.pause();
            firstCar.pause();
            secondCar.pause();
            thirdCar.pause();
            fifthCar.pause();
            sixthCar.pause();
            seventhCar.pause();
            eightCar.pause();
            ninthCar.pause();
            tenthCar.pause();
            forthCar.play();
            forthCar.loop = false;
            boolean5 = false;
            boolean = true;
            boolean2 = true;
            boolean3 = true;
            boolean4 = true;
            boolean6 = true;
            boolean7 = true;
            boolean8 = true;
            boolean9 = true;
            boolean10 = true;
            boolean11 = true;
        }else{return;}
    }
    if(document.body.scrollTop > 3336 && document.body.scrollTop <= 4003){
        if(boolean6 === true){
            for(let i=0;i<navBar.children.length; i++){
                navBar.children[i].style.cssText = `color: #fff;`;
            }
            fifthCar.src = "./sound/6.mp3";
            titleAudio.pause();
            firstCar.pause();
            secondCar.pause();
            thirdCar.pause();
            forthCar.pause();
            sixthCar.pause();
            seventhCar.pause();
            eightCar.pause();
            ninthCar.pause();
            tenthCar.pause();
            fifthCar.play();
            fifthCar.loop = false;
            boolean6 = false;
            boolean = true;
            boolean2 = true;
            boolean3 = true;
            boolean4 = true;
            boolean5 = true;
            boolean7 = true;
            boolean8 = true;
            boolean9 = true;
            boolean10 = true;
            boolean11 = true;
        }else{return;}
    }
    if(document.body.scrollTop > 4004 && document.body.scrollTop <= 4670){
        if(boolean7 === true){
            for(let i=0;i<navBar.children.length; i++){
                navBar.children[i].style.cssText = `color: #000;`;
            }
            sixthCar.src = "./sound/7.mp3";
            titleAudio.pause();
            firstCar.pause();
            secondCar.pause();
            thirdCar.pause();
            forthCar.pause();
            fifthCar.pause();
            seventhCar.pause();
            eightCar.pause();
            ninthCar.pause();
            tenthCar.pause();
            sixthCar.play();
            sixthCar.loop = false;
            boolean7 = false;
            boolean = true;
            boolean2 = true;
            boolean3 = true;
            boolean4 = true;
            boolean5 = true;
            boolean6 = true;
            boolean8 = true;
            boolean9 = true;
            boolean10 = true;
            boolean11 = true;
        }else{return;}
    }
    if(document.body.scrollTop > 4671 && document.body.scrollTop <= 5337){
        if(boolean8 === true){
            for(let i=0;i<navBar.children.length; i++){
                navBar.children[i].style.cssText = `color: #fff;`;
            }
            seventhCar.src = "./sound/8.mp3";
            titleAudio.pause();
            firstCar.pause();
            secondCar.pause();
            thirdCar.pause();
            forthCar.pause();
            fifthCar.pause();
            sixthCar.pause();
            eightCar.pause();
            ninthCar.pause();
            tenthCar.pause();
            seventhCar.play();
            seventhCar.loop = false;
            boolean8 = false;
            boolean = true;
            boolean2 = true;
            boolean3 = true;
            boolean4 = true;
            boolean5 = true;
            boolean6 = true;
            boolean7 = true;
            boolean9 = true;
            boolean10 = true;
            boolean11 = true;
        }else{return;}
    }
    if(document.body.scrollTop > 5338 && document.body.scrollTop <= 6004){
        if(boolean9 === true){
            for(let i=0;i<navBar.children.length; i++){
                navBar.children[i].style.cssText = `color: #fff;`;
            }
            eightCar.src = "./sound/9.mp3";
            titleAudio.pause();
            firstCar.pause();
            secondCar.pause();
            thirdCar.pause();
            forthCar.pause();
            fifthCar.pause();
            sixthCar.pause();
            seventhCar.pause();
            ninthCar.pause();
            tenthCar.pause();
            eightCar.play();
            eightCar.loop = false;
            boolean9 = false;
            boolean = true;
            boolean2 = true;
            boolean3 = true;
            boolean4 = true;
            boolean5 = true;
            boolean6 = true;
            boolean7 = true;
            boolean8 = true;
            boolean10 = true;
            boolean11 = true;
        }else{return;}
    }
    if(document.body.scrollTop > 6005 && document.body.scrollTop <= 6670){
        if(boolean10 === true){
            for(let i=0;i<navBar.children.length; i++){
                navBar.children[i].style.cssText = `color: #000;`;
            }
            ninthCar.src = "./sound/10.mp3";
            titleAudio.pause();
            firstCar.pause();
            secondCar.pause();
            thirdCar.pause();
            forthCar.pause();
            fifthCar.pause();
            sixthCar.pause();
            seventhCar.pause();
            eightCar.pause();
            tenthCar.pause();
            ninthCar.play();
            ninthCar.loop = false;
            boolean10 = false;
            boolean = true;
            boolean2 = true;
            boolean3 = true;
            boolean4 = true;
            boolean5 = true;
            boolean6 = true;
            boolean7 = true;
            boolean8 = true;
            boolean9 = true;
            boolean11 = true;
        }else{return;}
    }
    if(document.body.scrollTop > 6671 && document.body.scrollTop <= 7337){
        if(boolean11 === true){
            for(let i=0;i<navBar.children.length; i++){
                navBar.children[i].style.cssText = `color: #fff;`;
            }
            tenthCar.src = "./sound/11.mp3";
            titleAudio.pause();
            firstCar.pause();
            secondCar.pause();
            thirdCar.pause();
            forthCar.pause();
            fifthCar.pause();
            sixthCar.pause();
            seventhCar.pause();
            eightCar.pause();
            ninthCar.pause();
            tenthCar.play();
            tenthCar.loop = false;
            boolean11 = false;
            boolean = true;
            boolean2 = true;
            boolean3 = true;
            boolean4 = true;
            boolean5 = true;
            boolean6 = true;
            boolean7 = true;
            boolean8 = true;
            boolean9 = true;
            boolean10 = true;
        }else{return;}
    }
}