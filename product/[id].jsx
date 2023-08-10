import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axiosClient from "@/pages/libraries/axiosClient";
import axios from "axios";
import Header from "@/components/Layout/Header";
const GetproductDetail = (props) => {
  const router = useRouter();
  const { product } = props;
  const [getproduct, setGetproduct] = useState([]);
  const getall = useCallback(async () => {
    try {
      const { id } = router.query;
      const res = await axiosClient.get(
        `http://localhost:3332/admin/product/${id}`
      );
      setGetproduct(res.data.payload);
      console.log('« router »', router);
    } catch (error) {
      console.log(error);
    }
  }, [router.query]);

  useEffect(() => {
    if (router.isReady) getall();
  }, [getall, router.isReady]);
  return (
    <>
    <Header/>
      {getproduct && (
         <div className="body">
         <div className="product_img">
           <img src={getproduct.image} alt="" />
         </div>
         <div className="product_info">
           <div className="seller_info">
           </div>
            <h3 className="product_title">{getproduct.name}</h3>
           
           <div className="product_price">Giá Bán $ {getproduct.discountedPrice}
           </div>
           <div className="product_descr">I'm a product description. I'm a great place to add more details about your product such as sizing, material, care </div>
        
           <div className="product_color">sportstore.com</div>
           <div className="product_color">+92 308 1234567</div>
           <div className="product_quantity">Quantity:<br /> 
             <input type="number" />
           </div>
           <button className="snip1099 red"><span>Add to Cart</span><i className="ion-ios-cart" /></button>
         </div>
       </div>
      )}
    </>
  );
};

export default GetproductDetail;
