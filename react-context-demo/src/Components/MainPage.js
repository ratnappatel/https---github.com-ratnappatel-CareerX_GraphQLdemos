import React from 'react';
import mProvider from './MainContext';
import ListComponent from './ListComponent';

const DataContainer = props =>{
    const products =[
        {id:1 , Title:'Title - 1 ',Rating: 3},
        {id:2 , Title:'Title - 2 ',Rating: 4},
        {id:3 , Title:'Title - 3 ',Rating: 3},
        {id:4 , Title:'Title - 4 ',Rating: 2}
    ]
    return (
        <div>
            <mProvider value={products}>
                <ListComponent></ListComponent>
            </mProvider>
        </div>
    )
}
export default  DataContainer;