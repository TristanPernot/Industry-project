import "./Button.scss";

function Button({ text, type, addClassName, handleClick, disabled }) {
  return (
    <div className="btn">
      <button
        disabled={disabled}
        onClick={handleClick ? handleClick : null}
        type={type ? type : null}
        className={addClassName ? `btn__style ${addClassName}` : "btn__style"}
      >
        {text}
      </button>
    </div>
  );
}
export default Button;
