import classes from "./Cart.module.css"
import Image from 'next/image';
import SelectedInput from './../SelectedInput/selectedInput';
import { useState } from 'react';


const Cart = (props) => {
    const cartItem = {
        name: "Red & Yellow Capsicum (Net Weight ± 20 gm)",
        newPrice: 180,
        oldPrice: 210,
        quantity: ["200 gm", "500 gm", " 700 gm", " 1 kg"]
    }

    const [quantity, setQuantity] = useState(cartItem.quantity[0])
    return (
        <div className={classes.cartContainer}>
            <div className={classes.cart}>
                <div className={classes.cartContent}>
                    <img src="/asset/cartImage.png" width="100%" alt="" />
                    <div className="d-flex flex-column align-items-center">
                        <p className="text-center">{cartItem.name}</p>
                        <SelectedInput selFunc={(parms) => setQuantity(parms)} name="quantity" value={quantity} options={cartItem.quantity} />
                        <div className="d-flex align-items-center">
                            <div className="d-flex align-items-center">
                                <img src="/asset/takaIcon.png" width="15px" />
                                <h3 className="ms-1">{cartItem.newPrice}</h3>
                            </div>
                            <div className="ps-3 d-flex align-items-center">
                                <img src="/asset/takaIcon.png" width="13px" />
                                <p className="ps-1 text-decoration-line-through">{cartItem.oldPrice}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Cart;