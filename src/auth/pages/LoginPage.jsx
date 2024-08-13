import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context"
import { useForm } from "../../hooks/useForm"

export const LoginPage = () => {

  const navigate = useNavigate()
  const { login } = useContext(AuthContext)
  const { userName,  onInputChange } = useForm({ userName: ''});

  const lastPath = localStorage.getItem('lastPath')

  const onLogin = (event) => {
    event.preventDefault();

    if (userName.trim().length <= 1) return;

    login(userName)

    navigate(lastPath, {
      replace: true
    })
  }

  return (
    <>
      <h1 className="text-gray-600 p-3"><b>Login</b></h1>
      <hr />

      <form className="flex justify-center items-center h-screen" onSubmit={onLogin}>

        <input
            type="text"
            className="input input-bordered text-accent-content w-full max-w-xs"
            name='userName'
            onChange={onInputChange}
            value={userName}
            placeholder="Type a user name" />

        <button className="btn btn-primary">Log in</button>
      </form >

    </>
  )
}
