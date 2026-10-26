const form = document.getElementById('form-contact');

const contactNameInput = document.getElementById('name-contact');
const contactTelInput = document.getElementById('tel-contact');
let rows = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addRow();
    updateTable();
    clearInput();
});

function addRow() {
    let row = '<tr>';
    row += '<td><img src="./assets/person.svg" alt="Contato"></td>';
    row += `<td>${contactNameInput.value}</td>`;
    row += `<td>${contactTelInput.value}</td>`;
    row += '</tr>';

    rows += row;
};

function updateTable() {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = rows;
}

function clearInput() {
    contactNameInput.value = '';
    contactTelInput.value = '';
};