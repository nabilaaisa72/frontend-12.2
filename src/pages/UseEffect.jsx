import { useState, useEffect } from "react";
import UpdateState from "../componen/UpdateState";
import Animasi from "../componen/Animasi";
import FetchApi from "../componen/FetchApi";

function UseEffect() {
    const [harga, setHarga] = useState(10000);
    const [qty, setQty] = useState(2);
    const [subTotal, setSubTotal] = useState(0);

    useEffect(() => {
        setSubTotal(harga * qty); // Rerendering effect
    }, [qty, harga]);

    return ( 
        <div className="container ml-8">
            <h1 className="text-3xl font-bold">Use Effect Reactivity</h1>
            <UpdateState /> 
            <hr className="border border-xl mb-8"/>

            <h1 className="text-3xl font-bold">Use Effect Animasi</h1>
            <Animasi /> 
            <hr className="border border-xl mb-8"/>

            <h1 className="text-3xl font-bold">Use Effect FetchApi</h1>
            <FetchApi /> 
            <hr className="border border-xl mb-8"/>
        </div>
    );
}

export default UseEffect;
