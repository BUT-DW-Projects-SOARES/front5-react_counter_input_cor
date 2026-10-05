import { useState, useRef, useEffect, useContext } from "react";
import { ColorContext } from "./App";
import PropTypes from "prop-types";
import "../styles/Counter.css";

const Counter = (props) => {
	// Récupération des données de contexte
	// fournies par ColorContext
	const contextValue = useContext(ColorContext);

	// Création de la donnée d'état local score, initialisée à 0
	// et création de sa fonction de mise à jour setScore
	const [score, setScore] = useState(0);

	// Hook de référence pour garder une trace de la
	// valeur de l'état avant mise à jour (qui sera
	// accessible via ref.current.score)
	const ref = useRef({ score: 0 });

	// Appel immédiat après le montage du composant
	// (insertion dans l'arbre de composants)
	useEffect(() => {
		console.log("useEffect 1");
	}, []);

	// Appel après le montage du composant et après chaque
	// mise à jour des props ou des données d'état local
	useEffect(() => {
		console.log("useEffect 2");
	});

	// Appel après le montage du composant et après
	// chaque mise à jour des props ou des données d'état
	// local passés en paramètre
	useEffect(() => {
		console.log("useEffect 3");
		// Si les valeurs de props.step ou de score
		// ont changé (et seulement celles-ci), met à jour le titre
		// du document via l’API du navigateur
		document.title = `The score is ${score}`;
		console.log(ref.current.score, "->", score);
		// On sauvegarde le score courant
		ref.current.score = score;
	}, [score]);

	useEffect(() => {
		// Remize à zéro du score lorsque la valeur de props.step change
		setScore(0);
	}, [props.step]);

	const handleClick = function () {
		// Mise à jour de l'état local score
		// en ajoutant la valeur de props.step
		if (!isNaN(props.step))
			setScore(score + props.step);
	};

	return (
		<>
			<button
				className="counter"
				style={{ backgroundColor: props.color, color: "white" }}
				onClick={handleClick}
			>
				{props.text}
			</button>
			<p style={{ color: contextValue.color }}>Score : {score}</p>
		</>
	);
};

// Note : isRequired permet de préciser qu'une valeur
// est requise pour une prop
Counter.propTypes = {
	step: PropTypes.number.isRequired,
	color: PropTypes.string.isRequired,
};

export default Counter;
