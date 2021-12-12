'use strict'
let nav =document.createElement('div')
let rmain = document.getElementById('root')
let contant = document.createElement('div')
let buttons = document.createElement('div')
let api_key = 'WrqgZN32FESGihRKhxSQyFN2E5GRn7V1'
let tab_name = 'home'
nav.style.width='100vw'
nav.style.display='flex'
nav.style.padding='5px'
nav.style.justifyContent='center'
buttons.style.display='flex'
buttons.style.justifyContent='space-evenly'
buttons.style.flexWrap='wrap'
buttons.style.maxWidth='75%'
nav.style.boxSizing='border-box'
rmain.append(nav);
rmain.style.display='flex'
rmain.style.flexDirection='column'
rmain.style.justifyContent='center'
rmain.style.alignItems='center'
contant.style.width='80vw'
contant.style.height='90vh'
contant.style.display='flex'
contant.style.flexWrap='wrap'
contant.style.gap='2% 1%'
contant.style.padding='10px'
contant.style.display='flex'
contant.style.justifyContent='center'
let i=0;
let a=[];
let b=[]

rmain.append(contant)
nav.append(buttons)

function change(id){

    tab_name = id.id;
    child_delet();
    get(tab_name);


}

function child_delet(){

    contant.textContent = ''
    buttons.textContent = ''

}

function get(tab_name){

fetch(`https://api.nytimes.com/svc/topstories/v2/${tab_name}.json?api-key=${api_key}`)
.then(response => response.json())
.then(commits =>{

    i=0;

    commits.results.map(item =>{

        a[i] = item.section;

        i++;

        if(item.multimedia != null && item.title != '' && item.abstract != ''){

        console.log(item)
        
        let card = document.createElement('div')
        let sect = document.createElement('div')
        let img = document.createElement('img')
        let desc = document.createElement('h6')
        let title = document.createElement('h3')
        let text_field = document.createElement('div')
        let read_more = document.createElement('a')

        if(tab_name == 'home'){
            
            card.className='home'
            sect.className='home'
            nav.className='home'
        
        }
        else {if(tab_name == 'climate'){
            
            card.className='climate'
            sect.className='climate'
            nav.className='climate'
        
        }

        else if(tab_name == 'health'){
            
            card.className='health'
            sect.className='health'
            nav.className='health'
        
        }
        else if(tab_name == 'science'){
            
            card.className='science'
            sect.className='science'
            nav.className='science'

        }
        else if(tab_name == 'world'){
            
            card.className='world'
            sect.className='world'
            nav.className='world'
        
        }

        else{

            card.className='home'
            sect.className='home'
            nav.className='home'

        }
    
        }

        card.id='card'

        contant.append(card)
        card.style.maxWidth='360px'
        card.style.maxHeight='460px'
        card.style.display='flex'
        card.style.flexDirection='column'
        card.style.justifyContent='center'
        card.style.alignItems='center'
        card.style.boxSizing='border-box'
        card.style.position='relative'

        card.append(img)
        img.style.width='100%'
        img.style.height='55%'

        card.append(sect)
        sect.id='sect'
        sect.style.width='30%'
        sect.style.height='10%'
        sect.style.position='absolute'
        sect.style.top='0'
        sect.style.left='0'
        sect.style.display='flex'
        sect.style.justifyContent='center'
        sect.style.alignItems='center'
        sect.style.fontSize= "20px";
        sect.style.textDecoration='bold'


        card.append(text_field)
        text_field.style.width='100%'
        text_field.style.height='45%'
        text_field.style.textAlign='center'
        text_field.style.position='relative'
        
        text_field.append(title)
        text_field.append(desc)
        text_field.append(read_more)

        read_more.innerText='<<ReadMore>>'
        read_more.href=item.short_url
        title.innerText=item.title
        desc.innerText=item.abstract
        sect.innerText=item.section

        desc.style.fontSize="13px"

        read_more.style.textDecoration="none"
        read_more.style.color="white"
        text_field.style.position='relative'


        img.src=item.multimedia[0].url


        }



    })

    b = a.filter((item, i, ar) => ar.indexOf(item) === i)

    b.forEach(item =>{

        let but=document.createElement('button')
        but.id = item
        but.setAttribute('onclick',`change(this)`)
        but.innerText = item
        buttons.append(but)

    })

    

})

}


get(tab_name)

