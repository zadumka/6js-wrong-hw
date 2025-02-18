const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],

  getBalance() {
    return customer.balance;
  },

  getDiscount() {
    return customer.discount;
  },

  setDiscount(value) {
    customer.discount = value;
  },

  getOrders() {
    return customer.orders;
  },

  addOrder(cost, order) {
    customer.balance -= cost - cost * customer.discount;
    customer.orders.push(order);
  },
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
