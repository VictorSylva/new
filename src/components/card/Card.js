import styles from "./Card.module.scss"

const Card = ({children, cardclass}) => {
  return (
    <div className={`${styles.card} ${cardclass}`}>{children}</div>
  )
}

export default Card