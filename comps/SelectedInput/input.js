const Input = (props) => {
    return (
        <div className="customSelectInput">
            <select name={props.name} value={props.value} {...props} onChange={props.onChanged} className="form-select" aria-label="Default select example">
                {props.options ? props.options.map((op) => (
                    <option key={op} value={op}>{op}</option>
                )) : ""}
            </select>
        </div>
    );
}

export default Input;