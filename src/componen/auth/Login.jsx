import { Link, useNavigate } from "react-router-dom";
import auth from "../../api/auth";
import Cookies from "js-cookie";
import { useState  } from "react";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault();
        if(!username || !password) {
            alert('isian tidak boleh kosong')
        }
        else{
            const user = {username, password};
            try{
                const response = await auth.login(user);
                console.log(response.data)
                console.log(document.cookie)
                if(response.data === "Login Sukses"){
                    const cookies = document.cookie
                    Cookies.set('userCookie', cookies, {sameSite: 'none', secure: true})
                    navigate('/get')
                }
                else{
                    alert('login gagal')
                }
            } catch (error){
                console.error(error)
            }
        }
    }
    return(
        <>
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2x1 font-semibold text-gray-900 dark:text-white">
                LOGIN
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:textwhite">LOGIN</h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Username :
                                </label>
                                <input type="text" name="email" id="email" value={username}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-500" placeholder="username" required onChange={(e) =>{setUsername(e.target.value)}} />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Password :
                                </label>
                                <input type="password" name="password" id="password" value={password}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-500" placeholder="password" onChange={(e) =>{setPassword(e.target.value)}} />
                            </div>
                            <button type="submit" className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                            dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                Sign In
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">Belum punya akun ya? <Link to="/register"
                             className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Login;