const king = document.querySelector(".piece")
const allSquares = document.querySelectorAll(".square")



king.addEventListener("dragstart" , dragStart)

let beingDragged
allSquares.forEach(square => {
    square.addEventListener("dragover", dragOver)
    square.addEventListener("drop", dragDrop)

})

function dragStart(event){
    beingDragged = event.target
}

function dragDrop(event){
    console.log(event.target)
    event.target.append(beingDragged)
}

function dragOver(event){
    event.preventDefault()
}