console.log("Javascript is connected");

// variables always go at the top -> this is step 1
// these are the connections that you're making to elements on the page 
// use CSS selectors to make connections to elements with JavaScript

// create a 1 to 1 connection with a variable -> querySelector("queryString")
// let theButton = document.querySelector("#buttonOne");

// create a 1 to many connection with a variable -> querySelectorAll("queryString")
let theButtons = document.querySelectorAll("#buttonHolder img"),
	theHeading = document.querySelector("#headLine h1"),
	puzzleBoard = document.querySelector(".puzzle-board"),
	puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
	dropZones = document.querySelectorAll('.drop-zone'),
	// store the dragged piece in a global variable
	// because we need it in the handleDrop function
	draggedPiece,
	imgcount = 0;
let reset = document.querySelector("#resetBut");
// step 3
// functionality always goes in the middle -> how do we want
// the app to behave?
function changeBGImage() {
	// the `` is a JavaScript template string. It tells the JS enging to evaluate the expression
	// inside the braces - run that little bit of code. In this case it's just pulling the ID of the
	// button we clicked on and putting it at the end of the image name (0, 1, 2, 3)
	// and updating the background-image style of the puzzle board element.

	// bug fix #2 should go here. it's at most 3 lines of JS code.
	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;

	let currentid = this.id;

	//change each puzzle piece

	puzzlePieces[0].src = `images/topLeft${this.id}.jpg`;
	puzzlePieces[1].src = `images/topRight${this.id}.jpg`;
	puzzlePieces[2].src = `images/bottomLeft${this.id}.jpg`;
	puzzlePieces[3].src = `images/bottomRight${this.id}.jpg`;


	resetPuzzle();
}

function handleStartDrag() { 
	console.log('started dragging this piece:', this);
	// store a reference to the puzzle piece image that we're dragging
	// so we can use it later and move it to a drop zone
	draggedPiece = this;
}

function handleDragOver(e) { 
	e.preventDefault(); // e is shorthand for event
	// this overrides the default dragover behaviour
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

// Define the resetPuzzle function
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
// step 2
// event handling always goes at the bottom => 
// how do we want users to interact with our app

// 1 to 1 event handling
//theButton.addEventListener("click", changeBGImage);

// 1 to many event handling
// add event handling to each button in the collection of buttons, one at a time
theButtons.forEach(button => button.addEventListener("click", changeBGImage));

// add the drag event handling to the puzzle pieces
puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

// add the dragover AND the drop event handling to the drop zones
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

// add the drop event handling
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

reset.addEventListener("click", resetPuzzle);
