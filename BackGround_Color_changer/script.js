const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')

// buttons are nodeList
buttons.forEach(function(button){

    console.log(button)
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
       if(e.target.id==='grey'){
        body.style.backgroundColor = 'grey';
       }
       if(e.target.id==='white'){
        body.style.backgroundColor = e.target.id;
        body.style.color = 'black';
       }
       if(e.target.id==='blue'){
        body.style.backgroundColor = e.target.id;
       }
       if(e.target.id==='yelow'){
        body.style.backgroundColor ='yellow';
       }
       if(e.target.id==='Black'){
        body.style.backgroundColor ='black';
        body.style.color = 'white';
       }
    })
})