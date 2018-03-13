//combineReducers Home
import { combineReducers } from 'redux';
import * as actionsType from '../constants/actionsType'
const initState = {
    showImg: false
};

const initState1 = {
    indexImg: true
};

export default combineReducers({
    showImg:(state = initState, action) => {
        switch (action.type) {
            case actionsType.INDEX_IMG :
                return action.data;
                break
            case actionsType.LOGIN_IMG_SHOW :
                return action.showImg;
                break
            default:
                return state.showImg;
        }
    },
})
