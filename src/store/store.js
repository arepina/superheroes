import { createStore, combineReducers } from "redux";
import heroesReducer from '../reducers/heroes';
import filtersReducer from '../reducers/filters';

const demoState = {
    heroes: [
        {

        }
    ],
    filters: {
        title: '',
        galaxy: '',
        sortBy: ''
    }
};

export default () => {
    return createStore(
        combineReducers({
            heroes: heroesReducer,
            filters: filtersReducer
        }
    ));
};
