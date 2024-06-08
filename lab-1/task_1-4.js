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

class Reporting {
    constructor() {
        this.warehouseItems = [];
    }

    registerIncoming(name, unit, pricePerUnit, quantity, lastImportDate) {
        const newItem = new Warehouse(name, unit, pricePerUnit, quantity, lastImportDate);
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

// Приклад використання:
const reporting = new Reporting();

reporting.registerIncoming("Яблука", "кг", 50, 100, new Date(2023, 11, 10));

reporting.registerOutgoing("Яблука", 50);

reporting.getInventoryReport();
