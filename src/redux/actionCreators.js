export const addDish = (dish) => {
    const calories = (dish.protein * 4) + (dish.carbs * 4) + (dish.fat * 9);
    return {
        type: 'ADD_DISH',
        payload: {
            ...dish,
            calories: calories,
        },
    }
}

export const deleteDish = (dish) => {
    return {
        type: 'DELETE_DISH',
        payload: dish
    }
}