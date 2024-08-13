import { types } from "../../../src/auth/types/types"

describe('Test on types', () => {
    test('should return the types', () => {

        expect(types).toEqual(
            {
                login: '[Auth] Login',
                logout: '[Auth] Logout',
            }
        )

    })

})
