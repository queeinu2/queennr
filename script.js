document.getElementById('transactionForm').addEventListener('submit', function(event) {
    const transactionName = document.getElementById('transactionName').value;
    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;

    if (!transactionName || !amount || !category) {
        event.preventDefault(); // Mencegah pengiriman formulir
        alert('Semua field harus diisi!');
    } else {
        // Tambahkan logika untuk menyimpan transaksi di sini
        const transactionList = document.getElementById('transactionList');
        const newRow = transactionList.insertRow();
        newRow.insertCell(0).textContent = transactionName;
        newRow.insertCell(1).textContent = amount;
        newRow.insertCell(2).textContent = category;
    }
});