import * as actionTypes from "./actions";

const initialState = {
    // isLoggedin: false,
    userDetails: []
};

const reducer = (state = initialState, action) => {
    if (action.type === 'GETUSERDATA') {
        return {
            userDetails: action.userDetails
        }
    } else if (action.type === 'SORTBYEMAIL') {
        let sortedEmail = state.userDetails.sort((a, b) => {
            return a.email.localeCompare(b.email);
        });
        return {
            userDetails: sortedEmail
        }
    } else if (action.type === "SORTBYNAME") {
        let sortedName = state.userDetails.sort((a, b) => {
            return a.first_name.localeCompare(b.first_name);
        });
        return {
            userDetails: sortedName
        }
    }

    return state;

    // switch (action.type) {

    //     case actionTypes.GETUSERDATA: {
    //         console.log(" get user data ");
    // return {
    //     userDetails: {
    //         id: 1,
    //         email: "george.bluth@reqres.in",
    //         first_name: "George",
    //         last_name: "Bluth",
    //         avatar: "https://reqres.in/img/faces/1-image.jpg"
    //     }
    // }
    //         break;
    //     }

    //     case actionTypes.LOGIN: {
    //         break;
    //     }

    //     case actionTypes.LOGOUT: {
    //         break;
    //     }

    //     case actionTypes.UPDATEUSERDATA: {
    //         break;
    //     }

    //     case actionTypes.DELETEUSERDATA: {
    //         break;
    //     }

    //     default:
    //         return state;
    // }

    // return state;

}

export default reducer;