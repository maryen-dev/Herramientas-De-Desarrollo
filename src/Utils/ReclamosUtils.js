export function cambiarEstado(reclamo, nuevoEstado) {
  const estadosValidos = ['EN_PROCESO', 'RESUELTO', 'CANCELADO'];
  
  if (!estadosValidos.includes(nuevoEstado)) {
    throw new Error('Estado no válido');
  }
  
  return { ...reclamo, claimstatus: nuevoEstado };
}