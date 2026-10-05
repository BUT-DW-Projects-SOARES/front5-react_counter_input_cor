import PropTypes from "prop-types";

const Input = (props) => {
	return (
		<input
			type={props.type}
			style={{ display: "block", marginBottom: "10px" }}
			value={props.value}
			onChange={props.handleChange}
		/>
	);
};

Input.propTypes = {
	type: PropTypes.oneOf(["number", "text"]).isRequired,
	//value: PropTypes.number
}

export default Input;
