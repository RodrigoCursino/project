const SET_VALUE_IN_TOTAL = (state, payload) => {
    
    if(payload.operator) {
        if(state.total >= payload.value) {
            state.total =  (state.total - payload.value)
            payload.product.quantidade  = parseFloat(payload.product.quantidade) + payload.value
        }
    } else {
        if(payload.product.quantidade >= payload.value) {
            payload.product.quantidade = parseFloat(payload.product.quantidade) - payload.value
            state.total =  (state.total + payload.value)
        }
    }
    
    state.total = parseFloat(state.total.toFixed(2))
}

export default {
    SET_VALUE_IN_TOTAL
}