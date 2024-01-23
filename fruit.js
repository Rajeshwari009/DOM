
const mainHeading= document.querySelector("#main-heading")
mainHeading.style.textAlign= 'center'
mainHeading.style.backgroundColor= '#006d77'
mainHeading.style.padding= '30px'
mainHeading.style.margin= '30px'
mainHeading.style.borderRadius= '20px'
mainHeading.style.width= '50'
mainHeading.style.color= 'white'


const basketHeading= document.querySelector("#basket-heading")
basketHeading.style.color= 'black'
basketHeading.style.backgroundColor= '#83c5be'



const fruits = document.querySelector('.fruits')
fruits.style.backgroundColor= '#006d77'
fruits.style.paddding= '30px'
fruits.style.listStyleType= 'none'
fruits.style.width= '90%' 
fruits.style.borderRadius= '5px'
fruits.style.margin= '50px'

const fruitItems= document.querySelectorAll('.fruit')
for (let i= 0; i<fruitItems.length; i++){
    fruitItems[i].style.Padding= '30px'
    fruitItems[i].style.margin= '30px'
    fruitItems[i].style.borderRadius ='5px'

}
const EvenfruitColor= document.querySelectorAll('.fruit:nth-child(even)')
for(i = 0; i<EvenfruitColor.length; i++){
EvenfruitColor[i].style.backgroundColor= 'white'
}

const oddColor= document.querySelectorAll('.fruit:nth-child(Odd)')
for (i= 0; i<oddColor.length;i++){
    oddColor[i].style.backgroundColor= '#e29578'

}

const spacing= document.querySelectorAll('.fruit')
for (let i =0; i<spacing.length; i++){
    spacing[i].style.padding= '30px'
    spacing[i].style.margin= '30px'
    spacing[i].style.borderRadius= '100px'

}

// const para = document.createElement('p')
// const paraText= document.createTextNode('Total fruits= 4') 
// para.appendChild(paraText)
// const divs= document.getElementsByTagName('div')
// const secondDiv= divs[1]
// secondDiv.appendChild(para)
// para.style.backgroundColor= 'green'
// para.style.color= 'brown'

// const before= document.querySelector('.fruits')
// secondDiv.insertBefore(para,before) 
// const tags= document.getElementById('basket-heading')
// secondDiv.insertBefore(para,tags)

// para.className= 'fruit count'
// para.id= 'fruitTotal'
// console.log(para);



// CREATUNG PAR TAG-----------------------------------------------------------
const np= document.createElement('p')
np.innerText=  'Hello fruit lovers'
const divs= document.getElementsByTagName('div')
const secondDiv= divs[1]
const byid= document.querySelector('.fruits')
secondDiv.insertBefore(np, byid)
np.style.backgroundColor= '#3a5a40'
np.style.width= '100%'
np.style.borderRadius= '50%'
np.style.textAlign= 'center'
np.style.color= 'white'
np.style.padding= '20px'
np.className= 'fruit count '
np.id= 'fruit total '
console.log(np);

// ---------------------------------------------------------------------------------------------------------------
// INTRODUCING PARENT CHILD AND SIBLING ELEMENTS 
// FOR PARENT = parentElement 
// FOR GRAND PARENT = parerntElement.parentElement
// FOR CHILD = children, ElementChild[1], lastElementChild, FirstElementChild
// FOR SIBLING = nextElementSibling , previousElementSibling 

const ul= document.querySelector('.fruits')
ul.parentElement.parentElement.style.backgroundColor= '#f4f3ee'




































