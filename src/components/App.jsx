import { useState, createContext } from "react";
import Title from "./Title";
import Counter from "./Counter";
import Input from "./Input";

// Création du contexte ColorContext
export const ColorContext = createContext(null);

const App = () => {
	// Les composants Title et Counter
	// sont créés dans le context ColorContext
	// qui fournit la valeur {color: 'red'}

	const [step, setStep] = useState(1);
	const [text, setText] = useState("Up Vote!");

	const handleChangeStep = (e) => {
		let val = parseInt(e.target.value, 10);
		if(isNaN(val))
			val = 1;
		setStep(val);
	};

	const handleChangeText = (e) => {
		setText(e.target.value);
	};	

	return (
		<ColorContext.Provider value={{ color: "black" }}>
			<Title text="Hello!" />
			<Input type={"text"} value={text} handleChange={handleChangeText} />
			<Input type={"number"} value={step} handleChange={handleChangeStep} />
			<Counter color={"#008CBA"} step={step} text={text} />
		</ColorContext.Provider>
	);
};

export default App;
