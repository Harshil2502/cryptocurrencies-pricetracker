import { useState, useEffect, useCallback } from "react";

import { getSymbols, findByValue } from ".";
import { CRYPTOCURRENCIES } from "../configs";
import { stringify } from "querystring";

const useTicker = () => {
  const [cryptocurrencies ,setcryptocurrencies] = useState(CRYPTOCURRENCIES)

  const fetchcrypto = useCallback(async ()=>{
    try {
      const response = await fetch (`https://api.binance.com/api/v3/ticker/24hr?symbols=${JSON.stringify(getSymbols())}`)

      const data = await response.json()
      

      setcryptocurrencies(cryptocurrencies.map((item)=>{
        const {lastPrice ,lowPrice , highPrice , priceChangePercent } = findByValue(data , item.symbol) || {}

        return{
          ...item,
          highPrice,
          lowPrice,
          price:lastPrice,
          priceChangePercent,
          prevPrice:item?.price||0,
        }
      }))
    } catch (error) {
      console.log(error)
    }
  },[cryptocurrencies])
  // console.log(cryptocurrencies)
  useEffect(()=>{
    const interval = setInterval( fetchcrypto ,1000)
    return ()=>clearInterval(interval)
  })

 return cryptocurrencies
};

export { useTicker };
