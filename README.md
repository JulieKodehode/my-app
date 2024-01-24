# Getting started with Create React App

1. Create a folder you want to keep your project in
2. Open that folder in VSC
3. Open terminal
4. Write "npx create-react-app my-app" in terminal
   - npx is Node Package eXecute (Doc)[https://www.npmjs.com/package/npx]
   - create-react-app is the name of the package we want to use (Doc)[https://create-react-app.dev/]
   - my-app is the name of the project (Can be my-app, react-app, my-project, myApp, reactApp, myProject etc)
5. Wait for files to download, when the message "Happy Hacking" appears you are good to go!
6. Open your new project folder. You can use CD to navigate, but this can lead to complications and errors... So open your new project folder in VSC.
7. Open terminal and write "npm start" to get the project up and running in a browser with url localhost:3000
8. Start making changes to the files and see your creativity come to life 🎉

# Easy management

1. In src make a folder called "test" and move the files "App.test.js", "reportWebVitals.js" and "setUpTests.js" into this folder.
   - Remember to change the import for reportWebVitals in index.html to "./foldername/filename"
2. All .js files that you will work in (excluding index.js) should be named .jsx to get HTML emmet abbreviation accessible
3. Make an folder called "assets" for all assets that will be added to the project
4. Delete files that you dont want to keep. Example: "logo.svg" is not necessary when you continue on to your own project.

# Creating components

1. Create a folder called "components". Important to keep structure and easy know what is a component.

- These next step is specific for this project. Make a components about whatever you want, but use this recipe.

2. Create a file called pageTitle.jsx and write the function you want your component to be.

- your file can be camelCase but you component needs to be PascalCase. It needs to be PascalCase because when we use an component as an element we need to difference between a regular HTML element and a component element. (Doc)[https://medium.com/@smail.oubaalla/how-to-name-your-react-component-conventions-b8daf3abc574]

3. Export your function with the export default keywords either directly in your function or under your function

```
export default function PageTitle() {
	return (
		<div>
			<h1>Velkommen!</h1>
		</div>
	);
}
```

```
function PageTitle() {
	return (
		<div>
			<h1>Velkommen!</h1>
		</div>
	);
}
export default PageTitle;
```

4. Import your component to App.jsx with the import keyword and add the component name where you want it to be

```
import PageTitle from "./components/pageTitle";
```

```
<PageTitle />
```

# Adding assets

1. Add your desired asset to the asset folder
2. Import your asset to your App.jsx file

```
import profilePicture from "./assets/cartoonprofilepic.png";
```

3. Use the name you gave your asset (in this case it is profilePicture)in your asset in a <code>img src={profilePicture}</code>

# Adding styling

1. Add the attribute className and give it a class name you want to edit in a .css file as normal

- It is called className because class is a reserved javascript keyword.
