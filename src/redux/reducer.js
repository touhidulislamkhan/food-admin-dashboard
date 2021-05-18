

const initialState = {
    name: 'chicken',
    protein: 3,
    carbs: 2,
    fat: 1,
    calories: 134

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
            break;
    }
}

export default reducer;