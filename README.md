# vuex-shopping-cart

A Vuex module used to manage items in a shopping cart. Items persist in local storage.

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

## Built With

* [lodash](https://lodash.com/) - A modern JavaScript utility library
* [Vue](https://vuejs.org//) - JavaScript framework

## Authors

* **Peyton Gardipee** - [GitHub](https://github.com/pwgardipee) - [LinkedIn](https://www.linkedin.com/in/peyton-gardipee/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

