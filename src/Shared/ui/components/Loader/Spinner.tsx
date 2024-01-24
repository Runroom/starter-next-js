import styles from './Loader.module.css';

interface ISpinnerProps {
  component?: boolean;
}

export const Spinner = ({ component = false }: ISpinnerProps): JSX.Element => (
  <div className={`${styles['spinner']} ${component ? styles['spinner--target'] : ''}`}>
    <div className={`${styles['spinner__loader']}`} />
  </div>
);
