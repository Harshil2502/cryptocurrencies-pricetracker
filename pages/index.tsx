import React from "react";
import type { NextPage } from "next";

import NoSSR from "../components/NoSSR";
import Layout from "../components/Layout";
import Ticker from "../components/Ticker";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <NoSSR>
      <Layout>
        <div className="py-24 sm:py-24 lg:py-24">
          <div className="mx-auto max-w-7xl px-2 lg:px-4">
          <div className="sm:text-center ">
            
            <p className="mt-2 text-3xl font-bold tracking-tighter sm:text-5xl text-white capitalize">
            Empowering Digital Exchanges with Virtual Money
            </p>
            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-100 ">
Introducing our cutting-edge cryptocurrency price tracker app — your ultimate companion in the dynamic world of digital assets. Stay informed and ahead of the curve with real-time updates on cryptocurrency prices, trends, and market insights. With user-friendly interfaces and customizable alerts, managing your crypto portfolio has never been easier. Embrace the future of finance at your fingertips.</p>
          </div>

           
            <Ticker />

            {/* <div className="mt-20
            py-4 text-center">
              <p className="text-white">Powered by</p>
              <a href="https://www.binance.com/" className="underline text-indigo-600"target="blank" 
              rel="noreferrer">Binance</a>
            </div> */}
            <div className="  mt-20
            py-4 text-center">
              <p className="text-white">Developed by
              {" "}  <a href="www.linkedin.com/in/harshil-sharma-8923b1205" target="blank"  rel="noreferrer" className="underline text-indigo-600" 
              >Harshil</a>
              </p>
            </div>

          </div>
        </div>
      </Layout>
    </NoSSR>
  );
};

export default Home;
