export const findSameProductInCartIndex = (cart, productId, attributes) => cart.findIndex(cartItem => {
    if (cartItem.id === productId) {
        for (let attributeIndex = 0; attributeIndex <= cartItem.attributes.length - 1; attributeIndex++) {
            if (attributes[attributeIndex].selected.value !== cartItem.attributes[attributeIndex].selected.value) {
                return false
            }
        }
        return true
    }
    return false
}) 