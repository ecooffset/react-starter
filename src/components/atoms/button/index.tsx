import styles from './index.module.css'

export type TButton = React.PropsWithChildren;

const Button: React.FC<TButton> = ({...rest}) => {
  return <div className={styles.base} {...rest}>Component</div>
}

export default Button