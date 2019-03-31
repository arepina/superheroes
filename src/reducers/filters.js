const filtersReducerDefaultState = {
    title: '',
    galaxy: '',
    sortBy: ''
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'FILTER_TITLE':
            return {
                ...state,
                title: action.title
            };
        case 'FILTER_GALAXY':
            return {
                ...state,
                galaxy: action.galaxy
            };
        case 'SORT_BY':
            return {
                ...state,
                sortBy: action.sortBy
            };
        default:
            return state;
    }
}
