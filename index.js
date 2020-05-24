import Vue from "vue";
import { omit } from "lodash";
import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  DELETE_VARIATION,
  LOAD_CART_FROM_STORAGE,
  CLEAR_CART,
  CART_ITEMS,
  CART_TOTAL,
  NUM_ITEMS,
} from "./constants.type";

function setCartStorage(items) {
  window.localStorage.setItem("cart", JSON.stringify(items));
}

const state = {
  items: {},
};

const actions = {
  [ADD_ITEM_TO_CART]({ commit }, { item, sku }) {
    commit(ADD_ITEM_TO_CART, { item, sku });
  },
  [REMOVE_ITEM_FROM_CART]({ commit }, item) {
    commit(REMOVE_ITEM_FROM_CART, item);
  },
  [DELETE_VARIATION]({ commit }, item) {
    commit(DELETE_VARIATION, item);
  },
  [LOAD_CART_FROM_STORAGE]({ commit }) {
    commit(LOAD_CART_FROM_STORAGE);
  },
  [CLEAR_CART]({ commit }) {
    commit(CLEAR_CART);
  },
};

const mutations = {
  [ADD_ITEM_TO_CART](state, { item, sku }) {
    if (state.items[sku] || !item) {
      Vue.set(state.items[sku], "quantity", state.items[sku].quantity + 1);
    } else {
      Vue.set(state.items, sku, {
        ...omit(item, ["variants"]),
        variant: item.variants[sku].name,
        price: item.variants[sku].price,
        quantity: 1,
      });
    }
    setCartStorage(state.items);
  },
  [REMOVE_ITEM_FROM_CART](state, sku) {
    if (state.items[sku]) {
      let finalQuantity = state.items[sku].quantity - 1;
      if (finalQuantity <= 0) {
        Vue.delete(state.items, sku);
      } else {
        Vue.set(state.items[sku], "quantity", finalQuantity);
      }
    }

    setCartStorage(state.items);
  },
  [DELETE_VARIATION](state, sku) {
    if (state.items[sku]) {
      Vue.delete(state.items, sku);
    }
    setCartStorage(state.items);
  },
  [LOAD_CART_FROM_STORAGE](state) {
    let storedItems = JSON.parse(window.localStorage.getItem("cart"));
    state.items = storedItems || {};
  },
  [CLEAR_CART](state) {
    Vue.set(state, "items", {});
    setCartStorage(state.items);
  },
};

const getters = {
  [CART_TOTAL](state) {
    let total = 0;
    Object.keys(state.items).forEach((item) => {
      total += state.items[item].price * state.items[item].quantity;
    });
    return total;
  },
  [NUM_ITEMS](state) {
    let total = 0;
    Object.keys(state.items).forEach((item) => {
      total += state.items[item].quantity;
    });
    return total;
  },
  [CART_ITEMS](state) {
    return state.items;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
