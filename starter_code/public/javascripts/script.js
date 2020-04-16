document.addEventListener('DOMContentLoaded', () => {

  // console.log('IronGenerator JS imported successfully!');
  const movies = document.querySelectorAll(".movie");
  movies.forEach(x => {
    x.addEventListener("click", e => {
      let url = "";
      if (e.target.querySelector(".link") === null) {
        url = e.target.parentNode.querySelector(".link").getAttribute("href");
      } else {
        url = e.target.querySelector(".link").getAttribute("href");
      }
      window.location.href = url;
    });
  });

}, false);