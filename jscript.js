
let slider=document.getElementById("slider")
let images=['./img/ludo.avif' , './img/drive.avif' , './img/game.avif']
let indexNo=0;
function slideBack(){
    indexNo--;
    if(indexNo<0){
      indexNo=images.length-1
}
slider.src=images[indexNo]
}
function slideForward(){
    indexNo++;
    if(indexNo>images.length-1){
      indexNo=0;
}
slider.src=images[indexNo]
}
setInterval(()=>{
    slideForward()
}, 3000); 


let side=document.querySelector("#sideNav")
let sideStatus='hide'
let body=document.querySelector("body")
function menu(){
  if(sideStatus==='hide'){
    side.classList.add('sideshow')
    body.style.overflow='hidden'
    sideStatus='show'

  }
  else{
    side.classList.remove('sideshow')
    body.style.overflow='scroll'
    sideStatus='hide'
  }
}


let root=document.querySelector("#root")

let imageData=async()=>{
  const url = 'https://imdb188.p.rapidapi.com/api/v1/getWeekTop10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '85a3c02001mshf5968ad7f659381p16ccf3jsn286bcfe87cf2',
		'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
  result.data.map((A)=>{
    let carDiv=document.createElement('div')
    let image=document.createElement('img')
    carDiv.classList.add("card")
    root.append(carDiv)
    carDiv.append(image)
    image.src=A.primaryImage.imageUrl
    

  })
  console.log(result);
} catch (error) {
	console.log(error.message);
}
}
setTimeout(() => {
  imageData()
}, 2000);