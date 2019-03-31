import uuid from 'uuid';

export const addHero = ({
    title = '',
    galaxy = '',
    img = ''
} = {}) => ({
    type: 'ADD_HERO',
    book: {
        id: uuid(),
        title,
        galaxy,
        img
    }
});

export const removeHero = ({ id } = {}) => ({
    type: 'REMOVE_HERO',
    id
});
