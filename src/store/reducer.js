
// 不同请求的处理
const DateReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + 1
            };
        case 'setValue':
            return {
                ...state,
                year: action.year
            };
        case 'init': {
            let newData = [];
            // TODO: use action.payload to update newData
            console.log(action.payload);
            newData = action.payload;
            return {
                ...state,
                data: newData
            };
        }
        default:
            throw new Error();
    }
}

export default DateReducer;
