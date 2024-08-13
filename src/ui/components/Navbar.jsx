import { useContext } from "react"
import { Link, redirect, useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/context"

export const Navbar = () => {

    const navigate = useNavigate()
    const { user, logout } = useContext( AuthContext )

    const onLogout = () => {

        logout()

        navigate('/login', {
            replace: true
        })
    }

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link to={'marvel'}>Marvel</Link></li>
                            <li><Link to={'dc'}>DC</Link></li>
                            <li><Link to={'search'}>Search</Link></li>

                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-xl" to={'/'}>Heroes App</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={'marvel'}>Marvel</Link></li>
                        <li><Link to={'dc'}>DC</Link></li>
                        <li><Link to={'search'}>Search</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <span className="p-4">{ user?.name }</span>
                    <button aria-label="logout" onClick={ onLogout }> Log out </button>
                </div>

            </div>
        </>
    )
}

