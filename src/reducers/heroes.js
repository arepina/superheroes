const booksReducerDefaultState = [];

export default (state = booksReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_HERO':
            return [
                ...state,
                action.hero
            ];
        case 'REMOVE_HERO':
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
};
