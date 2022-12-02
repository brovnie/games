const Button = (props) => {
    return (
        <button {...props.buttonSpec}>
            {props.children}
        </button>
    )
}

export default Button;