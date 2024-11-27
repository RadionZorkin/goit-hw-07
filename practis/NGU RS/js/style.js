$(document).ready(function () {
  const reports = [];

  // Ініціалізуємо DataTable для таблиці
  const table = $("#reports-table").DataTable();

  // Додаємо подію при відправленні форми
  $("#compensation-form").on("submit", function (e) {
    e.preventDefault();

    // Зчитуємо дані з форми
    const name = $("#name").val();
    const surname = $("#surname").val();
    const middleName = $("#middleName").val();
    const amount = parseFloat($("#amount").val()).toFixed(2); // Форматуємо до 2 цифр після коми
    const taxRate = parseFloat($("#taxRate").val()).toFixed(2); // Ставка ПДФО
    const taxAmount = (amount * (taxRate / 100)).toFixed(2); // Розрахунок суми ПДФО
    const totalAmount = (parseFloat(amount) + parseFloat(taxAmount)).toFixed(2); // Загальна сума
    const date = $("#date").val();
    const referenceNumber = $("#referenceNumber").val();
    const orderNumber = $("#orderNumber").val();
    const orderDate = $("#orderDate").val();

    // Перевіряємо чи поля заповнені
    if (
      !name ||
      !surname ||
      !middleName ||
      isNaN(amount) ||
      isNaN(taxRate) ||
      !date ||
      !referenceNumber ||
      !orderNumber ||
      !orderDate
    ) {
      alert("Будь ласка, заповніть всі поля!");
      return;
    }

    const report = {
      name: name,
      surname: surname,
      middleName: middleName,
      amount: amount,
      taxRate: taxRate,
      taxAmount: taxAmount,
      totalAmount: totalAmount,
      date: date,
      referenceNumber: referenceNumber,
      orderNumber: orderNumber,
      orderDate: orderDate,
    };

    // Додаємо звіт у масив
    reports.push(report);

    // Додаємо дані у таблицю
    table.row
      .add([
        report.name,
        report.surname,
        report.middleName,
        report.amount,
        report.taxRate,
        report.taxAmount,
        report.totalAmount,
        report.date,
        report.referenceNumber,
        report.orderNumber,
        report.orderDate,
      ])
      .draw();

    // Очищуємо форму після відправки
    this.reset();
  });

  // Функція для експорту в Excel (.xlsx)
  $("#export-xlsx").on("click", function () {
    const wb = XLSX.utils.book_new(); // Створюємо нову книгу Excel
    const wsData = [
      [
        "Ім'я",
        "Прізвище",
        "По батькові",
        "Сума",
        "Ставка ПДФО (%)",
        "Сума ПДФО",
        "Загальна сума",
        "Дата",
        "Номер довідки",
        "Номер наказу",
        "Дата наказу",
      ],
    ]; // Заголовки

    // Додаємо всі звіти до масиву wsData
    reports.forEach(function (report) {
      wsData.push([
        report.name,
        report.surname,
        report.middleName,
        report.amount,
        report.taxRate,
        report.taxAmount,
        report.totalAmount,
        report.date,
        report.referenceNumber,
        report.orderNumber,
        report.orderDate,
      ]);
    });

    const ws = XLSX.utils.aoa_to_sheet(wsData); // Створюємо лист Excel з даних
    XLSX.utils.book_append_sheet(wb, ws, "Звіти"); // Додаємо лист до книги

    // Завантажуємо файл
    XLSX.writeFile(wb, "reports.xlsx");
  });
});
