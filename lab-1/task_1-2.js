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

// Приклад використання:
const product1 = new Product("Кілограм яблук", 50);
product1.display(); // Виведе: Product: Кілограм яблук, Price: 50

product1.reducePrice(10);
product1.display(); // Виведе: Product: Кілограм яблук, Price: 40

product1.reducePrice(50); // Зменшуємо ціну ще на 50
product1.display(); // Виведе: Product: Кілограм яблук, Price: 0 (оскільки ціна стала негативною)
