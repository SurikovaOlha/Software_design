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


const money = new Money(10, 50);

money.display(); 

money.setDollars(15);
money.setCents(25);

money.display();

money.addMoney("5.75");
money.display();

money.subtractMoney("2.50");
money.display();