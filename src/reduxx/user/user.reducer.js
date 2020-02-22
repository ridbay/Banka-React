import UserData from '../../util/userData'

// const initialState = {
//     customers: UserData[0].customers,
//     currentAdmin: UserData[2].admins
// }
const initialState = {
    customers: []
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        case 'ADD_NEW_USER':
            return {
                ...state,
                addNewUser: state.customers.concat([action.payload])
            }
        default:
            return state;
    }
}

export default userReducer;

