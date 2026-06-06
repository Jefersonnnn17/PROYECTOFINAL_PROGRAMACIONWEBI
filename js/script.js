// Arreglo para almacenar los productos agregados de forma temporal
let productosCanasta = [];

// Elementos del DOM
const btnAgregar = document.getElementById('btn-agregar');
const formPresupuesto = document.getElementById('form-presupuesto');
const listaCanasta = document.getElementById('lista-canasta');
const contenedorResultados = document.getElementById('contenedor-resultados');
const resumenCalculos = document.getElementById('resumen-calculos');
const btnLimpiar = document.getElementById('btn-limpiar');

// Evento 1: Agregar producto temporalmente a la lista visible
btnAgregar.addEventListener('click', () => {
    const nombre = document.getElementById('producto-nombre').value.trim();
    const precio = parseFloat(document.getElementById('producto-precio').value);
    const cantidad = parseInt(document.getElementById('producto-cantidad').value);

    // Validaciones básicas de campos vacíos o incorrectos
    if (!nombre || isNaN(precio) || isNaN(cantidad) || precio <= 0 || cantidad <= 0) {
        alert('Por favor, ingresa datos válidos para el producto.');
        return;
    }

    // Guardar en el array
    const subtotal = precio * cantidad;
    productosCanasta.push({ nombre, precio, cantidad, subtotal });

    // Actualizar la tabla en el HTML
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${precio.toFixed(2)} Bs</td>
        <td>${cantidad}</td>
        <td>${subtotal.toFixed(2)} Bs</td>
    `;
    listaCanasta.appendChild(fila);

    // Limpiar solo los campos del producto
    document.getElementById('producto-nombre').value = '';
    document.getElementById('producto-precio').value = '';
    document.getElementById('producto-cantidad').value = '';
});

// Evento 2: Procesar formulario completo y calcular presupuesto
formPresupuesto.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar que la página se recargue

    const presupuesto = parseFloat(document.getElementById('presupuesto').value);

    if (isNaN(presupuesto) || presupuesto <= 0) {
        alert('Ingresa un presupuesto inicial válido.');
        return;
    }

    if (productosCanasta.length === 0) {
        alert('Debes agregar al menos un producto a la canasta para calcular.');
        return;
    }

    // Calcular el total usando modelos matemáticos sencillos
    let totalCompra = 0;
    productosCanasta.forEach(prod => {
        totalCompra += prod.subtotal;
    });

    let saldoRestante = presupuesto - totalCompra;
    let mensajeResultado = "";
    let claseAlerta = "";

    // Lógica de validación de presupuesto y clasificación del gasto
    if (saldoRestante >= 0) {
        mensajeResultado = `¡El presupuesto ALCANZA! Te quedan ${saldoRestante.toFixed(2)} Bs.`;
        claseAlerta = "alerta-exito";
    } else {
        let faltante = Math.abs(saldoRestante);
        mensajeResultado = `El presupuesto NO ALCANZA. Te faltan ${faltante.toFixed(2)} Bs para completar la compra.`;
        claseAlerta = "alerta-critica";
    }

    // Clasificación del nivel de gasto según la proporción del presupuesto
    let porcentajeGastado = (totalCompra / presupuesto) * 100;
    let clasificacionGusto = "";
    if (porcentajeGastado < 50) {
        clasificacionGusto = "Bajo";
    } else if (porcentajeGastado <= 100) {
        clasificacionGusto = "Medio";
    } else {
        clasificacionGusto = "Alto (Excedido)";
    }

    // Mostrar los resultados modificando el DOM
    contenedorResultados.classList.remove('oculto');
    resumenCalculos.innerHTML = `
        <div class="tarjeta-resultado ${claseAlerta}">
            <h4>${mensajeResultado}</h4>
            <p><strong>Total Presupuestado:</strong> ${presupuesto.toFixed(2)} Bs</p>
            <p><strong>Total de la Compra:</strong> ${totalCompra.toFixed(2)} Bs</p>
            <p><strong>Clasificación del Gasto:</strong> ${clasificacionGusto}</p>
        </div>
    `;
});

// Evento 3: Limpiar formulario y reiniciar simulador
btnLimpiar.addEventListener('click', () => {
    formPresupuesto.reset();
    productosCanasta = [];
    listaCanasta.innerHTML = '';
    resumenCalculos.innerHTML = '';
    contenedorResultados.classList.add('oculto');
});