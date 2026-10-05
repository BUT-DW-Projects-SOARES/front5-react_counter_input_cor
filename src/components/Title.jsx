import { useContext } from 'react';
import { ColorContext } from './App';
import PropTypes from 'prop-types';

const Title = (props) => {
	// Récupération des données de contexte
	// fournies par ColorContext
	const contextValue = useContext(ColorContext);

	return (
		<h1 style={{color: contextValue.color}}>
			{props.text}
		</h1>
	);
};

// Note : isRequired permet de préciser qu'une valeur
// est requise pour une prop
Title.propTypes = {
    text: PropTypes.string.isRequired
}

export default Title;