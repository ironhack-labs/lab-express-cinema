document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

  document.getElementById('btn-home').addEventListener('click', ()=>{
    window.location = '/movies'
  })

}, false);
