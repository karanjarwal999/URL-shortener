// https://api.shrtco.de/v2/shorten?url=${url}
let urlinput=document.getElementById('urlinput')
let message=document.getElementById('message')
let copybutton=document.getElementById('copyurl')
let openbutton=document.getElementById('openurl')
let submit=document.getElementById('submit')
let url=''

submit.addEventListener('click',()=>{
    if(urlinput.value==''){
       message.style.display='block'
       message.textContent='Please Enter URL' 
       setTimeout(() => {
        message.style.display='none'
       }, 2000);
    }else{
        (async function fetchurl(){
            let res= await fetch(`https://api.shrtco.de/v2/shorten?url=${urlinput.value}`)
            if(res.ok){
                let data=await res.json()
                console.log(data)
                url=data.result.full_short_link
                message.style.display='block'
                message.textContent=url
                copybutton.style.display='block'
                openbutton.style.display='block'
            }
            else{
                console.log('invalid URL')
            }
        })()
    }
})

copybutton.addEventListener('click',()=>{
  navigator.clipboard.writeText(message.innerHTML);
  copybutton.innerText='Copied'
  setTimeout(() => {
    copybutton.innerText='Copy'
  }, 2000);

})

openbutton.addEventListener('click',()=>{
    window.open(url,'_blank')
})

let hypern=document.getElementById('hypern')
let closehypern=document.getElementById('closehypern')
let hypern_button=document.querySelector('nav>p')
hypern_button.addEventListener('click',()=>{
    hypern.style.display='block'
})
closehypern.addEventListener('click',()=>{
    hypern.style.display='none'
})