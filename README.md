# `papaya-react`

![CI/CD](https://github.com/arindas/papaya-react/workflows/CI/CD/badge.svg)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

React wrapper around https://github.com/rii-mango/Papaya

>Papaya is a pure JavaScript medical research image viewer, supporting DICOM and NIFTI formats, compatible across a range of web browsers. This orthogonal viewer >supports overlays, atlases, GIFTI & VTK surface data and DTI data. The Papaya UI is configurable with many display, menu and control options and can be run on a >web server or as a local, shareable file.

## Steps to incorporate Papaya into your React App

- Copy the papaya minified js to your public folder. For instance
```
# from repository root
cp -r /path/to/Papaya/repo/release/standard public/papaya_standard
```

- Include the JS and CSS files in `public/index.html`
```html
<link rel="stylesheet" type="text/css" href="%PUBLIC_URL%/papaya_standard/papaya.css?build=1449" />
<script type="text/javascript" src="%PUBLIC_URL%/papaya_standard/papaya.js?build=1449"></script>
```

- In your react component, you must initialize papaya as follows:
```js
const params = useMemo(() => {
  const p = []; p["kioskMode"] = true;
  return p;
}, [])

useEffect(() => {
  window.papaya.Container.startPapaya();
  window.papaya.Container.resetViewer(0, params);
}, [params]);
```

- In `React` `JSX`, specify the viewer component as follows:
```html
<div id="papaya_viewer" class="papaya"></div>
```

- Checkout [`./src/App.js`](./src/App.js) for details on file selection and loading.

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

**Note: this is a one-way operation. Once you `eject`, you can???t go back!**

If you aren???t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.

### `npm run deploy`
Deploys this app with github pages at https://arindas.github.io/papaya-react

## License

`papaya-react` is licensed under the GPLv3 License See [LICENSE](./LICENSE) for the full license text.

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Farindas%2Fpapaya-react.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Farindas%2Fpapaya-react?ref=badge_large)
