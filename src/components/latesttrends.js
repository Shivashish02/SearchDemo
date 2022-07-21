import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { faker } from '@faker-js/faker';
import Cardsmall from './cardsmall';
export default function Latesttrends() {
    let arr = [0, 1, 2, 3, 4]
    return (
        <div className='latesttrends'>
            <h4 id="trends">Latest Trends</h4>
            <div id="flexcol">
            {arr.map((obj) =>
                <Cardsmall key={obj} />
            )}
            </div>
            <h4 id="topb0">Popular Suggestions</h4>
            <div id="small">
            {arr.map((obj) =>
                <div key={obj}>{faker.commerce.productName()}</div>
            )}
            </div>
        </div>
    );
}