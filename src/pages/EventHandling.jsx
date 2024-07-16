import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const EventHandling = () => {
    const [name, setName] = useState('');
    const [alamat, setAlamat] = useState('');
    const [selectedOption, setSelectedOption] = useState('S1 Teknik Informatika');
    const [gender, setGender] = useState('Pria');
    const [chkAkademik, setChkAkademik] = useState(false);
    const [chkNonAkademik, setChkNonAkademik] = useState(false);
    const [masukkan, setMasukkan] = useState('');

    const navigate = useNavigate();

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleAlamatChange = (event) => {
        setAlamat(event.target.value);
    };

    const handleMasukkanChange = (event) => {
        setMasukkan(event.target.value);
    };

    const handleClick = () => {
        alert('Data masuk!');
    };

    const handleHomeClick = () => {
        navigate('/home');
    };

    return (
        <div className="container mx-auto mt-4">
            <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 p-4">
                    <h3 className="text-2xl font-semibold">Form Pendaftaran</h3>
                    <hr className="my-2" />
                    
                    <div className="mt-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                            Nama :
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Masukkan nama Anda"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    
                    <div className="mt-4">
                        <label htmlFor="alamat" className="block text-gray-700 font-bold mb-2">
                            Alamat :
                        </label>
                        <input
                            type="text"
                            id="alamat"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Masukkan Alamat"
                            value={alamat}
                            onChange={handleAlamatChange}
                        />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="program-studi" className="block text-gray-700 font-bold mb-2">
                            Program Studi :
                        </label>
                        <select
                            id="program-studi"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={selectedOption}
                            onChange={handleOptionChange}
                        >
                            <option value="S1 Teknik Informatika">S1 Teknik Informatika</option>
                            <option value="S1 Sistem Informasi">S1 Sistem Informasi</option>
                            <option value="D3 Manajemen Informatika">D3 Manajemen Informatika</option>
                        </select>
                    </div>

                    <div className="mt-4">
                        <span className="block text-gray-700 font-bold mb-2">Gender :</span>
                        <div className="flex flex-row items-center">
                            <label className="inline-flex items-center mr-6">
                                <input
                                    type="radio"
                                    className="form-radio text-indigo-600"
                                    name="gender"
                                    value="Pria"
                                    checked={gender === 'Pria'}
                                    onChange={handleGenderChange}
                                />
                                <span className="ml-2">Pria</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    className="form-radio text-indigo-600"
                                    name="gender"
                                    value="Wanita"
                                    checked={gender === 'Wanita'}
                                    onChange={handleGenderChange}
                                />
                                <span className="ml-2">Wanita</span>
                            </label>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block text-gray-700 font-bold mt-4">Prestasi:</label>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="chkAkademik"
                                id="chkAkademik"
                                className="form-checkbox"
                                checked={chkAkademik}
                                onChange={(e) => setChkAkademik(e.target.checked)}
                            />
                            <label htmlFor="chkAkademik" className="ml-2">Prestasi Akademik</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="chkNonAkademik"
                                id="chkNonAkademik"
                                className="form-checkbox"
                                checked={chkNonAkademik}
                                onChange={(e) => setChkNonAkademik(e.target.checked)}
                            />
                            <label htmlFor="chkNonAkademik" className="ml-2">Prestasi Non Akademik</label>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="masukkan" className="block text-gray-700 font-bold mb-2">
                            Masukkan :
                        </label>
                        <input
                            type="text"
                            id="masukkan"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={masukkan}
                            onChange={handleMasukkanChange}
                        />
                    </div>
                    
                    <div className="mt-4 flex space-x-4">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleClick}
                        >
                            Klik Saya!
                        </button>

                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleHomeClick}
                        >
                            Home
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-6/12 p-4">
                    <h3 className="text-2xl font-semibold">Resume</h3>
                    <hr className="my-2" />
                    <h5 className="my-2">Nama : {name}</h5> 
                    <p className="my-2">Alamat : {alamat}</p>
                    <h5 className="my-2">Program Studi : {selectedOption}</h5> 
                    <h5 className="my-2">Gender : {gender}</h5> 
                    <h5 className="mb-2">Prestasi Akademik : {chkAkademik ? "Ada" : "-"}</h5>
                    <h5 className="mb-2">Prestasi Non Akademik : {chkNonAkademik ? "Ada" : "-"}</h5>
                    <h5 className="my-2">Masukkan : {masukkan}</h5> 
                </div>
            </div>
        </div>
    );
};

export default EventHandling;

