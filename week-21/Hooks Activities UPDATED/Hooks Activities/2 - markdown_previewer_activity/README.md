# Markdown Previewer (Hooks)

In this activity we will add Hooks to an app.

## Instructions

- Open the [Unsolved](Unsolved) folder and install dependencies by running `npm install` at the project root.

- Start the app by running `npm start` from the project root.

- Once the app starts open your browser to [localhost:3000](http://localhost:3000).

- Open `App.js`

### Part 1

- Refer back to the previous activity and use it as a model for setting up this app's Context
  folder.

- Start off by creating a type in `types.js`. (export const ACTION_NAME = "ACTION_NAME")

- Import your type/action into both `MarkdownState.js` and `markdownReducer`.

- In `MarkdownState.js`, create a function that takes the input from textarea and dispatches it
  to `markdownReducer.js`.

- In `markdownReducer.js`, change the state by taking the `action.payload` from your function's
  dispatch and applying it to the value of `markdown`.

### Part 2

- Import `MarkdownState` in `App.js` and wrap all of your components in it.

- Import any pieces of state or functions you need by using `markdownContext.js` in `Input.js`
  and `Output.js`.

### Hints

- There are comments throughout this app to help you out.

- Refer back to the Context folder in the previous activity for a model of what to do. Also,
  check the components in the `madhooks` activity to see how pieces of state and functions are
  imported.
