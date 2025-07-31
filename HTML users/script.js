const API_URL = 'http://localhost:3000/usuarios';

document.addEventListener('DOMContentLoaded', () => {
  loadUsers();

  const form = document.getElementById('userForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userId = document.getElementById('userId').value;
    const user = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      role: document.getElementById('role').value,
      password: document.getElementById('password').value
    };

    if (userId) {
      await fetch(`${API_URL}/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      });
    } else {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      });
    }

    form.reset();
    loadUsers();
  });
});

async function loadUsers() {
  const res = await fetch(API_URL);
  const users = await res.json();
  const tbody = document.getElementById('userTable');
  tbody.innerHTML = '';

  users.forEach(user => {
    if (!user.id) {
      console.warn('Usuário sem ID:', user);
      return;
    }

    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.role}</td>
      <td></td>
    `;

    const actionsTd = tr.querySelector('td:last-child');

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Editar';
    editBtn.addEventListener('click', () => editUser(user.id));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Excluir';
    deleteBtn.addEventListener('click', () => deleteUser(user.id));

    actionsTd.appendChild(editBtn);
    actionsTd.appendChild(deleteBtn);

    tbody.appendChild(tr);
  });
}

async function editUser(id) {
  const res = await fetch(`${API_URL}/${id}`);
  const user = await res.json();

  document.getElementById('userId').value = user.id;
  document.getElementById('name').value = user.name;
  document.getElementById('email').value = user.email;
  document.getElementById('role').value = user.role;
}

async function deleteUser(id) {
  console.log('ID recebido para exclusão:', id);
  if (!id) {
    alert('ID inválido para exclusão.');
    return;
  }

  if (confirm('Tem certeza que deseja excluir este usuário?')) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    loadUsers();
  }
}