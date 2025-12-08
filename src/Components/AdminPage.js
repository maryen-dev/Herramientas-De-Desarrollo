import React from 'react';
import { Card, Row, Col } from "react-bootstrap";
import { FaUsers, FaBoxOpen, FaCommentDots, FaEye, FaFacebookF, FaTwitter } from "react-icons/fa";
import AdminSidebar from './AdminSideBar'; 

export default function AdminPage() {
  const totales = {
    usuarios: 1200,
    productos: 640,
    reclamos: 50
  };

  return (
    <div style={{ display: 'flex' }}>
      <AdminSidebar />

      <main style={{ flex: 1, padding: '40px', background: "#f5f5f5" }}>
        <h1 style={{ fontWeight: "bold", color: "#333", marginBottom: "30px" }}>
          Analytics
        </h1>

        {/* Métricas */}
        <Row className="g-4 mb-4">
          <Col md={4}>
            <Card className="text-center shadow-sm" style={{ backgroundColor: "#4e73df", color: "#fff" }}>
              <Card.Body>
                <FaEye size={30} className="mb-2" />
                <Card.Title>VISITS</Card.Title>
                <Card.Text style={{ fontSize: "1.5rem", fontWeight: "bold" }}>5,000</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center shadow-sm" style={{ backgroundColor: "#4267B2", color: "#fff" }}>
              <Card.Body>
                <FaFacebookF size={30} className="mb-2" />
                <Card.Title>FOLLOWERS</Card.Title>
                <Card.Text style={{ fontSize: "1.5rem", fontWeight: "bold" }}>100k</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center shadow-sm" style={{ backgroundColor: "#1DA1F2", color: "#fff" }}>
              <Card.Body>
                <FaTwitter size={30} className="mb-2" />
                <Card.Title>FOLLOWERS</Card.Title>
                <Card.Text style={{ fontSize: "1.5rem", fontWeight: "bold" }}>50k</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Totales */}
        <Row className="g-4">
          <Col md={6}>
            <Card className="text-center shadow-sm">
              <Card.Body>
                <FaUsers size={50} className="mb-3" color="#4e73df" />
                <Card.Title>Total Usuarios</Card.Title>
                <Card.Text style={{ fontSize: "2rem", fontWeight: "bold" }}>
                  {totales.usuarios}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="text-center shadow-sm">
              <Card.Body>
                <FaBoxOpen size={50} className="mb-3" color="#1cc88a" />
                <Card.Title>Total Productos</Card.Title>
                <Card.Text style={{ fontSize: "2rem", fontWeight: "bold" }}>
                  {totales.productos}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12}>
            <Card className="text-center shadow-sm">
              <Card.Body>
                <FaCommentDots size={50} className="mb-3" color="#f6c23e" />
                <Card.Title>Total Reclamos</Card.Title>
                <Card.Text style={{ fontSize: "2rem", fontWeight: "bold" }}>
                  {totales.reclamos}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </main>
    </div>
  );
}
