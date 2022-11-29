const rest = new (require('rest-mssql-nodejs'))({
    user: 'unicornio',
    password: 'Chapi01$',
    server: 'advew.database.windows.net', //direccion del servidor en azure
    database: 'productionAW' 
});
console.log("Bienvenido, que desea?")

console.log("1)Determinar el total de las ventas de los productos de la categoría que se provea como argumento de entrada en la consulta, para cada uno de los territorios registrados en la base de datos o para cada una de las regiones (atributo group de SalesTerritory) según se especifique como argumento de entrada.")

console.log("2)Determinar el producto más solicitado para la región (atributo group de salesterritory) que se especifique como argumento de entrada y en que territorio de la región tiene mayor demanda.")

console.log("3)Actualizar el stock disponible en un 5% de los productos de la categoría que se provea como argumento de entrada, en una localidad que también se provea como argumento de entrada en la instrucción de actualización.")

console.log("4)Determinar si hay clientes de un territorio que se especifique como argumento de entrada, que realizan ordenes en territorios diferentes al que se encuentran. ")

console.log("5)Actualizar la cantidad de productos de una orden que se provea como argumento en la instrucción de actualización.")

console.log("6)Actualizar el método de envío de una orden que se reciba como argumento en la instrucción de actualización.")

console.log("7)Actualizar el correo electrónico de una cliente que se reciba como argumento en la instrucción de actualización.")

console.log("8)Determinar el empleado que atendió más ordenes por territorio/región.")

console.log("9)Determinar para un rango de fechas establecidas como argumento de entrada,cual es el total de las ventas en cada una de las regiones.")

console.log("10)Determinar los 5 productos menos vendidos en un rango de fecha establecido como argumento de entrada.")

const seleccion = process.openStdin('Elija una opcion'); //Opcion de la consulta donde se le pide al usuario que ingrese el numero deseado
seleccion.addListener("data", (data) => {
    console.log("Usted seleccionó: " + data.toString());//Mensaje para saber que numero eligio 
    process.exit();
})
       
switch(seleccion){
    case 1:

        setTimeout(async() =>{
            const res = await rest.storedProcedure("sp_consulta_A")
            console.log(res)
        },1500)
        break;
    case 2: //Consulta inciso b)
        setTimeout(async() =>{
            const res = await rest.storedProcedure("sp_consulta_B")
            console.log(res)
        },1500)
        break;    
    case 3: //consulta inciso c)
        setTimeout(async() =>{
            const res = await rest.storedProcedure("sp_consulta_C")
            console.log(res)
        },1500)
        break;
    case 4://consulta inciso d)
        setTimeout(async() =>{
            const res = await rest.storedProcedure("sp_consulta_D")
            console.log(res)
        },1500)
        break;
    case 5://consulta de inciso e)
        setTimeout(async() =>{
            const res = await rest.storedProcedure("sp_consulta_E")
            console.log(res)
        },1500)
        break;
    case 6://consulta inciso f
        setTimeout(async() =>{
            const res = await rest.storedProcedure("sp_consulta_F")
            console.log(res)
        },1500)
        break;
    case 7:
        break;    
    case 8:
        break;
    case 9:
        break;
    case 10:
        break;   
    default:
        console.log("Esta opcion no existe")
        break;
}