 // URL fail JSON dari GitHub
    const jsonUrl = 'https://Evun85.github.io/js/memedata.json';

    // Fungsi untuk memuatkan data dari JSON
    async function loadTableData() {
        try {
            // Muat turun JSON dari URL
            const response = await fetch(jsonUrl);
            const jsonData = await response.json();

            // Dapatkan rujukan kepada tbody table
            const tableBody = document.querySelector('.table-presale tbody');

            // Kosongkan isi tbody sedia ada
            tableBody.innerHTML = '';

            // Masukkan data ke dalam table
            jsonData.forEach((item, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${index + 1}. ${item.projectName}</td>
                    <td>${item.tokenSymbol}</td>
                    <td>${item.availability}</td>
                    <td class="rating">★ ${item.rating}</td>
                    <td><a class="visit-btn" href="${item.website}" target="_blank">Visit</a></td>
                `;
                tableBody.appendChild(row);
            });
        } catch (error) {
            console.error('Error loading JSON data:', error);
        }
    }

    // Panggil fungsi untuk memuatkan data apabila halaman siap
    document.addEventListener('DOMContentLoaded', loadTableData);
