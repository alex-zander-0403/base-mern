import styles from "./styles.module.css";

// компонент обертка для центровки
export function Wrapper({ children, className = "" }) {
  return <div className={`${styles.wrapper} ${className}`}>{children}</div>;
}
