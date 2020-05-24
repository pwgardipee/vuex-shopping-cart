# vuex-shopping-cart

A lightweight, persistent, local shopping cart that is used as a Vuex module.

## Installing

```
npm install vuex-shopping-cart
```

## Adding to Your Project

`vuex-shopping-cart` is a Vuex module, so adding it to your project is as simple as including the package as a module in your Vuex store. The `index.js` for your Vuex store should look something like this:

```
import Vue from "vue";
import Vuex from "vuex";
import cart from "vuex-shopping-cart";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { cart },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
});

```
## Data Schemas
### Cart Item
A cart item must contain a `variants` object, which contains objects that describe a variation of a product. Each variant is a object whose `key` is the variant unique identifier(maybe a sku?). The `value` is an object with `name` and `price` objects. 
```
{
  ...<Your Custom Attributes>...,
  variants: {
    <variant_1_id>: {
      name: <variant_1_name>,
      price: <variant_1_price>
    },
    ...<More variants>...
  }
}
```

## Usage
* Import the Vuex store action constants(Only import the ones you need)
```
import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  DELETE_VARIATION,
  LOAD_CART_FROM_STORAGE,
  CLEAR_CART,
  CART_ITEMS,
  CART_TOTAL,
  NUM_ITEMS,
} from "vuex-shopping-cart/constants.type";
```
* Add an item to the cart
```
this.$store.dispatch(ADD_ITEM_TO_CART, {
  item: <Insert Your Item(Follow schema above)>,
  sku: <Unique ID for the product>,
});
```

* Remove an item from the cart
```
this.$store.dispatch(REMOVE_ITEM_FROM_CART, <Insert Unique ID for the product>);
```

* Delete all items of a particular variant ID
```
this.$store.dispatch(DELETE_VARIATION, <Insert Unique ID for the product>);
```

* Clear the entire cart
```
this.$store.dispatch(CLEAR_CART);
```

* Load the items from local storage
```
store.dispatch(LOAD_CART_FROM_STORAGE);
```
This is commonly dispatched every time that your vue application mounts. For example, in the `mounted` in your `app.vue` or in a `router.beforeEach()`.

## Built With

* [lodash](https://lodash.com/) - A modern JavaScript utility library
* [Vue](https://vuejs.org//) - JavaScript framework

## Authors

* **Peyton Gardipee** - [GitHub](https://github.com/pwgardipee) - [LinkedIn](https://www.linkedin.com/in/peyton-gardipee/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

