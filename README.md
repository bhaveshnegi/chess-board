# Chessboard Application

## Task 1: Chessboard Application

### 1. Project Description

This project is a Chessboard application developed using **React** and **Redux**. The chessboard consists of an 8x8 grid of alternating black and white squares. The following functionalities are implemented:

- **Click Interaction:**
  - When a user clicks on a white square, its color changes to yellow.
  - When a user clicks on a black square, its color changes to red.

The application's state, including the color of each square, is managed using **Redux** to ensure proper state management across the board.

---

### 2. Features

- **Alternating Colors:** The chessboard consists of black and white squares arranged alternately.
- **Color Change on Click:**
  - White squares change to yellow upon being clicked.
  - Black squares change to red upon being clicked.
- **State Management:** Redux is used to track and manage the color of each square globally.

---

### 3. Application Workflow

1. **Board Rendering:**
   - The chessboard is rendered as an 8x8 grid, where each square alternates between black and white.

2. **Square Interaction:**
   - When a square is clicked, a Redux action is dispatched, updating the color of the clicked square.
   - White squares toggle between white and yellow, while black squares toggle between black and red.

---

### 4. Technologies Used

- **React** for building the UI components.
- **Redux** for managing the global state of the chessboard.
- **CSS Grid Layout** for rendering the chessboard layout in an 8x8 grid format.

---

### 5. Component & State Structure

#### Components

- **Chessboard Component:**
  - Renders an 8x8 grid of squares, each square alternates in color and has an onClick behavior to toggle its color.
  
- **Square Component:**
  - Represents each square on the chessboard, receiving its color and click behavior from Redux.

#### Redux State Management

1. **Actions:**
   - `TOGGLE_SQUARE_COLOR`: Updates the color of a square based on user clicks.

2. **Reducer:**
   - The `chessboardReducer` tracks the state of each square, managing the color changes (white/yellow or black/red) when the appropriate action is dispatched.

3. **Algorithm:**
   - **Color Toggle Logic:** On click, white squares change to yellow, and black squares change to red. Redux updates the color state, which is then reflected in the UI.
   - **CSS Grid Layout:** Ensures the chessboard is displayed as a grid with equal-sized squares, alternating between black and white.

---

