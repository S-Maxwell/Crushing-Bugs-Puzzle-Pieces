console.log("Javascript is connected");

//variables - Always remains at the top. These are connections that you are making to elements on the page. CSS Selectors are used to make connections to elements with Javascript.

//Previous code:
//const theButtons = document.querySelectorAll("#buttonHolder img");
//const puzzleBoard = document.querySelector (".puzzle-board");
//const puzzlePieces = document.querySelectorAll(".puzzle-pieces img");
//const dropZones = document.querySelectorAll(".drop-zone");
//let draggedPiece;

//Create a 1 to 1 connection with a variable -> querySelector("queryString")
//let theButton = document.querySelector('#buttonOne");

//Then, create a 1 to many connection with a variable -> querySelectorAll("queryString")

let theButtons = document.querySelectorAll("#buttonHolder img"),
    theHeading = document.querySelectorAll("#headLine h1"),
    puzzleBoard = document.querySelectorAll(".puzzle-board"),
    puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
    dropZones = document.querySelectorAll(".drop-zone"),
    // Store the dragged piece in a global variable for use in the handleDrop function.
    draggedPiece,
    imgCount = 0;

    let reset = document.querySelector("#resetBut");

//functions - Goes in the middle: Defining how we want the app or program to behave.

//Previous code:
//function changeBGImage(event) {
    //console.log("changeBGImage called");
    //Method 1
    //console.log(this.id);
    //background-image: url('../images/backGround0.jpg');
    //puzzleBoard.style.backgroundImage = `url('./images/backGround${this.id}.jpg')`;

    //Method 2 
    //console.log(event.currentTarget.id);
    //puzzleBoard.style.backgroundImage = `url("../images/backGround${event.currentTarget.id}.jpg")`;

//}

function changeBGImage() {
// The `` is a JavaScript template string. It instructs the JavaScript engine to evaluate the expression inside the braces, executing that code snippet. Here, it retrieves the ID of the clicked button and appends it to the image name (0, 1, 2, 3), updating the background-image style of the puzzle board element.

//Bug fix #2 should go here. It requires at most 3 lines of JavaScript code.   

puzzleBoard.style.backgroundImage = 'url(images/backGround${this.id}.jpg)';

let currentTarget = this.id;

 //Make changes to the puzzle pieces.

 puzzlePieces[0].src = 'images/topLeft${this.id}.jpg';
 puzzlePieces[1].src = 'images/topRight${this.id}.jpg';
 puzzlePieces[2].src = 'images/bottomLeft${this.id}.jpg';
 puzzlePieces[3].src = 'images/bottomRight${this.id}.jpg';

 resetPuzzle();

}

function handleStartDrag() {
    //console.log("started dragging ${this}");
    console.log('started dragging this piece:', this);
    //Store a reference to the puzzle piece image we're dragging so we can use it later to move it to a drop zone.
    draggedPiece = this;
}

function handleDragOver(e) {
    e.preventDefault();
    //"e" is shorthand for "event." This overrides the default dragover behavior. 
    //console.log("Dragged Over");
    console.log('dragged over me');
}

function handleDrop(e) {
    e.preventDefault();
    console.log('dropping something on me');

    if (this.children.length === 0) {
        this.appendChild(draggedPiece);
    } else {
        console.log('Nope! This drop zone is occupied!');
    }  
}

//Next, define the resetPuzzle function.
function resetPuzzle() {
    puzzlePieces.forEach(function(piece) {
        if (piece.parentElement.classList.contains('drop-zone')) {
            puzzleBoard.appendChild(piece);
        }
    });

    puzzlePieces.forEach(function(piece) {
        document.querySelector(".puzzle-pieces").appendChild(piece);
    });

    dropZones.forEach(function(zone) {
        zone.style.backgroundImage = '';
    });
}


//eventListeners - Always placed at the bottom: How do we want users to interact with our app or program?

//This is the 1 to many event handling function.
//Step 1: We add event handlers to each button in the collection, one at a time.
theButtons .forEach(button => button.addEventListener("click" , changeBGImage));

//Step 2: We add drag event handlers to the puzzle pieces. 
puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

//Step 3: We add dragover and drop event handlers to the drop zones.
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

//Step 4: We add the drop event handler.
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

//Step 5: We ensure we include the reset functionality.
reset.addEventListener("click", resetPuzzle);
