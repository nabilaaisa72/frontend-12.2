import React from "react";
import Layout from "../componen/Layout";

function NonState() {
    const bilangan1 = 10;
    const bilangan2 = 2;
    const hasil = bilangan1 + bilangan2; // Calculate the result

    return ( 
        <>
            <Layout>
                <p> Bilangan1 : 
                    <input type="text" className="border border-gray-600"
                    value={bilangan1}
                    readOnly
                    />
                </p>
                <p>Bilangan2 : 
                    <input type="text" className="border border-gray-600"
                    value={bilangan2}
                    readOnly
                    />
                </p>
                <p>Hasil: {hasil}</p>

                <button
                type="button"
                className="landing-button mx-3 text-white bg-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-not-allowed"
                disabled
                >
                Tambah
                </button>

                <button
                type="button"
                className="landing-button mx-3 text-white bg-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-not-allowed"
                disabled
                >
                Kurang
                </button>

                <button
                type="button"
                className="landing-button mx-3 text-white bg-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-not-allowed"
                disabled
                >
                Kali
                </button>
            </Layout>
        </>
    );
}

export default NonState;
