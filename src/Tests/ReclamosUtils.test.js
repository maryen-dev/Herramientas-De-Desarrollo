import { cambiarEstado } from '../Utils/ReclamosUtils';

describe('Función cambiarEstado', () => {
  const reclamo = {
    idcomplaints: 1,
    claimreason: "Demora en la entrega",
    detail: "El pedido llegó tarde",
    claimstatus: "PENDIENTE",
    userId: 1
  };

  test('cambia estado a EN_PROCESO', () => {
    const actualizado = cambiarEstado(reclamo, 'EN_PROCESO');
    expect(actualizado.claimstatus).toBe('EN_PROCESO');
  });

  test('cambia estado a RESUELTO', () => {
    const actualizado = cambiarEstado(reclamo, 'RESUELTO');
    expect(actualizado.claimstatus).toBe('RESUELTO');
  });

  test('cambia estado a CANCELADO', () => {
    const actualizado = cambiarEstado(reclamo, 'CANCELADO');
    expect(actualizado.claimstatus).toBe('CANCELADO');
  });

  test('no permite estado inválido', () => {
    expect(() => cambiarEstado(reclamo, 'PENDIENTE')).toThrow('Estado no válido');
  });

  test('no modifica otros campos del reclamo', () => {
    const actualizado = cambiarEstado(reclamo, 'RESUELTO');
    expect(actualizado.idcomplaints).toBe(reclamo.idcomplaints);
    expect(actualizado.detail).toBe(reclamo.detail);
  });
});
