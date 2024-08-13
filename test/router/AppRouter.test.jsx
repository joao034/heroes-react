import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AppRouter } from '../../src/router/AppRouter'
import { AuthContext } from "../../src/auth/context"

describe('Test <AppRouter />', () => {

    test('should show the login if is the user is not authenticated', () => {

        const contextValue = { logged: false }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getAllByText('Login').length).toBe(2)

    })


    test('should show the marvel component if the user is authenticated', () => {
        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Joao'
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getAllByText('Login').length).toBe(2)
    })



})
