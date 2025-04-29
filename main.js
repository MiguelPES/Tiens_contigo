fetch('productos.json')
    .then(response => response.json())
    .then(data => {
        const contenedor = document.getElementById('productos');
        data.forEach(producto => {
            const div = document.createElement('div');
            div.className = 'producto';
            div.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p><strong>Precio:</strong> ${producto.precio}</p>
            `;
            contenedor.appendChild(div);
        });
    });