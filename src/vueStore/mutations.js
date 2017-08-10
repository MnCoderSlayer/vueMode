
const UPDATE_ACCOUT = 'UPDATE_ACCOUT'//更新用户信息

const  CONTENT_CHANGE = 'CONTENT_CHANGE'
export default {
    [CONTENT_CHANGE](state,payload){
        state.contentCon = payload;
    }

}
