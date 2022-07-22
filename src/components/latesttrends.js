import React from 'react';
import { faker } from '@faker-js/faker';
import Cardsmall from './cardsmall';
export default function Latesttrends(props) {
    return (
        <div className='latesttrends'>
            <h4 id="trends">Latest Trends</h4>
            <div id="flexcol">
                {props.card.map((obj) =>
                    <Cardsmall key={obj.index} image={obj.img} product={obj.product} />
                )}
            </div>
            <h4 id="topb0">Popular Suggestions</h4>
            <div id="small">
                {props.card.map((obj) =>
                    <div key={obj.index}>{faker.commerce.productName()}</div>
                )}
            </div>
        </div>
    );
}