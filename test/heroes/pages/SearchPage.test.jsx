import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../src/heroes/pages/SearchPage"

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe('Test SearchPage', () => {
    
    beforeEach( () => jest.clearAllMocks() )

    test('should show correctly with the default values', () => {
      
        const { container } = render( 
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        )

        expect( container ).toMatchSnapshot()

    })

    test('should show the query string value on the input box', () => {
      
        render( 
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox')
        expect( input.value ).toBe('batman')

        const img = screen.getByRole('img') 
        expect( img.src ).toContain('/heroes/dc-batman.jpg')

        const alert = screen.getByLabelText('alert-danger')
        expect( alert.style.display ).toBe('none')

    })

    test('should show an error if the hero was not found', () => {
        render( 
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        )

        const alert = screen.getByLabelText('alert-danger')
        expect( alert.style.display ).toBe('')
    })

    test('should call the navigate to the new screen', () => {
      
        render( 
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox')
        fireEvent.change( input, { target: { name: 'searchHero' , value: 'superman '}})

        const form = screen.getByRole('form')
        fireEvent.submit( form )

        expect( mockedUseNavigate ).toHaveBeenCalledWith('?q=superman')
    })
    
    
    
    

})
