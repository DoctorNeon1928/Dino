let dino = document.getElementById('dino');
let btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{

    if (!dino.classList.contains('jump'))
    {
        dino.classList.add('jump');
        setTimeout(()=>
        {
            dino.classList.remove('jump')
        },4200);
    }

    
})































































