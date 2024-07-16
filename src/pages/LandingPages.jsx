import Utama from "../componen/Utama";
import { Children } from "react";

function LandingPages({Children}) {
    return ( 
        <>
        <header className="Header fixed top-0 left-0 right-0 bg-blue-400 text-3xl">
            Header
        </header>
        <main className="mx-10 my-12">
           {CDATASectionhildren}
        </main>
        <footer className="fixed bottom-0 left-0 right-0 bg-slate-300 text-center">
            Footer
        </footer>
        </>
     );
}

export default LandingPages;