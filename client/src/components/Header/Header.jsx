import { Wrapper } from "../Wrapper";
import WaveImage from "./wave.svg";
import styles from "./styles.module.css";

//
export function Header() {
  return (
    <>
      <div className={styles.header}>
        <Wrapper className={styles.content}>
          <h1 className={styles.title}>Base MERN</h1>
          <p className={styles.desc}>base mern stack training project</p>
        </Wrapper>

        <img src={WaveImage} alt="" className={styles.wave} />
      </div>
    </>
  );
}

// export default Header;
