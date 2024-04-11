export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
  REMOVE_1_FROM_CART: "REMOVE_1_FROM_CART"
}

// update localStorage with state for cart
export const updateLocalStorage = state => {
  const nuevosObjetos = state.map(item => {
    const { descripcion, ...cart } = item;
    return cart;
  });

  window.localStorage.setItem('cart', JSON.stringify(nuevosObjetos));
}

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    const { id } = action.payload
    const productInCartIndex = state.findIndex(item => item.id === id)

    if (productInCartIndex >= 0) {    

      // ⚡ usando el spread operator y slice
      const newState = [
        ...state.slice(0, productInCartIndex),
        { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1, total: state[productInCartIndex].precio * ((state[productInCartIndex].quantity) + 1) },
        ...state.slice(productInCartIndex + 1)
      ]

      updateLocalStorage(newState)
      return newState
    }

    const newState = [
      ...state,
      {
        ...action.payload, // product
        quantity: 1
      }
    ]

    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const { id } = action.payload
    const newState = state.filter(item => item.id !== id)
    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    updateLocalStorage([])
    return []
  },
  [CART_ACTION_TYPES.REMOVE_1_FROM_CART]: (state, action) => {
    const { id } = action.payload
    const productInCartIndex = state.findIndex(item => item.id === id)

    if (state[productInCartIndex].quantity > 1) {    

      // ⚡ usando el spread operator y slice
      const newState = [
        ...state.slice(0, productInCartIndex),
        { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity - 1, total: state[productInCartIndex].precio * ((state[productInCartIndex].quantity) - 1)},
        ...state.slice(productInCartIndex + 1)
      ]

      updateLocalStorage(newState)
      return newState
    }

    const newState = state.filter(item => item.id !== id)
    updateLocalStorage(newState)
    return newState

  }
}

export const cartReducer = (state, action) => {
  const { type: actionType } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}