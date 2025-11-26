import React, { useEffect, useState } from "react";
import AdminSidebar from "./AdminSideBar";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../Estilo/AdminVentas.css";

const MySwal = withReactContent(Swal);

export default function AdminVentas() {
    const [filtroPedido, setFiltroPedido] = useState("");
    const [pedidos, setPedidos] = useState([]);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const [filtroUsuario, setFiltroUsuario] = useState("");
    const [filtroEstado, setFiltroEstado] = useState("");

    const estados = ["PENDIENTE", "EN_PROCESO", "CANCELADO", "ENTREGADO"];

    useEffect(() => {
        Promise.all([
            fetch("/pedidos/all").then((res) => res.json()),
            fetch("/pedidoitems/all").then((res) => res.json()),
        ])
            .then(([pedidosData, itemsData]) => {
                setPedidos(pedidosData || []);
                setItems(itemsData || []);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error cargando ventas:", err);
                setLoading(false);
            });
    }, []);

    const pedidosFiltrados = pedidos.filter((p) => {
        const idPedido = p.orderId ? p.orderId.toString() : "";
        const idUsuario = p.userID ? p.userID.toString() : "";

        const coincidePedido =
            filtroPedido === "" || idPedido === filtroPedido;

        const coincideUsuario =
            filtroUsuario === "" || idUsuario === filtroUsuario;

        const coincideEstado =
            filtroEstado === "" || p.status === filtroEstado;

        return coincidePedido && coincideUsuario && coincideEstado;
    });

    const itemsFiltrados = items.filter((i) => {
        if (filtroPedido === "") return true;

        const idItemPedido = i.orderId ? i.orderId.toString() : "";
        return idItemPedido === filtroPedido;
    });

    /*** ACTUALIZAR ESTADO ***/
    const cambiarEstado = async (orderId, nuevoEstado) => {
        try {
            const res = await fetch(`/pedidos/${orderId}/estado?estado=${nuevoEstado}`, {
                method: "PUT",
            });

            if (!res.ok) throw new Error("Error actualizando estado");

            Swal.fire({
                icon: "success",
                title: "Estado actualizado",
                text: `Nuevo estado: ${nuevoEstado}`,
            });

            setPedidos((prev) =>
                prev.map((p) =>
                    p.orderId === orderId ? { ...p, status: nuevoEstado } : p
                )
            );
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: error.message,
            });
        }
    };

    const formatearFecha = (fecha) =>
        fecha ? fecha.replace("T", " ") : "";

    /*** MODAL ***/
    const abrirModalEstado = (pedido) => {
        const itemsPedido = items.filter((i) => i.orderId === pedido.orderId);

        let tablaItems = `
      <div class="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cant.</th>
              <th>Unit.</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            ${itemsPedido
                .map(
                    (it) => `
              <tr>
                <td>${it.productName}</td>
                <td style="text-align:center;">${it.quantity}</td>
                <td>S/ ${it.unitPrice}</td>
                <td>S/ ${it.total}</td>
              </tr>`
                )
                .join("")}
          </tbody>
        </table>
      </div>
    `;

        MySwal.fire({
            customClass: { popup: "swal-responsive" },
            title: `Pedido #${pedido.orderId}`,
            width: "90%",
            maxWidth: "600px",
            html: `
        <div style="text-align:left;">
          <p><strong>Usuario ID:</strong> ${pedido.userID}</p>
          <p><strong>Fecha:</strong> ${formatearFecha(pedido.date)}</p>
          <p><strong>Total:</strong> S/ ${pedido.total}</p>

          <h3 style="margin-top:15px;">Items del Pedido</h3>
          ${tablaItems}

          <label style="margin-top:20px;"><strong>Cambiar estado:</strong></label>
          <select id="nuevoEstado" class="swal2-select" style="margin-top:10px;">
            ${estados
                    .map(
                        (e) =>
                            `<option value="${e}" ${pedido.status === e ? "selected" : ""
                            }>${e}</option>`
                    )
                    .join("")}
          </select>
        </div>
      `,
            showCancelButton: true,
            confirmButtonText: "Guardar estado",
            cancelButtonText: "Cerrar",
            preConfirm: () => {
                const nuevoEstado = document.getElementById("nuevoEstado").value;
                return cambiarEstado(pedido.orderId, nuevoEstado);
            },
        });
    };

    return (
        <div style={{ display: "flex" }}>
            <AdminSidebar />

            <div style={{ flex: 1, padding: 40 }}>
                <h1>Ventas Registradas</h1>

                {/* FILTROS */}
                <div className="filtros-container">
                    <h3>Filtros</h3>

                    <div className="filtros-grid">
                        <input
                            type="number"
                            placeholder="Usuario ID"
                            value={filtroUsuario}
                            onChange={(e) => setFiltroUsuario(e.target.value)}
                        />

                        <input
                            type="number"
                            placeholder="ID Pedido"
                            value={filtroPedido}
                            onChange={(e) => setFiltroPedido(e.target.value)}
                        />

                        <select
                            value={filtroEstado}
                            onChange={(e) => setFiltroEstado(e.target.value)}
                        >
                            <option value="">Todos los estados</option>
                            {estados.map((e) => (
                                <option key={e} value={e}>
                                    {e}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        className="btn-limpiar"
                        onClick={() => {
                            setFiltroUsuario("");
                            setFiltroPedido("");
                            setFiltroEstado("");
                        }}
                    >
                        Limpiar filtros
                    </button>
                </div>

                {/* TABLA PEDIDOS */}
                {pedidosFiltrados.length === 0 ? (
                    <p>No hay pedidos encontrados.</p>
                ) : (
                    <table className="reclamos-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Usuario ID</th>
                                <th>Fecha</th>
                                <th>Total</th>
                                <th>Estado</th>
                            </tr>
                        </thead>

                        <tbody>
                            {pedidosFiltrados.map((p) => (
                                <tr key={p.orderId}>
                                    <td>{p.orderId}</td>
                                    <td>{p.userID}</td>
                                    <td>{formatearFecha(p.date)}</td>
                                    <td>S/ {p.total}</td>

                                    <td>
                                        <button className="btn-estado" onClick={() => abrirModalEstado(p)}>
                                            {p.status}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                {/* ITEMS */}
                <h2 style={{ marginTop: 40 }}>Items</h2>

                {itemsFiltrados.length === 0 ? (
                    <p>No hay items para este pedido.</p>
                ) : (
                    <table className="reclamos-table">
                        <thead>
                            <tr>
                                <th>ID Item</th>
                                <th>Pedido</th>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio Unitario</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemsFiltrados.map((i) => (
                                <tr key={i.itemId}>
                                    <td>{i.itemId}</td>
                                    <td>{i.orderId}</td>
                                    <td>{i.productName}</td>
                                    <td>{i.quantity}</td>
                                    <td>S/ {i.unitPrice}</td>
                                    <td>S/ {i.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
