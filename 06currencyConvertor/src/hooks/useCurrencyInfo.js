import { useState, useEffect } from "react";


function useCurrencyInfo(currrency){
    const [data, setData] = useState({})
    useEffect(()=>{
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        fetch(url)
        .then((res)=> res.json())
        .then((res) => setData(res[currrency]))
        console.log(data);
    }, [currrency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;