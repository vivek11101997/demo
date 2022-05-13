import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    step: 1,
    ShipInfo: {},
    PaymentInfo: {},
    Final: {},
};

const info_slice = createSlice({
    name: "info",
    initialState: initialState,
    reducers: {
        // SAVE_USER: (state, action) => {

        //     let newUser = Object.assign({}, action.payload);  // creating copy of state variable jasper
        //     console.log(newUser);                  // update the name property, assign a new value                 
        //     return { ...state, user: newUser };
        // },

        STEPUP: (state, action) => {
            return { ...state, step: state.step + 1 };
        },

        STEPDOWN: (state, action) => {
            return { ...state, step: state.step - 1 };
        }

        // REMOVE_USER: (state, action) => {

        //     let newUser = Object.assign({});  // creating copy of state variable jasper
        //     console.log(newUser);                  // update the name property, assign a new value                 
        //     return { ...state, user: newUser };
        // },

        // SET_DELIVERY_LOCATION: (state, action) => {
        //     return { ...state, location: action.payload }
        // },

        // SET_USER_GEO_COORDS: (state, action) => {
        //     return { ...state, coords: action.payload }
        // }
    },
});

export const { STEPDOWN, STEPUP } = info_slice.actions;
export default info_slice.reducer;
