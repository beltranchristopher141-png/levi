import React, { useEffect, useState } from 'react';
import axios from 'axios';
function ListaVentas() {
const [ventas, setVentas] = useState([]);
useEffect(() => {
axios.get('http://localhost:3000/ventas')
.then(res => setVentas(res.data))
.catch(err => console.error('Error al obtener ventas:', err));
}, []);
return (
<div>
<h2>Ventas de la Cafetería</h2>
<table border="1">
<thead>
<tr>
<th>Estudiante</th>
<th>Producto</th>
<th>Cantidad</th>
<th>Precio</th>
<th>Total</th>
<th>Fecha</th>

</tr>
</thead>
<tbody>
{ventas.map(v => (
<tr key={v.id}>
<td>{v.estudiante}</td>
<td>{v.producto}</td>
<td>{v.cantidad}</td>
<td>${v.precio}</td>
<td>${v.total}</td>
<td>{v.fecha}</td>
</tr>
))}
</tbody>
</table>
</div>
);
}
export default ListaVentas;