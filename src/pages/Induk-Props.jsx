import Props from "../componen/Props";
import Button from "../componen/Button";
import Daftar from "../componen/Daftar";
import Navbar from "../componen/Navbar";
import Layout from "../componen/Layout";
import React from "react";
import { useNavigate } from "react-router-dom";

const IndukProps = () => {
    const kamar = 77;
    const hotel = "Aston";
    const hari = "sabtu";

    return ( 
        <>
            <Props 
                kamar={kamar}
                hotel={hotel}
                hari={hari}
                booking={true} />
            <hr />
            <Props 
                kamar="145"
                hotel="Dialog"
                hari="rabu"
                booking={false} />
            <hr />
            <Props 
                kamar="12"
                hotel="Illira"
                hari="jumat"
                booking={true} />
            <hr />
            <Props 
                kamar="31"
                hotel="Santika"
                hari="senin"
                booking={false} />
            <hr />
        </>
    );
}

const IndukPropsLayout = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    }

    return (
        <Layout>
            <IndukProps />
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 mt-6 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
             onClick={handleClick}> 
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Home
                </span>
            </button>
        </Layout>
    );
}

export default IndukPropsLayout;
