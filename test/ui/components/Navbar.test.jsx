import { render, screen, fireEvent } from "@testing-library/react"
import { AuthContext } from "../../../src/auth/context"
import { Navbar } from '../../../src/ui/components/Navbar'
import { MemoryRouter, useNavigate } from "react-router-dom"

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe('Test <Navbar />', () => {

    const contextValue = {
        logged: true,
        user: {
            id: "123",
            name: 'Alan'
        },
        logout : jest.fn()
    }

    beforeEach( () => jest.clearAllMocks() )

    test('should show the name of logged user', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Alan')).toBeTruthy()

    })

    test('should call the logout and navigate when click on logout button', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutButton = screen.getByLabelText('logout')
        fireEvent.click( logoutButton )

        expect( contextValue.logout ).toHaveBeenCalled()
        expect( mockedUseNavigate ).toHaveBeenCalled()

    })
})
