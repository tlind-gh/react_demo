# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Notes
in terminal
create vite@latest {projectname}
choose: y, React, JavaScript,
run: cd {projectname}, npm install, npm run dev

components folder -> for components, all should be capitalized (except main)

styles folder -> for css style files, NOT capitalized

components must be exported in their files, and imported in App.jsx

pure functions -> same arguments/props always = same outdata from function
side-effect -> when fetching data/interacting with external environments (outside the JS program, such as back-end Java script part, database, setTimeout/setInterval are (external to JS!) or Window/DOM)

side-effects are controlled via useEffect, since we want to have a very controlled flow of data (when/what/how!) in/out

useEffect{(what to do), (when to do (anytime anything in here is changed))}

useEffect is run first time element is rendered, and when an dependency is changed

Router DOM -> instead of <a> use <Link>, which has a lot more complex usability and can be dynamic (e.g., go to an endpoint that is /products/:id)

install react-route-dom
terminal command: npm install react-router-dom