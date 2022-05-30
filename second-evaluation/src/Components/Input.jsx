import '../App.css'

export const Input = ({
  type,
  size,
  variant,
  rightLogo,
  rightLogoOnClick,
  onChange
}) => {
  return (
    <div className="inputContainer">
      {/* Add Right Logo */}
      <input
        type={type}
        size={size}
        variant={variant}
        onChange={onChange}
        oClick={rightLogoOnClick}
        className={`input`}
        
      />
      <img style={{ marginLeft: "-30px" }} src={rightLogo} alt="" />
    </div>
  );
};