import React from 'react';

const EditHero = (props) => (
    <div className='container__box'>
        Edit the Hero with title = {props.match.params.title}
    </div>
);

export default EditHero;
