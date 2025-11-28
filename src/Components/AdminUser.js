import React, { useEffect, useState } from "react";
import { Modal, Button, Table, Form } from 'react-bootstrap';
import Swal from "sweetalert2";
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminSidebar from './AdminSideBar'; 
import '../Estilo/AdminReclamos.css'; 

const API_URL = "https://herramientasbackend.onrender.com/users";

const AdminUser = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null); 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    password: "",
    dni: ""
  });
  const [showModal, setShowModal] = useState(false);

  const fetchUsers = async () => {
    try {
      const res = await fetch(API_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'omit'
      });
      if (!res.ok) throw new Error("Error al cargar usuarios");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "No se pudieron cargar los usuarios", "error");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEdit = (user) => {
    setEditingUser(user.email);
    setFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      address: user.address,
      phone: user.phone,
      dni: user.dni,
      password: ""
    });
    setShowModal(true);
  };

  const handleAdd = () => {
    setEditingUser(null);
    setFormData({ firstName: '', lastName: '', email: '', address: '', phone: '', password: '', dni: '' });
    setShowModal(true);
  };

  const handleSave = async () => {
    if (formData.phone.length !== 9) {
      Swal.fire("Error", "El teléfono debe tener 9 dígitos", "error");
      return;
    }

    if (formData.dni.length !== 8) {
      Swal.fire("Error", "El DNI debe tener 8 dígitos", "error");
      return;
    }

    try {
      const method = editingUser ? 'PUT' : 'POST';
      const url = editingUser ? `${API_URL}/${editingUser}` : API_URL;

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'omit',
        body: JSON.stringify(formData)
      });

      if (!res.ok) throw new Error(editingUser ? 'Error al actualizar usuario' : 'Error al crear usuario');

      setEditingUser(null);
      setFormData({ firstName: '', lastName: '', email: '', address: '', phone: '', password: '', dni: '' });
      fetchUsers();
      setShowModal(false);

      Swal.fire(editingUser ? 'Actualizado!' : 'Creado!', 
                editingUser ? 'El usuario ha sido actualizado' : 'El usuario ha sido creado', 
                'success');
    } catch (error) {
      console.error(error);
      Swal.fire('Error', editingUser ? 'No se pudo actualizar el usuario' : 'No se pudo crear el usuario', 'error');
    }
  };

  const handleDelete = async (email) => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    });

    if (!result.isConfirmed) return;

    try {
      const res = await fetch(`${API_URL}/${email}`, { method: "DELETE", credentials: 'omit' });
      if (!res.ok) throw new Error("Error al eliminar usuario");

      fetchUsers();
      Swal.fire("Eliminado!", "El usuario ha sido eliminado", "success");
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "No se pudo eliminar el usuario", "error");
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <AdminSidebar /> 
      <div style={{ flex: 1, padding: '40px' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>Administración de Usuarios</h1>
          <Button variant="success" onClick={handleAdd}>Agregar Usuario</Button>
        </div>

        <Table striped bordered hover>
          <thead className="table-dark">
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Dirección</th>
              <th>Teléfono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.email}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
                <td>
                  <Button variant="primary" size="sm" className="me-2" onClick={() => handleEdit(user)}>
                    Editar
                  </Button>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(user.email)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{editingUser ? `Editar Usuario: ${editingUser}` : 'Agregar Usuario'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-2">
                <Form.Control type="text" name="firstName" placeholder="Nombre" value={formData.firstName} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control type="text" name="lastName" placeholder="Apellido" value={formData.lastName} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} disabled={!!editingUser} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control type="text" name="address" placeholder="Dirección" value={formData.address} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control type="text" name="phone" placeholder="Teléfono" value={formData.phone} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control type="text" name="dni" placeholder="DNI" value={formData.dni || ''} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control type="password" name="password" placeholder={editingUser ? "Nueva contraseña (opcional)" : "Contraseña"} value={formData.password} onChange={handleChange} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
            <Button variant="success" onClick={handleSave}>{editingUser ? 'Guardar' : 'Crear'}</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AdminUser;
