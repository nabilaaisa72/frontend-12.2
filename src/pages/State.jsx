import { useState } from "react";
import Layout from "../componen/Layout";

function State() {
    const [bilangan1, setBilangan1] = useState(5)
    const [bilangan2, setBilangan2] = useState(7)
    const [hasil, setHasil] = useState(0) //Deklarasi state

    const penambahan = () => {
        setHasil(parseInt(bilangan1) + parseInt(bilangan2))
        angka = angka + 1
    };

    const pengurangan = () => {
        setHasil(parseInt(bilangan1) - parseInt(bilangan2))
    };

    const pengkalian = () => {
        setHasil(parseInt(bilangan1) * parseInt(bilangan2))
    };

    return ( 
        <>
            <Layout>
                <p> Bilangan1 : 
                    <input type="text" className="border border-gray-600"
                    value={bilangan1}
                    onChange={(e) => setBilangan1(e.target.value)}/>
                </p>
                <p>Bilangan2 : 
                    <input type="text" className="border border-gray-600"
                    value={bilangan2}
                    onChange={(e) => setBilangan2(e.target.value)}/>
                </p>
                <p>Hasil : {hasil}</p>

                <button
                type="button"
                className="landing-button mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={penambahan}
                >
                Tambah
                </button>

                <button
                type="button"
                className="landing-button mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={pengurangan}
                >
                Kurang
                </button>

                <button
                type="button"
                className="landing-button mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={pengkalian}
                >
                Kali
                </button>

            </Layout>
        </>
     );
}

export default State;
