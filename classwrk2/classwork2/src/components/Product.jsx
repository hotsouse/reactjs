export default function Product({ title, price, inStock, description, rating, tags }) {
    const hasSale = tags.includes("Sale");
    const finalPrice = hasSale ? price * 0.9 : price;
    const formattedPrice = new Intl.NumberFormat().format(finalPrice);

    return (
        <div className="product-card" style={styles.card}>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>
                {inStock ? (
                    <>
                        Cost:{" "}
                        <span style={hasSale ? styles.oldPrice : {}}>
                            {hasSale ? new Intl.NumberFormat().format(price) : formattedPrice}
                        </span>
                        {hasSale && (
                            <span style={styles.salePrice}> {formattedPrice} (Sale!)</span>
                        )}
                    </>
                ) : (
                    <span style={{ color: "red" }}>Out of stock</span>
                )}
            </p>
            <p>Rating: {"⭐".repeat(rating)}</p>
            <p>
                Tags:{" "}
                {tags.map((tag, index) => (
                    <span key={index} style={styles.tag}>
                        {tag}
                    </span>
                ))}
            </p>
        </div>
    );
}


const styles ={
    card:{
        border:"1px solid #ddd",
        borderRadius:"10px",
        padding:"15px",
        margin:"10px",
        maxWidth:"250px",

    },

oldPrice:{
    TextDecoration:"line-through",
    marginRight:"10px",
},
salePrice:{
    color:"green",
    fontWeight:"bold",
},
tag:{
display:"inline-block",
marginRight:"5px",
padding:"2px 6px",
backgroundColor:"#eee",
borderRadius:"5px",
}
};