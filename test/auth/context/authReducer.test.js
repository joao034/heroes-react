import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types";

describe('Test authReducer', () => {

    const initialState = {
        logged: false,
        user: null
    }

    test('should return the default state', () => {

        const state = authReducer(initialState, {});
        expect(state).toBe(initialState)

    })

    test('should call the login and set up the user', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Joao',
                id: '123'
            }
        }

        const state = authReducer(initialState, action)

        //expect(logged).toBe(true)
        expect( state ).toEqual({
            logged: true,
            user: action.payload
        })

    })

    test('should call the logout and clear the user and set the logged on false', () => {

        const stateLogin = {
            logged: true,
            user: {
                id : '123',
                name: 'Joao'
            }
        }

        const action = { type: types.logout }

        const newState = authReducer(stateLogin, action)

        expect( newState ).toEqual( {
            logged: false,
            user : undefined
        })
    })



})
