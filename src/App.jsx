import React, {useState} from "react";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";

const App = () => {
	const [red,setRed] = useState(0);
	const [green,setGreen] = useState(0);
	const [blue,setBlue] = useState(0);
    return (
		<div> 
			<nav>
				<a href="">Задать цвет</a>
				<a href="">Текст</a>
				<a href="">Значение</a>
			</nav>
			<div className="page">
				<Page1 setRed={setRed} setGreen={setGreen} setBlue={setBlue}/>
				<Page2 red={red} green={green} blue={blue}/>
				<Page3 red={red} green={green} blue={blue}/>
			</div>
		</div>
	)
}

export default App;