const king = document.querySelector(".piece")
const allSquares = document.querySelectorAll(".square")



king.addEventListener("dragstart" , dragStart)

function dragStart(event){
    console.log(event)

}