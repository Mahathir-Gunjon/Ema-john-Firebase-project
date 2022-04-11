import { faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItems.css'
const ReviewItems = (props) => {
    const {handleRemoveProducts, product} = props;
    const { name, img, price, shipping, quantity } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="detaails">
                <div className="detail">
                    <p className='product-name' title={name}>
                        {name.lenth > 20 ? name.slice(0, 20) + '...' : name}

                    </p>
                    <p>price:{price}</p>
                    <p>{shipping}</p>
                    <p>{quantity}</p>
                </div>
                <div className="dlt-btn">
                    <button onClick={()=>handleRemoveProducts(product)}><FontAwesomeIcon className='dlt-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItems;