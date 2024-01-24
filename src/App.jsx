import logo from "./assets/logo.svg";
import profilePicture from "./assets/cartoonprofilepic.png";
import "./App.css";

// Importing the components
import PageTitle from "./components/pageTitle";
import Button from "./components/button";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/* Placing the component */}
				<PageTitle />

				{/* Instead of adding the path to where it is located in the folders we import the image and use the imported name */}
				{/*
				OUTDATED: 
				<img src="./assets/cartoonprofilepic.jpg" alt="" /> 
				*/}
				<img src={profilePicture} alt="" className="img" />

				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>

				{/* Placing the component */}
				<Button />
			</header>
		</div>
	);
}

export default App;
