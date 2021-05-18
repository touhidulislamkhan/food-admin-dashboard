

const initialState = {
    dishes: [
        {
            name: 'chicken',
            protein: 3,
            carbs: 2,
            fat: 1,
            calories: 134

        },
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_DISH':
            return {
                ...state,
                dishes: state.dishes.concat(action.payload),
            };
        case 'DELETE_DISH':
            return {
                ...state,
                dishes: state.dishes.filter(dish => dish.name !== action.payload.name),
            }
        default:
            return state;
    }
}

export default reducer;