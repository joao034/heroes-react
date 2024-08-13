import { useRouteError, NavLink } from "react-router-dom"

export const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>

            <NavLink to={'/'} className="text-primary">Go to Home</NavLink>
        </div>
    )
}
