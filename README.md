# Crushing-Bugs-Puzzle-Pieces
Tackle and conquer the bugs that emerged during our session. Analyze the brief carefully, identify the issues, and unleash your problem-solving skills to fix them. Let's turn those pesky bugs into a smooth, flawless experience!

## Installation

No installation is required.

## Usage

Open the index file in your browser of choice.

## Contributing

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

## History

I'm responsible for fixing bugs in the puzzle piece coding to ensure a smooth and flawless game experience. This involves analyzing instructions, identifying issues, and resolving them.

#### Game Functionality
1. **Puzzle Pieces**: 
    - Users can drag any of the four puzzle pieces into designated drop zones.
    - Each drop zone can hold only one piece at a time.
    - Once dropped, a piece stays in the zone.

2. **Background Images**:
    - Users can choose from four background images at the bottom to change the puzzle board’s background.
    - Selecting a new background returns all pieces to the puzzle area.

#### Requirements
1. **Identify Dragged Piece**: Determine which piece the user is dragging.
2. **Determine Drop Zone**: Identify the drop zone where a piece is dropped.
3. **Prevent Overlapping**: Ensure no two pieces occupy the same drop zone.
4. **Change Background**: Detect which background image is clicked and update the puzzle board accordingly.

#### Implementation
- **Background Selection**:
  - All background images are selected using `querySelectorAll` and stored in a variable.
  - Event listeners are added to each image using a `forEach` loop.
  - The `style` property of the puzzle board element is modified to change the background image.
  - The `this` keyword and image IDs are used to swap the image path correctly.

By addressing these tasks, the goal is to turn the bugs into a seamless puzzle game experience.

## Credits

Sashoye Maxwell

## License

MIT: see license file for more information.

