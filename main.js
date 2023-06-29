/// lista de productos
const GUITARRA = { id: 1, categoria: "instrumentos", producto: "guitarra", precio: 10000 };
const BATERIA = { id: 2, categoria: "instrumentos", producto: "bateria", precio: 5000 };
const BAJO = { id: 3, categoria: "instrumentos", producto: "bajo", precio: 10000 };
const SAXO = { id: 4, categoria: "instrumentos", producto: "saxo", precio: 6000 };
const HELADERA = { id: 5, categoria: "electrodomesticos", producto: "heladera", precio: 5000 };
const HORNO = { id: 6, categoria: "electrodomesticos", producto: "horno", precio: 4000 };
const TOSTADORA = { id: 7, categoria: "electrodomesticos", productos: "tostadora", precio: 2500 };
const CAFETERA = { id: 8, categoria: "electrodomesticos", productos: "cafetera", precio: 3000 };

class listaCheckout {
    constructor(nombre, precio, cantidad, total) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.total = total;
    }
}

/// arrays
const productos = [GUITARRA, BATERIA, BAJO, SAXO, HELADERA, HORNO, TOSTADORA, CAFETERA];
const checkout = [];
const electro = productos.filter(categoria => categoria.categoria == "electrodomesticos");
const instrumentos = productos.filter(categoria => categoria.categoria == "instrumentos");

///variables
let iniciar = "";
let continuar;
let total = 0;
let cantidad;
let producto;

/// ------------------------------ FUNCIONES ------------------------------- ///



/// funcion filtro


/// funcion subtotal
function subtotal(total, precio, cantidad) {
    return total + (precio * cantidad);
};

/// funcion de carrito

function carrito() {

    let filtro = prompt("Buenos dias, por favor elija la categoria que quiere comprar: electrodomesticos / instrumentos");
    if (filtro == "electrodomesticos") {
        producto = prompt("Buenos dias, disculpen los inconvenientes, pero tenemos un stock limitado a:\n 1- HELADERA a $5.000 \n 2- HORNO a  $4.000 \n 3- TOSTADORA a $2.500 \n 4- CAFETERA a $3.000 \n por favor indique el producto que deseé: ");
        cantidad = parseFloat(prompt("indique la cantidad deseada:"));

        if (producto == "HELADERA" || "HORNO" || "TOSTADORA" || "CAFETERA") {

            switch (producto) {
                case "HELADERA":
                    total = subtotal(total, electro[0].precio, cantidad);
                    checkout.push(new listaCheckout(producto, (productos[0].precio), cantidad, (productos[0].precio * cantidad)));
                    break;
                case "HORNO":
                    total = subtotal(total, electro[1].precio, cantidad);
                    checkout.push(new listaCheckout(producto, (productos[1].precio), cantidad, (productos[1].precio * cantidad)));
                    break;
                case "TOSTADORA":
                    total = subtotal(total, electro[2].precio, cantidad);
                    checkout.push(new listaCheckout(producto, (productos[2].precio), cantidad, (productos[2].precio * cantidad)));
                    break;
                case "CAFETERA":
                    total = subtotal(total, electro[3].precio, cantidad);
                    checkout.push(new listaCheckout(producto, (productos[3].precio), cantidad, (productos[3].precio * cantidad)));
                    break;
                default:
                    alert("por favor elija un producto valido")
                    carrito();
                    break;
            }
        }

    } else {

        if (filtro == "instrumentos") {
            producto = prompt("Buenos dias, disculpen los inconvenientes, pero tenemos un stock limitado a:\n 1- GUITARRA a $10,000 \n 2- BATERIA a  $5,000 \n 3- BAJO a $10,000 \n 4- SAXO a $6,000 \n por favor indique el producto que deseé: ");
            cantidad = parseFloat(prompt("indique la cantidad deseada:"));

            if (producto == "GUITARRA" || producto == "BATERIA" || producto == "BAJO" || producto == "SAXO") {
                switch (producto) {
                    case "GUITARRA":
                        total = subtotal(total, instrumentos[0].precio, cantidad);
                        checkout.push(new listaCheckout(producto, (productos[0].precio), cantidad, (productos[0].precio * cantidad)));
                        break;
                    case "BATERIA":
                        total = subtotal(total, instrumentos[1].precio, cantidad);
                        checkout.push(new listaCheckout(producto, (productos[1].precio), cantidad, (productos[1].precio * cantidad)));
                        break;
                    case "BAJO":
                        total = subtotal(total, instrumentos[2].precio, cantidad);
                        checkout.push(new listaCheckout(producto, (productos[2].precio), cantidad, (productos[2].precio * cantidad)));
                        break;
                    case "SAXO":
                        total = subtotal(total, instrumentos[3].precio, cantidad);
                        checkout.push(new listaCheckout(producto, (productos[3].precio), cantidad, (productos[3].precio * cantidad)));
                        break;
                    default:
                        alert("por favor elija un producto valido")
                        carrito();
                        break;
                }
            }
        }
    }
}

// funcion para imprimir los elementos del checkout
function printCheckout() {
    checkout.forEach(element => {
        console.log(checkout);
    });
};


/// --------------------------------- inicio de la ejecucion: --------------------------------------- ///

iniciar = prompt("Buen dia, quiere comprar en la pagina? si/no");

if (iniciar == "si") {
    do {
        carrito();
        alert("su total es de: $" + total);
        continuar = prompt("desea agregar otro producto? si/no");
    } while (continuar == "si");
    if (continuar !== "si") {
        alert("muchas gracias! sus productos fueron agregados al carrito con exito! Tiene un total de: $" + total);
    }
} else {
    alert("Vuelva pronto!");
};

printCheckout();
console.log("en total tiene " + total);