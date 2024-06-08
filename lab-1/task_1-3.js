class Warehouse {
    constructor(name, unit, pricePerUnit, quantity, lastImportDate) {
        this.name = name;
        this.unit = unit;
        this.pricePerUnit = pricePerUnit;
        this.quantity = quantity;
        this.lastImportDate = lastImportDate;
    }

    getTotalValue() {
        return this.pricePerUnit * this.quantity;
    }

    display() {
        console.log(`
      Товар: ${this.name}
      Одиниця виміру: ${this.unit}
      Ціна одиниці: ${this.pricePerUnit}
      Кількість: ${this.quantity}
      Дата останнього завозу: ${this.lastImportDate.toLocaleDateString()}
      Загальна вартість: ${this.getTotalValue()}
    `);
    }
}

// Приклад використання:
const product1 = new Warehouse(
    "Яблука",
    "кг",
    50,
    2000,
    new Date(2024, 4, 13)
);

product1.display();