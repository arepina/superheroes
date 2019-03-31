export const filterTitle = (title = '') => ({
    type: 'FILTER_TITLE',
    title
});

export const filterGalaxy = (galaxy = '') => ({
    type: 'FILTER_GALAXY',
    galaxy
});

export const sortBy = (sortBy) => ({
    type: 'SORT_BY',
    sortBy
});

const filtersReducerDefaultState = {
    text: '',
    galaxy: '',
    sortBy: '',
};

export const clear = () => ({
    type: 'CLEAR',
    defaultFilter: filtersReducerDefaultState
});
