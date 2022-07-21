import { useState,useEffect } from "react";
import { faker } from '@faker-js/faker';
export default function Cardsmall() {
    const [image, setImage] = useState(false);
    const [product, setProduct] = useState(false);
    useEffect(() => {
        setImage(faker.image.fashion(480, 600, true))
        setProduct(faker.commerce.productName())
     }, []);
    return (
        <div className="card">
            <img id="imgsmall" src={image} />
            <div className="container">
                <p>{product}</p>
            </div>
        </div>
    );
}
