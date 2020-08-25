import React from "react";
const Input = (props: any) => {
    let inputElement = null;

    switch (props.elementType) {
        case "email":
            inputElement = (
                <React.Fragment>
                    <label className="form-label">
                        {props.elementConfig.label}
                    </label>
                    <input
                        {...props.elementConfig}
                        value={props.value}
                        onChange={props.changed}
                        onKeyDown={props.onKeyPressed}
                    />
                </React.Fragment>
            );
            break;
        case "password":
            inputElement = (
                <React.Fragment>
                    <label className="form-label">
                        {props.elementConfig.label}
                    </label>
                    <input
                        {...props.elementConfig}
                        value={props.value}
                        onChange={props.changed}
                        onKeyDown={props.onKeyPressed}
                    />
                </React.Fragment>
            );
            break;
    }
    return <div className="form-group">{inputElement}</div>;
};
export default Input;
