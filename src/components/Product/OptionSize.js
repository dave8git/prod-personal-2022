import styles from './Product.module.scss';

const OptionSize = (props) => {
    return (
        <ul className={styles.choices}>
            {props.sizes.map(size => <li key={size.name}><button type="button" onClick={() => props.setCurrentSize(size)} className={size.name === props.currentSize.name ? styles.active : null}>{size.name}</button></li>)}
            {/* <li><button type="button" className={styles.active}>S</button></li>
              <li><button type="button">M</button></li>
              <li><button type="button">L</button></li>
              <li><button type="button">XL</button></li> */}
        </ul>
    )
};

export default OptionSize;