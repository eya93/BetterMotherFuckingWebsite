setTimeout(showPopup, 10000);
function showPopup () {
    if (confirm("Hey le site xxxvidsxxx est trop bien. Voulez-vous le voir")) {
        // window.location.href = "http://stackoverflow.com";
        window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
     } 
}
  

function activatePsychMode() {
    //color praagraph text
    let pArray = Array.from(document.querySelectorAll('p'));
    pArray = pArray.concat(Array.from(document.querySelectorAll('li')))
    for (let i of pArray){
        i.style.color= "blue";
        i.style.fontFamily= "papyrus";
    }
    //color headings text
     let hArray = Array.from(document.querySelectorAll('h1'));
     hArray = hArray.concat(Array.from(document.querySelectorAll('h2')));
     hArray = hArray.concat(Array.from(document.querySelectorAll('h3')));
     hArray = hArray.concat(Array.from(document.querySelectorAll('h4')));
    for (let i of hArray){
        i.style.color= "green";
        i.style.fontFamily= "Comic Sans MS";
    }

    document.querySelector('body').style.background = "black";
};
