const input = document.getElementById('textoInput');
const button = document.getElementById('textoButton');
const listaContainer = document.querySelector('.lista-container');

function crearTarea() {
    const texto = input.value.trim();
    
    if (!texto) return;
    
    const tareaDiv = document.createElement('div');
    tareaDiv.className = 'tarea';
    

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    const span = document.createElement('span');
    span.textContent = texto;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => {
        tareaDiv.remove();
    });
    
    checkbox.addEventListener('change', () => {
        span.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    });
     
    tareaDiv.appendChild(checkbox);
    tareaDiv.appendChild(span);
    tareaDiv.appendChild(deleteBtn);

    listaContainer.appendChild(tareaDiv);
    
    input.value = '';
}

button.addEventListener('click', crearTarea);
