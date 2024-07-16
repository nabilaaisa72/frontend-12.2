const Daftar = ({DaftarHotel, DaftarHotel2, children}) => {
    return ( 
        <>
        {children}
        <h2>DAFTAR NAMA HOTEL</h2>
        <ol>
            {DaftarHotel.map((name, index) =>(
                <li key={index}>
                    <p>{name}</p>
                </li>
            ))}
        </ol>
        <hr/>
        <h2>DAFTAR HOTEL</h2>
        <ol>
            {DaftarHotel2.map((number, index) =>(
                <li key={index}>
                    <p>{number}</p>
                </li>
            ))}
        </ol>
        </>
     );
}
 
export default Daftar;