document.getElementById("button").addEventListener("click",()=>{
    document.body.style.backgroundColor = "#9EA9B1";
    document.getElementsByClassName("box")[0].style.display="flex"
})
document.getElementById("box-button").addEventListener("click",()=>{
    document.body.style.backgroundColor = "bisque";
    document.getElementsByClassName("box")[0].style.display="none"
})
