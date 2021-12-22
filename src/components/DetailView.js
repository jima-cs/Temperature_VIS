import React, {useContext} from 'react';
import { Map, APILoader } from '@uiw/react-baidu-map';
import {DateStore} from "../store";
import Earth from "./Earth";

function DetailView() {
    const {DateState, DateDispatch} = useContext(DateStore);

    return <div style={{ width: '100%', height: '100%' }}>
        <APILoader akay="Yvjkj9EN8qfW4vDB6WoTfd01DYWWTzDW">
            {/*<Map />*/}
            <Earth store={DateState}/>
        </APILoader>
    </div>;
}

export default DetailView;
