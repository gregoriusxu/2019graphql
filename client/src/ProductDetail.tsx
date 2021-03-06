import React from 'react';
import { Product } from './types';
interface Props {
    product: Product | null | undefined
}
function ProductList(props: Props) {
    let product = props.product;
    if (!product)
        return null;
    return (
        <ul className="list-group">
            <li className="list-group-item">ID:{product.id}</li>
            <li className="list-group-item">产品名称:{product.name}</li>
            <li className="list-group-item">分类名称:{product.category!.name}</li>
            <li className="list-group-item">
                此分类下面的所有产品
                <ul className="list-group">
                    {
                        product.category!.products!.map((item: Product) => (
                            <li className="list-group-item">{item.name}</li>
                        ))
                    }
                </ul>
            </li>
        </ul>
    )
}
export default ProductList;