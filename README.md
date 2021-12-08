<img src="./docs/resources/thumbnail.png" width="350" align="right">

# Webpack Setup for React.js

Mininal Webpack and React.js Starter boilerplate.

## Demo

<a href="https://fariasmateuss.github.io/webpack-setup-for-react/" rel="Lint to demo"><img src="./docs/resources/demo.png" alt="Link to demo" /></a>

## Usage

Create a new application using `create-react-app` with the `-e | --example` flag pointing to this repository's url, like so:

```bash
npx create-react-app project-name -e https://github.com/fariasmateuss/webpack-setup-for-react.git
```

## Run Locally

Clone the project

```bash
git clone https://github.com/fariasmateuss/webpack-setup-for-react.git
```

Go to the project directory

```bash
cd webpack-setup-for-react
```

Install dependencies

```bash
yarn
```

Start the server

```bash
yarn dev
```

Open http://localhost:8080 with your browser to see the result.

## Deployment

To deploy this project run

```bash
yarn build
```

## What is included in this boilerplate?

- Support for both JSX and TSX.
- ESLint — Using airbnb config
- Prettier — Code Formatter
- Husky — For running scripts before committing
- Commitizen — To define a standard way of committing rules
- Commitlint — Make sure your commit messages follow the convention
- Renovate — Keep your dependencies up to date
- lint-staged — To run ESLint and Prettier against staged Git files
- PR Workflow — Run Type Check & Linters on all Pull Requests
- EditorConfig — Maintain consistent coding styles across editors and IDEs
- React refresh — So you can change and modify your component without refresh or reload the page in real time change!
- CSS-loader & SASS-loader & style-loader.
- Webpack-serve — A lean and modern webpack development server.

## Scripts

- start dev server using `yarn dev`.
- build and bundling your resources for production `yarn build`.
- deploy it to GitHub pages using `yarn deploy`
- `yarn type-check` validate code using TypeScript compiler.
- `yarn lint` and `yarn format` to run ESLint and Prettier for all files in the `src` directory.
- `yarn commit` run commitizen. Alternative to `git commit`.

## Feedback

If you have any feedback, please contact me through my [LinkedIn profile](https://linkedin.com/in/fariasmateuss).

## License

[MIT](https://choosealicense.com/licenses/mit/)
