import React from "react";
import CatalogText from "./CatalogText";
import styles from './catalog.module.css'
import CatalogPictures from "./CatalogPictures";
import CatalogCategories from "./CatalogCategories";

function Catalog (){
    return(
        <div>
            <CatalogText/>
            <div className={styles.goods}>
                <CatalogCategories/>
                <CatalogPictures/>
            </div>
        </div>
    )
}
export default Catalog;