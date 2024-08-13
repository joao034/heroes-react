import { render, screen } from "@testing-library/react"
import { PrivateRoute } from "../../src/router/PrivateRoute"
import { AuthContext } from "../../src/auth/context"
import { MemoryRouter } from "react-router-dom"

describe('Test PrivateRoute', () => {

    test('should show children if is autheticated in the last path', () => {

        Storage.prototype.setItem = jest.fn()

        const contextValue = {
            logged: true,
            user: {
                id: 123,
                name: 'Joao'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>


            </AuthContext.Provider>)

        expect(screen.getByText('Ruta privada')).toBeTruthy()
        expect( localStorage.setItem ).toHaveBeenCalledWith( 'lastPath', '/marvel')

    })


})
