import { render, screen } from "@testing-library/react"
import { PublicRoute } from "../../src/router/PublicRoute"
import { AuthContext } from "../../src/auth/context"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('Test <PublicRoute/>', () => {

    test('should show children if not is autheticated', () => {

        const contextValue = { logged: false }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>)

        expect(screen.getByText('Ruta publica')).toBeTruthy()

    })

    test('should redirect if is authenticated', () => {
        const contextValue = {
            logged: true, 
            user: {
                id: '123',
                name: 'Joao'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>

                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Login Page</h1>
                            </PublicRoute>}>

                        </Route>
                        <Route path='marvel' element={<h1>Marvel Page</h1>} />
                    </Routes>

                </MemoryRouter>

            </AuthContext.Provider>)

            expect( screen.getByText('Marvel Page')).toBeTruthy()

    })


})
