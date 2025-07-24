"use strict";
class DataStore {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    getAll() {
        return this.data;
    }
}
const store = new DataStore();
store.add(1);
store.add(2);
console.log(store.getAll());
//# sourceMappingURL=index.js.map