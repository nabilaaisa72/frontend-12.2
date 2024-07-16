import Sidebar from "./Sidebar";

function Layout({children}) {
    return ( 
        <>
            <Sidebar>
                {children}
            </Sidebar>
        </>
     );
}

export default Layout;