class Storage {
  items;

  constructor(items) {
    this.items = items;
  }

  getItems(obj) {
    return obj.items;
  }

  addItem(obj, newItem) {
    obj.items.push(newItem);
  }

  removeItem(obj, itemToRemove) {
    obj.items = obj.items.filter((item) => item !== itemToRemove);
  }
}

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],

  getBalance(obj) {
    return obj.balance;
  },

  getDiscount(obj) {
    return obj.discount;
  },

  setDiscount(obj, value) {
    obj.discount = value;
  },

  getOrders(obj) {
    return obj.orders;
  },

  addOrder(obj, cost, order) {
    obj.balance -= cost - cost * obj.discount;
    obj.orders.push(order);
  },
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
