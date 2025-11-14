import React, { useState, useEffect } from 'react';
import ProductForm from './ProductForm';
import ProductListAdmin from './ProductListAdmin';
import AdminSidebar from './AdminSideBar';
import Swal from 'sweetalert2';

function ProductPage() {
  const [showForm, setShowForm] = useState(false);
  const [showList, setShowList] = useState(true);
  const [products, setProducts] = useState([]);

  // Cargar todos los productos del administrador
  const loadProducts = () => {
    fetch('http://localhost:8080/productos/all')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error cargando productos:', err));
  };

  useEffect(() => {
    if (showList) loadProducts();
  }, [showList]);

  const handleDelete = (productId) => {
    Swal.fire({
      title: '¿Seguro que quieres eliminar este producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:8080/productos/delete/${productId}`, { method: 'DELETE' })
          .then((res) => {
            if (res.ok) {
              Swal.fire('Eliminado!', 'Producto eliminado correctamente.', 'success');
              loadProducts();
            } else {
              Swal.fire('Error', 'No se pudo eliminar el producto.', 'error');
            }
          })
          .catch(() => Swal.fire('Error', 'No se pudo eliminar el producto.', 'error'));
      }
    });
  };

  const handleEdit = (productId, formData) => {
    fetch(`http://localhost:8080/productos/update/${productId}`, {
      method: 'PUT',
      body: formData,
    })
      .then(res => {
        if (res.ok) {
          Swal.fire('¡Producto actualizado!', '', 'success');
          loadProducts();
        } else {
          Swal.fire('Error', 'No se pudo actualizar el producto.', 'error');
        }
      })
      .catch(() => Swal.fire('Error', 'No se pudo actualizar el producto.', 'error'));
  };

  const handleAddProduct = (formData) => {
  fetch('http://localhost:8080/productos/save', {
    method: 'POST',
    body: formData,
  })
    .then(res => {
      if (res.ok) {
        Swal.fire('¡Producto agregado!', '', 'success');
        loadProducts();
        setShowForm(false);
        setShowList(true);
      } else {
        res.text().then(text => {
          console.error('Error backend:', text);
          Swal.fire('Error', 'No se pudo agregar el producto.', 'error');
        });
      }
    })
    .catch(err => {
      console.error('Error fetch:', err);
      Swal.fire('Error', 'No se pudo agregar el producto.', 'error');
    });
};

  return (
  <div style={{ display: 'flex' }}>
    <AdminSidebar />

    <div style={{ flex: 1, padding: '40px' }}>

      <div className="d-flex justify-content-start gap-2 mb-4">
        <button className="btn btn-primary"
          onClick={() => { setShowForm(true); setShowList(false); }}>
          Nuevo Producto
        </button>

        <button
          className="btn btn-success"
          onClick={() => {
            setShowList(true);
            setShowForm(false);
          }}
        >
          Mis productos
        </button>
      </div>

      {showForm && <ProductForm onAdd={handleAddProduct} />}
      {showList && (
        <ProductListAdmin
          products={products}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )}

    </div>
  </div>
);

}

export default ProductPage;
