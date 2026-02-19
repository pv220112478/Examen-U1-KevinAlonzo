let cafe: number = 0x1EB; 
let azucar: number = 0xDE;
let leche: number = 0x7B;
let hielo: number = 0x142;
let chocolate: number = 0x63;

let cafeteria: boolean = false; 

if (cafeteria) {
    console.log("abierto");
    
    
    console.log("Inventario:");
    console.log(cafe, azucar, leche, hielo, chocolate);

    let registroLote : [Date, number, string] = [new Date(), 0b000111101011, "nescafe"];
    let historialPrecios: [Date, string, Date, string] = [new Date("2025-12-25"), "precio anterior=400", new Date(), "precio actual=500"];
    let coordenadasEntrega: [number, number, number] = [20.6136, -105.227, 111];

    console.log("registro del lote del proovedor de cafe", registroLote);
    console.log("registro de precios", historialPrecios);
    console.log("coordenadas", coordenadasEntrega);

} else {
    
    console.log("cerrado");
}