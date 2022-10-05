import styles from './Product.module.scss';
import Button from '../Button/Button';
import { useState, useMemo } from 'react';
import ProductImage from './ProductImage';
import OptionColor from './OptionColor';
import OptionSize from './OptionSize';
const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);


  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const getPrice = useMemo(props => {
    return props.basePrice + currentSize.additionalPrice;
  }, [currentSize.additionalPrice]);

  const onBuy = (event) => {
    event.preventDefault();
    const productSummary = {
      price: getPrice(),
      color: currentColor,
      size: currentSize,
      name: props.name,
    }
    console.log(productSummary);
  }
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <ProductImage currentColor={currentColor} name={props.name} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>

            <OptionSize sizes={props.sizes} setCurrentSize={setCurrentSize} currentSize={currentSize} />

          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>

            <OptionColor colors={props.colors} setCurrentColor={setCurrentColor} currentColor={currentColor} />

          </div>
          <Button className={styles.button} onClick={onBuy}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;