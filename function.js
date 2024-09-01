const emoji = document.querySelector('.emojis')
const emojiarr =["😊","😂","😍","😁","😘","😛","🥳","🥺","🥹","🤭","🤫","😭","😨","😖","🫠","🤗","😚"]
emoji.addEventListener('mouseout',()=>{
    const randemoji=emojiarr[Math.floor(Math.random()*emojiarr.length)];
    emoji.textContent=randemoji;
})