# Software_design

### Lab-1

Принципи програмування

**1. DRY**

Приклади

> Логіка розрахунку загальної вартості товару [getTotalValue()](https://github.com/SurikovaOlha/Software_design/blob/79f87e43df5c1f02028a962a94849c32752c47e4/lab-1/main.js#L100) знаходиться в класі [Warehouse](https://github.com/SurikovaOlha/Software_design/blob/79f87e43df5c1f02028a962a94849c32752c47e4/lab-1/main.js#L91) і використовується лише там.
Логіка обробки надходження та відвантаження товарів (в класі [Reporting](https://github.com/SurikovaOlha/Software_design/blob/79f87e43df5c1f02028a962a94849c32752c47e4/lab-1/main.js#L116)) використовує одні й ті ж методи для різних типів товарів.

**2. KISS** 

Код простий та зрозумілий. Класи мають чітко визначені завдання та невелику кількість методів. Логіка методів проста та зрозуміла.

**3. SOLID**
- _Single_ _Responsibility_ _Principle_
    
    Демонстрація

    > [Product](https://github.com/SurikovaOlha/Software_design/blob/fb9868f282e9031a4b21447daca05413c86c7c69/lab-1/task_1-2.js#L1) - відповідає за представлення товару.

    > [Warehouse](https://github.com/SurikovaOlha/Software_design/blob/fb9868f282e9031a4b21447daca05413c86c7c69/lab-1/task_1-3.js#L1) - відповідає за зберігання інформації про товари на складі.

    > [Reporting](https://github.com/SurikovaOlha/Software_design/blob/fb9868f282e9031a4b21447daca05413c86c7c69/lab-1/task_1-4.js#L26) - відповідає за формування звітів

- _Open/Closed_ _Principle_

  Демонстрація

  > [Reporting](https://github.com/SurikovaOlha/Software_design/blob/fb9868f282e9031a4b21447daca05413c86c7c69/lab-1/task_1-4.js#L26) - може працювати з різними типами товарів, представлених класів `Warehouse`. Можна додати новий тип товару без зміни коду `Reporting`.

- _Liskov_ _Substitution_ _Principle_

  Дотримання

  > У даному коді немає успадкування, тому прикладу наведеного в даному коді не буде.

- _Interface_ _Segregation_ _Principle_

  Демонстрація

  > [Reporting](https://github.com/SurikovaOlha/Software_design/blob/fb9868f282e9031a4b21447daca05413c86c7c69/lab-1/task_1-4.js#L26) - має методи для реєстрації надходження та відвантаження товарів, а також для виведення звіту, але не має методів для зміни цін або додавання нових товарів.

- _Dependency_ _Inversion_ _Principle_

  Демонстрація

  > [Reporting](https://github.com/SurikovaOlha/Software_design/blob/fb9868f282e9031a4b21447daca05413c86c7c69/lab-1/task_1-4.js#L26) - взаємодіє з `Warehouse`, не знаючи деталей його реалізації; клас `Reporting` не залежить від конкретної реалізації `Warehouse`, а працює з ним через інтерфейс.

**4. YAGNI**

Код не містить надмірних функцій, містить лише необхідні методи для реалізації завдання.

**5. Composition Over Inheritance**

  Демонстрація
  
  > [Reporting](https://github.com/SurikovaOlha/Software_design/blob/fb9868f282e9031a4b21447daca05413c86c7c69/lab-1/task_1-4.js#L26) - не успадковує від `Warehouse`, а використовує його як об'єкт, тобто композицію.


**6. Program to Interfaces not Implementations**

Демонстрація

> [Reporting](https://github.com/SurikovaOlha/Software_design/blob/79f87e43df5c1f02028a962a94849c32752c47e4/lab-1/main.js#L116) - може працювати із різними типами товарів, які успадковують від `Warehouse`, або просто мають відповідні поля.

**7. Fail Fast**

Демонстрація

> У методі [registerOutgoing](https://github.com/SurikovaOlha/Software_design/blob/fb9868f282e9031a4b21447daca05413c86c7c69/lab-1/main.js#L127) перевірка на наявність достатньої кількості товару.
