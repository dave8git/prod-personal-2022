import styles from './Product.module.scss';
import clsx from 'clsx';

const OptionColor = (props) => {
    return (
        <ul className={styles.choices}>
            {props.colors.map(item =>
                <li key={item}>
                    <button type="button"
                        onClick={() => props.setCurrentColor(item)}
                        className={clsx(styles['color' + item[0].toUpperCase() + item.substr(1).toLowerCase()], item === props.currentColor && styles.active)} />
                </li>
            )}
            {/* <li><button type="button" className={clsx(styles.colorBlack, styles.active)} /></li>
              <li><button type="button" className={clsx(styles.colorRed)} /></li>
              <li><button type="button" className={clsx(styles.colorWhite)} /></li> */}
        </ul>
    )
};

export default OptionColor;

