function Props(Props) {
    const {kamar, hotel, hari, booking} = Props;
    return ( 
        <>
        {booking ?
        <div>
            <h2>Nomor kamar : {kamar}</h2>
            <p>hotel : {hotel}</p>
            <p>hari : {hari}</p>
        </div>:
        <p>Anda tidak bisa menginap</p>
        }
        </>
     );
}

export default Props;