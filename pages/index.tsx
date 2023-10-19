import React from "react";
import type { NextPage } from "next";

import NoSSR from "../components/NoSSR";
import Layout from "../components/Layout";
import Ticker from "../components/Ticker";

const Home: NextPage = () => {
  return (
    <NoSSR>
      <Layout>
        <div className="py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-2 lg:px-4">
          <div className="sm:text-center ">
            <h2 className="text-5xl font-bold leading-8  tracking-wide mb-10 underline text-white uppercase">
              cryptocurrencies
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tighter sm:text-5xl text-white capitalize">
              Virtual money for digital world 
            </p>
            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, doloribus rem assumenda nihil laboriosam facere ducimus odit quae? Esse possimus, optio laudantium voluptatem deserunt facere. Iste atque ipsum explicabo debitis?.</p>
          </div>

           
            <Ticker />

            <div className="mt-20
            py-4 text-center">
              <p className="text-white">Powered by</p>
              <a href="https://www.binance.com/" className="underline text-indigo-600"target="blank" 
              rel="noreferrer">Binance</a>
            </div>

          </div>
        </div>
      </Layout>
    </NoSSR>
  );
};

export default Home;
