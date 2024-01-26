/* eslint-disable @next/next/no-img-element */
import React, { memo } from "react";

import Loader from "./Loader";
import Status from "./Status";
import { formatPrice } from "../utils";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
interface Props {
  crypto: {
    id: string;
    name: string;
    symbol: string;
    iconCode: number;
    price: number;
    highPrice: number;
    lowPrice: number;
    prevPrice: number;
    explorer: string;
    priceChangePercent: number;
  };
}

function Crypto({ crypto }: Props): any {
  
  const colorclassName = crypto.prevPrice
    ? crypto.price > crypto.prevPrice
      ? "text-green-600 font-semibold"
      : "text-red-500 font-semibold"
    : "text-gray-900 font-semibold";
  return (
    <div className="max-w p-6 bg-white border border-gray-100 rounded-[35px] shadow-lg">
      <img
        className="w-10 h-10 mb-2 rounded-full"
        src={`https://s2.coinmarketcap.com/static/img/coins/128x128/${crypto.iconCode}.png`}
        alt="crypto img"
      />
      <h5 className="mb-1 text-2xl font-semibold tracking-tight text-gray-900">
        {crypto.name}
      </h5>
      {crypto.price ? (
        <>
          <div className="flex flex-wrap items-center">
            <span className={colorclassName} title={`${crypto.price}`}>
              {formatPrice(crypto.price)}
            </span>
            {crypto.price > crypto.prevPrice ? (
              <>
                {" "}
                <AiOutlineArrowUp className="text-green-600 ml-2" />
                <span className="text-green-600 ml-2" >(</span>  <span className="text-green-600 ml-2>">{crypto.priceChangePercent}%</span> <span className="text-green-600 ml-2>">)</span>
              </>
            ) : (
              <>
                <AiOutlineArrowDown className="text-red-500 ml-2" />
               <span className="text-red-500 ml-2" >(</span>  <span className="text-red-500 ml-2>">{crypto.priceChangePercent}%</span> <span className="text-red-500 ml-2>">)</span>
              </>
            )}
          </div>
          <div className="mt-5">
            <Status label="24h High" value={formatPrice(crypto.highPrice)} />
            <Status label="24h Low" value={formatPrice(crypto.lowPrice)} />
            <Status label="Market" value={crypto.symbol} />
          </div>
        </>
      ) : (
        <>
          <Loader />
        </>
      )}
      <a
        className="inline-flex items-center text-blue-300"
        href={crypto.explorer}
        target="blank"
        rel="noreferrer"
      >
        {" "}
        know more
        <svg
          className="w-5 h-5 ml-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
        </svg>
      </a>
    </div>
  );
}

export default Crypto
