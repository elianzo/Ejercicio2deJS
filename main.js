const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];
console.log("--------------------- Punto A");
const impares = pizzas.filter((pizza)=>{
  if(pizza.id%2===1){
    console.log("La " + pizza.nombre + " tiene una id impar");
  }
}
)
impares;
console.log("--------------------- Punto B");

const precios = pizzas.filter((pizza)=>{
  if (pizza.precio<600) {
    console.log("La " + pizza.nombre + " tiene un valor menor a $600");
  }
} )
precios;
console.log("--------------------- Punto C");

const PreciosYNombreDeTodasLasPizzas= pizzas.forEach((pizza)=>{
console.log("La " + pizza.nombre + " tiene el valor de $" + pizza.precio);
})
PreciosYNombreDeTodasLasPizzas;

console.log("--------------------- Punto D");

const NombresDePizzasConIngredientes = pizzas.forEach((pizza)=>{
  console.log("El nombre de la pizza numero " + pizza.id + " es " + pizza.nombre + " y lleva lo siguiente: ")
  pizza.ingredientes.forEach((ingrediente)=>{
    console.log(ingrediente);
  })
})
NombresDePizzasConIngredientes;
