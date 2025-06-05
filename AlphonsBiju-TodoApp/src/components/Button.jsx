import PropTypes from 'prop-types';

export default function Button(props) {
  return (
    <button className={props.class} onClick={props.handleClick}>
      {props.btnText}
    </button>
  );
}

// Prop type validation
Button.propTypes = {
  class: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
};
