import styles from "./styles.module.css";

//
export function Button({
  containerClassName = "",
  className = "",
  onClick = () => null,
  isBackButton = false,
  children = "",
}) {
  return (
    <div className={containerClassName}>
      <span
        className={`${isBackButton ? styles.backButton : styles.button} ${className}`}
        onClick={onClick}
      >
        {children}
      </span>
    </div>
  );
}
