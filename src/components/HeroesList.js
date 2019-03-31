import React from 'react';
import { connect } from 'react-redux';
import Hero from './Hero';
import getVisibleHeroes from '../selectors/heroes';

const HeroesList = (props) => (
    <div>
        Heroes List:
        <ul>
            {props.books.map(hero => {
                return (
                    <li key={hero.title}>
                        <Hero {...hero} />
                    </li>
                );
            })}
        </ul>
    </div>
);

const mapStateToProps = (state) => {
    return {
        heroes: getVisibleHeroes(state.heroes, state.filters)
    };
}

export default connect(mapStateToProps)(HeroesList);
