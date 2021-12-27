import React, {useContext} from 'react';
import {DateStore} from "../store";
import Earth from "./Earth";

function DetailView() {
    const {DateState, DateDispatch} = useContext(DateStore);

    return <div style={{ width: '100%', height: '100%' }}>
            <Earth store={DateState}/>

    </div>;
}

export default DetailView;
