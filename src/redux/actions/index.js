import * as actionsType from '../constants/actionsType'
import qs from 'qs'
import request from '../../utils/request'

export const loginAction = {
    //  页面内每个组件的action集合
    showHeader: function showHeader(){
        return {
            type: actionsType.LOGIN_IMG_SHOW,
            showImg: true
        }
    },
    indexImg: (url, args = {}) => {
        let body = qs.stringify(args);
        return async dispatch => {
            let response = await request(url);
            //response = response.code === 200 && Object.assign({}, response, {status: true});
            await dispatch({
                type: actionsType.INDEX_IMG,
                data: response
            });
            return response;
        }
    }
};
  