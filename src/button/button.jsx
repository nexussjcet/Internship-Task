import './button.css';

function Button({ buttonText, ...props }) {
    return (
        <button className="button" {...props}>{buttonText}</button>
    );
}

Button.defaultProps = {
    buttonText: 'Click me'
}

export default Button;