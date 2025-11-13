import React from 'react';
import AdminSidebar from './AdminSideBar'; 

export default function AdminPage() {
  return (
    <div style={{ display: 'flex' }}>
      <AdminSidebar />
      <div style={{ flex: 1, padding: '40px' }}>
        <h1>Panel de Administración</h1>
      </div>
    </div>
  );
}
