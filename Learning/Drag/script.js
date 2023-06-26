const king = document.querySelector(".piece")
const allSquares = document.querySelectorAll(".square")



king.addEventListener("dragstart" , dragStart)

let beingDragged
allSquares.forEach(square => {
    square.addEventListener("dragover", dragOver)
    square.addEventListener("drop", dragDrop)

})

function dragStart(e){
    beingDragged = e.target
}

function dragDrop(e){
    e.preventDefault()
    console.log(e.target)
}

function dragOver(e){
    e.preventDefault()
}