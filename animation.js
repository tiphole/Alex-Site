/* -----SCROLLING ANIMATION---- */

function checkForVisibility() {
  var words = document.querySelectorAll(".words");
  words.forEach(function(words) {
    if (isElementInViewport(words)) {
      words.classList.add("wordsVisible");
    } /* else {
      words.classList.remove("wordsVisible");
    } */
  });
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

if (window.addEventListener) {
  addEventListener("DOMContentLoaded", checkForVisibility, false);
  addEventListener("load", checkForVisibility, false);
  addEventListener("scroll", checkForVisibility, false);
}


/* json */
const req = new XMLHttpRequest();

req.open('GET', 'data.json');

req.responseType = 'json';

req.addEventListener('readystatechange', ()=> {
    if (req.readyState === XMLHttpRequest.DONE){
        switch(req.status){
            case 200: 
            const content = document.getElementById('quote-json');
            for(let history of req.response){
                    const p = document.createElement ('p');
                    p.innerText = `${history.text}`;
                    content.appendChild(p);
            }
            break;

            case 404:
                console.error('Not Found');
                break;
        }
    }
});

req.send();
