import React, { Fragment } from "react";
import Select, { components } from "react-select";
import { stateOptions, updatedCountries } from "./data";
import "./index.css";

const Menu = (props) => {
    return (
        <>
            <components.Menu {...props}>
                <div>
                    {props.selectProps.fetchingData ? (
                        <span className="fetching">Fetching data...</span>
                    ) : (
                        <div>{props.children}</div>
                    )}
                    <button
                        className={"change-data"}
                        onClick={props.selectProps.changeOptionsData}
                    >
                        Change data
                    </button>
                </div>
            </components.Menu>
        </>
    );
};

// const Option = () => {
//     return (
//         <Fragment>
//             <components.Option {...props}>{props.children}</components.Option>
//         </Fragment>
//     );
// };

const CustomSelect = () => {
    const changeOptionsData = () => {
        this.setState({ fetchingData: true });
        setTimeout(() => {
            this.setState((prevState) => ({
                data:
                    prevState.data === updatedCountries ? stateOptions : updatedCountries,
                fetchingData: false
            }));
        }, 1000);
    };
    return (
        <div>
            <Select
                options={stateOptions}
                components={{}}
                fetchingData={false}
                changeOptionsData={changeOptionsData}
                isMulti={true}
            />
        </div>
    );
};



export default CustomSelect;