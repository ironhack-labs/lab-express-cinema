document.addEventListener('DOMContentLoaded', () => {
 

  console.log('Ready to cache vars')

  let contdiv = document.getElementById("test")

  for(let i=0; i<contdiv.children.length; i++){
    contdiv.children[i].onclick = ()=>{
      window.location.replace(contdiv.children[i].children[2].href)
      }
    }
  })




