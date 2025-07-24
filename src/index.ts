class DataStore<T> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  getAll(): T[] {
    return this.data;
  }
}

const store = new DataStore<number>();
store.add(1);
store.add(2);

console.log(store.getAll()); // [1, 2]
