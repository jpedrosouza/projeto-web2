const button_add = document.getElementById('button-add-restaurant');
const table_content = document.getElementById('table-content');

var initial_count = 1;

button_add.addEventListener('click', () => {
    table_content.innerHTML += `                                
    <div id="restaurant-${initial_count}" class="table-item">
        <span id="restaurant-text-${initial_count}" class="table-item-title">Restaurante ${initial_count}</span>
        <div class="table-item-options">
            <span id="${initial_count}" class="material-icons edit-icon" onClick="getIdElementEdit(this)">edit</span>
            <span id="${initial_count}" id class="material-icons remove-icon" onClick="removeRestaurante(this)">remove</span>
        </div>
    </div>`;
    initial_count++;
});

function getIdElementEdit(element) {
    const elementId = element.id;
    const restaurant = document.getElementById(`restaurant-text-${elementId}`);

    var newName = prompt('Digite o novo nome do restaurante');

    if (newName != null) {
        restaurant.innerText = newName;
    }
}

function removeRestaurante(element) {
    const elementId = element.id;
    const restaurant = document.getElementById(`restaurant-${elementId}`);

    restaurant.remove();
}