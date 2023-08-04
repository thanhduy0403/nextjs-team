
import React from "react";
import Head from "next/head";
import { Bangers } from "next/font/google";
import Product from "@/components/product";
import Header from "@/components/Layout/Header";
import Banner from "@/components/Layout/Banner";


const Homepage = () => {
  return (
    <>
      <Head>
        <title>HOME SPORT STORE</title>
      </Head>
      <Header/>
      <Banner/>
      <Product/>
      
     
    </>
  );
};

export default Homepage;
