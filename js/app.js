/*Función para logeo */
function logForm() {
	let user = document.getElementById("email").value;
	let pass = document.getElementById("password").value;
	if (user == "javier@cohesion.com" && pass == "0123456789") {
		window.location = "home.html";
	}
	else {
		alert("Datos incorrectos \n\n pruebe con: javier@cohesion.com \n\n 0123456789");
		console.log("pruebe con javier@cohesion.com y 0123456789")
	}
}

/*Evaluador de condición para email */
const form = document.querySelector('form');
const email = document.querySelector('#email');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	if (!email.checkValidity()) {
		email.classList.add('is-invalid');
	} else {
		email.classList.remove('is-invalid');
		alert('Correo electrónico validado correctamente.');
	}

});


/*Algoritmo carrito de compras*/

/*Variable constantes globales para el contenedor del carrito*/
const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('d-none');
});

/*Variable constantes globales para los producto dentro del carrito*/
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

/* Lista de todos los contenedores de productos*/
const productsList = document.querySelector('.container-items');

/* Variable de arreglos de Productos */
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		const product = e.target.parentElement;

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h5').textContent,
			price: product.querySelector('p').textContent,
		};

		const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

		showHTML();
	}
});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);

		showHTML();
	}
});

/* Funcion para mostrar  HTML */
const showHTML = () => {
	if (!allProducts.length) {
		cartEmpty.classList.remove('d-none');
		rowProduct.classList.add('d-none');
		cartTotal.classList.add('d-none');
	} else {
		cartEmpty.classList.add('d-none');
		rowProduct.classList.remove('d-none');
		cartTotal.classList.remove('d-none');
	}

	/* Restaurar HTML */
	rowProduct.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;

	allProducts.forEach(product => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');

		containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="fs-6">${product.quantity}</span>
                <p class="fs-6 my-2">${product.title}</p>
                <span class="fs-6">${product.price}</span>
            </div>
            <i class="bi bi-trash3 icon-close text-danger"></i>
        `;

		rowProduct.append(containerProduct);

		total =
			total + parseInt(product.quantity * product.price.slice(1));
		totalOfProducts = totalOfProducts + product.quantity;
	});

	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;

};

//Funcion para los productos

function mainList(newProducts) {
	// Obtener el elemento contenedor para las tarjetas
	const contenedorNewProducts = document.getElementById('elements-products')

	newProducts.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

	// Recorrer cada objeto en el array ordenado y crear una tarjeta para cada uno
	newProducts.forEach(obj => {
		// Crear la estructura HTML de la tarjeta
		const cardsProducts = `<div class="col" id=${obj.id}">
	<div class="card rounded-0 border-0">
		<img src="./img/${obj.imagen}.jpg"
			class="card-img-top rounded-3 mirror cover-big" alt="${obj.descripcion}">
		<div class="card-body info-product row">
			<h5 class="card-title">${obj.nombre}</h5>
			<p class="card-text fs-6 m-0 price">$${obj.precio}</p>
			<button class="btn btn-dark rounded-pill btn-add-cart fs-7 mt-3">
				<i class="bi bi-cart3 mx-1 btn-add-cart"></i>Añadir
			</button>
		</div>
	</div>
</div>`;

		// Agregar la tarjeta al contenedor
		contenedorNewProducts.innerHTML += cardsProducts;
	});

}

const listProducts = [
	//Silla Nexus
	{
		"id": "sillaNexus",
		"imagen": "chairs/chair-nexus-perspective",
		"descripcion": "Silla Nexus compuesta con estructura de madera chapada y cogines con espuma de alta densidad recubierto por lona de color beige",
		"nombre": "Silla Nexus",
		"precio": "75",
		"fecha": "04/12/2023",
	},


]

mainList(listProducts)


function mainList2(newProducts2) {
	// Obtener el elemento contenedor para las tarjetas
	const contenedorNewProducts2 = document.getElementById('elements-products2')

	newProducts2.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

	// Recorrer cada objeto en el array ordenado y crear una tarjeta para cada uno
	newProducts2.forEach(obj => {
		// Crear la estructura HTML de la tarjeta
		const cardsProducts2 = `<div class="col" id=${obj.id}">
	<div class="card rounded-0 border-0">
		<img src="./img/${obj.imagen}.jpg"
			class="card-img-top rounded-3 cover-min" alt="${obj.descripcion}">
		<div class="card-body info-product row">
			<h5 class="card-title">${obj.nombre}</h5>
			<p class="card-text fs-6 m-0 price">$${obj.precio}</p>
			<button class="btn btn-dark rounded-pill btn-add-cart fs-7 mt-2">
				<i class="bi bi-cart3 mx-1 btn-add-cart"></i>Añadir
			</button>
		</div>
	</div>
</div>`;

		// Agregar la tarjeta al contenedor
		contenedorNewProducts2.innerHTML += cardsProducts2;
	});

}

const listProducts2 = [

	//Sillon Green
	{
		"id": "sillonGreen",
		"imagen": "chairs/armchair-green-front",
		"descripcion": "Sillon Green compuesta con estructura de madera estilizada, con acolchado de fibra de silicon recubierto con cuero begano color verde",
		"nombre": "Sillon Green",
		"precio": "90",
		"fecha": "08/05/2022",
	},

	//Taburete Alfa
	{
		"id": "tabureteAlfa",
		"imagen": "chairs/stool-alfa-front",
		"descripcion": "Taburete Alfa de cuatro patas armado en madera con acabados de lujo de enchapados con bronce",
		"nombre": "Taburete Alfa",
		"precio": "45",
		"fecha": "12/25/2022",
	},

	//Ratonera Rol
	{
		"id": "tabureteAlfa",
		"imagen": "chairs/table-rol-perspective",
		"descripcion": "Ratonera Rol construida de cuatro patas en acero pintado con laca de color negro, soporte superio de madera caoba oscura con triple laqueado",
		"nombre": "Ratonera Rol",
		"precio": "75",
		"fecha": "02/14/2023",
	},

	//Silla Olga
	{
		"id": "tabureteAlfa",
		"imagen": "chairs/chair-olga-perspective",
		"descripcion": "Silla Olga construida en madera modelada con soporte transversal en las patas, malla de soporte en tiras de nylon, cojin de empuma de alta denisidad recubierto con lona verde",
		"nombre": "Silla Olga",
		"precio": "75",
		"fecha": "03/03/2023",
	},


]

mainList2(listProducts2)


function mainList3(newProducts3) {
	// Obtener el elemento contenedor para las tarjetas
	const contenedorNewProducts3 = document.getElementById('elements-products3')

	newProducts3.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

	// Recorrer cada objeto en el array ordenado y crear una tarjeta para cada uno
	newProducts3.forEach(obj => {
		// Crear la estructura HTML de la tarjeta
		const cardsProducts3 = `<div class="col" id=${obj.id}">
	<div class="card rounded-0 border-0">
		<img src="./img/${obj.imagen}.jpg"
			class="card-img-top rounded-3 cover-med" alt="${obj.descripcion}">
		<div class="card-body info-product row">
			<h5 class="card-title">${obj.nombre}</h5>
			<p class="card-text fs-6 m-0 price">$${obj.precio}</p>
			<button class="btn btn-dark rounded-pill btn-add-cart fs-7 mt-2">
				<i class="bi bi-cart3 mx-1 btn-add-cart"></i>Añadir
			</button>
		</div>
	</div>
</div>`;

		// Agregar la tarjeta al contenedor
		contenedorNewProducts3.innerHTML += cardsProducts3;
	});

}

const listProducts3 = [

	//Lampara Skrap
	{
		"id": "lamparaSkrap",
		"imagen": "lamp/lamp-skrap-blue-front",
		"descripcion": "Lampara de base azul con pantalla semi-esferica y dispersión de 180°",
		"nombre": "Lámpara Skrap",
		"precio": "45",
		"fecha": "05/01/2023",
	},

	//Reloj Neut
	{
		"id": "relojNeut",
		"imagen": "clock/clock-neut-wood-front",
		"descripcion": "Reloj analogo de pared, fondo blanco con borde de madera y agujas negra",
		"nombre": "Reloj Neut Madera",
		"precio": "24",
		"fecha": "04/08/2023",
	},

	//Sillon Daze
	{
		"id": "sillonDaze",
		"imagen": "chairs/armchair-daze-front",
		"descripcion": "Sillon con armazon en acero acolchado de espuma reactiva y forrado en gamuza de color ceniza",
		"nombre": "Sillón Daze",
		"precio": "83",
		"fecha": "01/24/2023",
	},

	//Silla Gretchen
	{
		"id": "sillaGretchen",
		"imagen": "chairs/chair-gretchen-front",
		"descripcion": "Sillon de madera seccionada con tabiques curvos de apoyo, cuatro patas en diagonales y curvatura de espada ergonomica",
		"nombre": "Silla Gretchen",
		"precio": "35",
		"fecha": "12/05/2022",
	},


]

mainList3(listProducts3)
