export class MenuCategoryModel {
  constructor({ id, name }) {
    this.id = id;
    this.name = name;
  }
}

export class MenuGroupModel {
  constructor({ id, name, category }) {
    this.id = id;
    this.name = name;
    this.category = category;
  }
}

export class MenuItemModel {
  constructor({ id, name, group, price, accompaniment }) {
    this.id = id;
    this.name = name;
    this.group = group;
    this.price = price;
    this.accompaniment = accompaniment;
  }
}

export class OrderModel {
  constructor({ id, orderedBy, orderedAt, status, balance, items }) {
    this.id = id;
    this.orderedBy = orderedBy;
    this.orderedAt = orderedAt;
    this.status = status;
    this.balance = balance;
    this.items = items;
  }
}

export class OrderItemModel {
  constructor({
    itemName,
    itemId,
    quantity,
    unitPrice,
    accompanimentName,
    accompanimentId,
  }) {
    this.itemName = itemName;
    this.itemId = itemId;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.accompanimentName = accompanimentName;
    this.accompanimentId = accompanimentId;
  }
}
