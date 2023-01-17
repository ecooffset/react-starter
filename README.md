# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Linting

### Running the tests

Tests are implemented using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), and [Vitest](https://vitest.dev/) is used to run them. To run the existing tests:

```node
$ npm test
```

##### New templates

We use [`hygen`](https://www.hygen.io/) to automate some tasks.

```node
# Will generate new component, including test, storybook and CSS file
npm run new component
```

### Set up ESLint

```node
npm i -D eslint eslint-config-next eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Create `.eslintrc.js` file in the root of the project to configure.

```json
// package.json "scripts" object
"lint-js": "eslint '*/**/*.{js,jsx,ts,tsx}' --fix",
"lint-ts": "tsc -p tsconfig.json --noEmit",
```

Copied `.eslintrc.js` content from Ryan's starter.
Removed this as it isn't an issue anymore in Next v13.

```json
"jsx-a11y/anchor-is-valid": "off",
```

### Set up Stylelint

```node
npm i -D stylelint
```

Create `.stylelintrc.js` file to the root of the project to configure.

Copied `.stylelintrc.js` content from Ryan's starter.

```json
// package.json "scripts" object
"lint-css": "stylelint '*/**/*.{css}' --fix",
```

### Set up Prettier

```node
npm i -D prettier
```

Create `.prettierrc` file to the root of the project to configure.
Create `.prettierignore` file to the root of the project to configure.

Copied content from Ryan's starter.

```json
// package.json "scripts" object
"format": "prettier '*/**/*.{js,jsx,ts,tsx,json,md}' --write",
```

### editorcofig (coding standards)

Make sure you have an editorconfig extension installed for your test editor of choice. For example VSCode: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig.

Add a `.editorconfig` file to the root of the project, and copy the rules from [our front end coding standards](https://www.notion.so/codecomputerlove/Front-End-Coding-Standards-d657ea2e972d4563a5edcf666322624a) into it.

## Husky

Install husky

```node
npm i -D husky lint-staged
```

Install the git hooks

```node
npx husky install
```

Add the prepare script to the `package.json`

```node
"prepare": "husky install"
```

Set up a `lint-staged.config.js` file in the root of the project because running the lint-ts script above won't work unless it's inside a function syntax:

```javascript
module.exports = {
	'*.{js,jsx,ts,tsx,json,md}': 'prettier --write',
	'*.{js,jsx,ts,tsx}': 'eslint --fix',
	'*.{css}': 'stylelint --fix',
	'*.{ts,tsx}': () => 'tsc -p tsconfig.json --noEmit',
};
```

Add this script to the pre-commit hook by running this command:

```node
npx husky add .husky/pre-commit "npx lint-staged"
```

Any commits should now be automatically linted and fail with an appropriate error when necessary.

## Set up PostCSS

Create `postcss.config.js` file in the root of the project.
To enable nesting you just need to set `"nesting-rules": true` in the feature object of postcss-preset-env.

In VSCode - at the time of writing it's slightly awkward to get proper nested syntax highlighting without breaking the normal CSS intellisense. Use the postcss-sugarss-language extension and not the PostCSS Language Support extension and add this to the workspace settings:

```json
"files.associations": { "*.css": "postcss" },
```

### Global styles and variables

Create a `global.css` file into `./src/styles` to handle globals and variables here. To add the globals to the whole app just import the file directly into the custom `_app.tsx` :

```javascript
import '../styles/globals.css';
```

Variables are set in the `:root` element inside `globals.css` and are then available inside any module.

⚠️ As far as I know, at the time of writing - there is not a way to get any CSS variable autocomplete extension in vscode to work alongside the postcss syntax highlighting extension, you can have either one or the other. Any solution to this would be welcome.
