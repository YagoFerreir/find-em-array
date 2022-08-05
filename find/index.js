const numbers = [10, 30, 19, 25, 40, 2, 8, 15];
const foundNumbers = numbers.find((numbers) => numbers < 5);
console.log(foundNumbers);// resultado esperado: 2

//usando o metodo find em arrays para localizar
//em uma posição especifica do array

const age = [1997, 2005, 2001, 1994];
const years = age.find((age) => age <= 2005);
console.log(years);

//desta vez usando o find para procurar um ano
//em uma posição especifica do array

//Lista de Pedidos
let pedidos = [
    { 'Senha': 420, 'nome': 'Yago', 'alimento': 'Lanche de Bacon', 'bebida': 'Suco Limão' },
    { 'Senha': 152, 'nome': 'Estela', 'alimento': 'Lanche Vegano', 'bebida': 'Suco de Laranja' },
    { 'Senha': 29, 'nome': 'Luiz', 'alimento': 'Coxinha', 'bebida': 'Suco de Uva' },
    { 'Senha': 33, 'nome': 'Emma', 'alimento': 'Lanche de Picanha', 'bebida': 'Refrigerante' },
    { 'Senha': 55, 'nome': 'Estefany', 'alimento': 'Pizza', 'bebida': 'Refrigerante' }
];

let find = pedidos.find((pedido) => {
    return pedido.Senha == 420
});

console.log(find);

//criei agora um lista de pedidos onde com o find
//consigo encontrar o pedido especifico do cliente