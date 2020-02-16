import UserData from '../../util/userData'

const initialState = {
    currentUser: UserData[0].customers[0].name
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;

