export const selectCustomStyle = {
	menu: (provided, state) => ({
		...provided,
		backgroundColor: "#ffe9b0",
		color: "#4d1e00",
	}),

	control: (provided, state) => ({
		...provided,
		backgroundColor: "#ffe9b0",
		borderColor: "#d5a676",
		boxShadow: state.isFocused ? "#D5A676 0px 0px 0px 1px" : undefined,
		borderWidth: "1px",
		"&:hover": {
			outline: "none",
		},
	}),

	option: (provided, state) => ({
		...provided,
		backgroundColor: undefined,
		"&:hover": {
			backgroundColor: "#d5a676",
		},
	}),

	indicatorSeparator: (provided, state) => ({
		...provided,
		backgroundColor: "#d5a676",
	}),

	clearIndicator: (provided, state) => ({
		...provided,
		color: "#d5a676",
	}),

	dropdownIndicator: (provided, state) => ({
		...provided,
		color: "#d5a676",
	}),

	placeholder: (provided, state) => ({
		...provided,
		color: "#4d1e00",
	}),

	singleValue: (provided, state) => ({
		...provided,
		color: "#4d1e00",
	}),

	multiValue: (provided, state) => ({
		...provided,
		backgroundColor: "#d5a676",
		color: "#4d1e00",
	}),

	multiValueRemove: (provided, state) => ({
		...provided,
		"&:hover": {
			backgroundColor: "#d5a676",
		},
	}),

	noOptionsMessage: () => ({
		padding: "8px 12px",
	}),
};
