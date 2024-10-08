import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const Header = () => {
    return (
        <header className="bg-slate-200 shadow-md" >
            <div className="flex justify-between items-center max-w-6xl mx-auto p-3">

                <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                    <span className="text-slate-600">REAL</span>
                    <span className="text-slate-800">NEST</span>
                </h1>

                <form className="bg-slate-100 p-3 rounded-lg flex items-center">
                    <input type="text" placeholder="Search..." className="bg-transparent w-24 sm:w-64" />
                    <FaSearch className="text-slate-600" />
                </form>

                <ul className="flex gap-4">

                    <Link to="/">
                        <li className=" text-slate-700 hover:underline">Home</li>
                    </Link>

                    <Link to="/about">
                        <li className=" text-slate-700 hover:underline">About</li>
                    </Link>

                    <Link to="/sign-in">
                        <li className="text-slate-700 hover:underline">Sign-In</li>
                    </Link>

                </ul>
            </div>
        </header>

    )
}
export default Header
