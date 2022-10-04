import styles from './Product.module.scss';

const ProductImage = (props) => {
    return (
        <img
            className={styles.image}
            alt={props.name}
            src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.currentColor}.jpg`} />
    );
};

export default ProductImage;


