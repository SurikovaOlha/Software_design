class Money {
    constructor(dollars = 0, cents = 0) {
        this.dollars = dollars;
        this.cents = cents;
    }

    setDollars(dollars) {
        this.dollars = dollars;
    }

    getDollars() {
        return this.dollars;
    }

    setCents(cents) {
        this.cents = cents;
    }

    getCents() {
        return this.cents;
    }

    display() {
        console.log(`${this.dollars}.${this.cents.toString().padStart(2, '0')}`);
    }

    addMoney(moneyString) {
        const [newDollars, newCents] = moneyString.split('.').map(Number);
        this.dollars += newDollars;
        this.cents += newCents;
        if (this.cents >= 100) {
            this.dollars += Math.floor(this.cents / 100);
            this.cents %= 100;
        }
    }

    subtractMoney(moneyString) {
        const [newDollars, newCents] = moneyString.split('.').map(Number);
        this.dollars -= newDollars;
        this.cents -= newCents;
        if (this.cents < 0) {
            this.dollars -= 1;
            this.cents += 100;
        }
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    reducePrice(amount) {
        this.price -= amount;
        if (this.price < 0) {
            this.price = 0; // Якщо ціна стає негативною, встановлюємо її в 0
        }
    }

    display() {
        console.log(`Product: ${this.name}, Price: ${this.price}`);
    }
}

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

class Warehouse1 {
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

class Reporting {
    constructor() {
        this.warehouseItems = [];
    }

    registerIncoming(name, unit, pricePerUnit, quantity, lastImportDate) {
        const newItem = new Warehouse1(name, unit, pricePerUnit, quantity, lastImportDate);
        this.warehouseItems.push(newItem);
        console.log("Прибуткова накладна сформована");
    }

    registerOutgoing(name, quantity) {
        const itemIndex = this.warehouseItems.findIndex((item) => item.name === name);
        if (itemIndex !== -1) {
            const item = this.warehouseItems[itemIndex];
            if (item.quantity >= quantity) {
                item.quantity -= quantity;
                console.log("Видаткова накладна сформована");
            } else {
                console.log(`Недостатньо товару: ${name} на складі.`);
            }
        } else {
            console.log(`Товар ${name} відсутній на складі.`);
        }
    }

    getInventoryReport() {
        console.log("Звіт по інвентаризації:");
        this.warehouseItems.forEach((item) => {
            item.display();
        });
    }
}

const money = new Money(10, 50);
console.log("Тестування класу Money:");
console.log(`Початкова сума: ${money.dollars}.${money.cents}`);
money.addMoney("5.75");
console.log(`Після додавання 5.75: ${money.dollars}.${money.cents}`);
money.subtractMoney("2.50");
console.log(`Після віднімання 2.50: ${money.dollars}.${money.cents}`);

// Тестування класу Product
const product1 = new Product("Яблука", 50);
console.log("\nТестування класу Product:");
product1.display();
product1.reducePrice(10);
product1.display();

// Тестування класу Warehouse
const warehouse = new Warehouse(
    "Яблука",
    "кг",
    50,
    100,
    new Date(2023, 11, 10)
);
console.log("\nТестування класу Warehouse:");
warehouse.display();

// Тестування класу Reporting
const reporting = new Reporting();
console.log("\nТестування класу Reporting:");
reporting.registerIncoming("Яблука", "кг", 50, 100, new Date(2023, 11, 10));
reporting.registerOutgoing("Яблука", 50);
reporting.getInventoryReport();