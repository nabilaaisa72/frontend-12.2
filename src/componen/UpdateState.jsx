import { useState, useEffect } from "react";

function UpdateState(){
    const [harga, setHarga] = useState(0)
    const [qty, setQty] = useState(0)
    const [subTotal, setSubTotal] = useState(0)

    useEffect(() => {
        setSubTotal(qty * harga) //rerendering effect
    }, [qty, harga]);

    return ( 
        <div className="container ml-8">
            <div className="mt-8">
                <label htmlFor="harga" className="block text-gray-700 font-bold mb-2">
                    Harga:
                </label>
                <input type="number" id="harga" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Masukkan harga"
                    value={harga}
                    onChange={(e) => {setHarga(parseFloat(e.target.value))}}
                />
            </div>
            <div className="mt-4">
                <label htmlFor="qty" className="block text-gray-700 font-bold mb-2">
                    Qty:
                </label>
                <input type="number" id="qty" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Masukkan jumlah qty"
                    value={qty}
                    onChange={(e) => {setQty(parseInt(e.target.value))}}
                />
            </div>
            <p className="text-gray-600 text-sm italic mt-2">Sub Total : {subTotal}</p>
        </div>
     );
}

export default UpdateState;
