import React from 'react';
import ProductBaseball from './product-baseball/product-baseball.comp';
import ProductBasketball from './product-basketball/product-basketball.comp';
import ProductCategory from './product-category/product-category.comp';
import ProductElectronics from './product-category/product-electronics.comp';
import ProductFootball from './product-football/product-football.comp';
import ProductIphone from './product-iphone/product-iphone.comp';
import ProductIpod from './product-ipod/product-ipod.comp';
import ProductNexus from './product-nexus/product-nexus.comp';
import './product-table.style.css';
const ProductTable = () => {
    return (
        <div className="product-table-container">
            <ProductCategory/>
            <ProductFootball/>
            <ProductBaseball/>
            <ProductBasketball/>
            <ProductElectronics/>
            <ProductIpod/>
            <ProductIphone/>
            <ProductNexus/>
        </div> 
    );
}

export default ProductTable;