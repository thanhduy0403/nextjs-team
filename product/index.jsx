import axiosClient from "@/pages/libraries/axiosClient";
import axios from "axios";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

const Product = ( props) => {
  const [getproduct, setGetproduct] = useState([]);
    const getall = useCallback (async()=>{
        try {
            const res = await axiosClient.get ("http://localhost:3332/admin/product")
            setGetproduct(res.data.payload)
        } catch (error) {
            console.log(error);
        }
    },[])

  useEffect (()=>{
    getall()
  },[getall])
  return (
    <>
    <h1 className="title">Product</h1>
    <div className="card">
      {getproduct.length > 0 &&
        getproduct.map((p) => {
          return (

            <Link key={p._id} href={`/product/${p._id}`} className="product-card">
              <div className="badge">Hot</div>
              <div className="product-tumb">
                <img src={p.image} alt="" />
              </div>
              <div className="product-details">
                <span className="product-catagory">{p.name}</span>
               
               
                <div className="product-bottom-details">
                  <div className="product-price">
                    <small>${p.price}</small>${p.discountedPrice}
                  </div>
                  
                </div>
              </div>
            </Link>
          );
        })}
        </div>
    </>
    
  );
};

export default Product;
