const { calculaTaxaDesconto } = require("./calculaTaxaDesconto.js");
const taxaIgualAQuinze = 15;
const taxaIgualADez = 10;
const taxaIgualACinco = 5;

// Casos de teste de Todos os Caminhos Básicos

test("valorCompra >= 500 - Todos os Caminhos Básicos", () => {
    expect(calculaTaxaDesconto(false, "prata", 590)).toBe(taxaIgualAQuinze);
});

test("valorCompra >= 500 || tipoCliente == \"ouro\" - Todos os Caminhos Básicos", () => {
    expect(calculaTaxaDesconto(false, "ouro", 590)).toBe(taxaIgualAQuinze);
});

test("tipoCliente == \"prata\" - Todos os Caminhos Básicos", () => {
    expect(calculaTaxaDesconto(false, "prata", 390)).toBe(taxaIgualADez);
});

test("tipoCliente == \"prata\" || primeiraCompra === true - Todos os Caminhos Básicos", () => {
    expect(calculaTaxaDesconto(true, "prata", 390)).toBe(taxaIgualADez);
});

test("tipoCliente == \"prata\" || primeiraCompra === true || valorCompra >= 400 - Todos os Caminhos Básicos", () => {
    expect(calculaTaxaDesconto(true, "prata", 490)).toBe(taxaIgualADez);
});

test("valorCompra >= 200 - Todos os Caminhos Básicos", () => {
    expect(calculaTaxaDesconto(false, "bronze", 290)).toBe(taxaIgualACinco);
});

test("valorCompra >= 200 || tipoCliente == \"bronze\" - Todos os Caminhos Básicos", () => {
    expect(calculaTaxaDesconto(false, "bronze", 190)).toBe(taxaIgualACinco);
});

// Caso de teste para realizar 100% de cobertura

test("Nenhuma condição atendida - retorna 0", () => {
    expect(calculaTaxaDesconto(false, "", 100)).toBe(0);
});

// Matar os mutantes que sobreviveram

test("valorCompra == 500", () => {
    expect(calculaTaxaDesconto(false, "bronze", 500)).toBe(15);
});

test("tipoCliente == \"ouro\"", () => {
    expect(calculaTaxaDesconto(false, "ouro", 190)).toBe(15);
});

test("primeiraCompra === true", () => {
    expect(calculaTaxaDesconto(true, "", 190)).toBe(10);
});

test("valorCompra == 400", () => {
    expect(calculaTaxaDesconto(false, "", 400)).toBe(10);
});

test("valorCompra >= 400 || tipoCliente == \"\" || primeiraCompra === false", () => {
    expect(calculaTaxaDesconto(false, "", 490)).toBe(10);
});

test("valorCompra >= 200", () => {
    expect(calculaTaxaDesconto(false, "", 290)).toBe(5);
});

test("valorCompra == 200", () => {
    expect(calculaTaxaDesconto(false, "", 200)).toBe(5);
});
