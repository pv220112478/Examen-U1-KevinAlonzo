let cafe: number = 0x1EB; //cambiados a binario 000111101011
let azucar: number = 0xDE;//- 11011110
let leche: number = 0x7B;//- 01111011
let hielo: number = 0x142;//- 000101000010
let chocolate: number = 0x63;//- 01100011
console.log(cafe)
console.log(azucar)
console.log(leche)
console.log(hielo)
console.log(chocolate)

let cafeteria: boolean = true;

if (cafeteria=true){
    console.log("abierto")
    let registroLote : [Date,number,String] = [new Date(),0b000111101011,"nescafe"]
    let historialPrecios: [Date,string,Date,String] = [new Date("25-12-2025"),"precio anterior=400",new Date(),"precio actual=500"]
    let coordenadasEntrega: [number,number,number] = [20.6136,-105.227,111]
    console.log(registroLote)
    console.log(historialPrecios)
    console.log(coordenadasEntrega)


}else{
    console.log("cerrado")
}