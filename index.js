const rest = new (require('rest-mssql-nodejs'))({
    user: 'unicornio',
    password: 'Chapi01$',
    server: 'advew.database.windows.net', //direccion del servidor en azure
    database: 'productionAW' 
});
const rest2 = new (require('rest-mssql-nodejs'))({
    user: 'unicornio',
    password: 'Chapi01$',
    server: 'advew.database.windows.net', // replace this with your IP Server
    database: 'salesAW' 
});
const rest3 = new (require('rest-mssql-nodejs'))({
    user: 'unicornio',
    password: 'Chapi01$',
    server: 'advew.database.windows.net', // replace this with your IP Server
    database: 'otrosAW' 
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

        
        const categoria = process.openStdin('ingrese la categoria del producto ');
    categoria.addListener("data", async (data) => {
        const res1 = await rest2.executeStoredProcedure('sp_consulta_A',{cat: categoria})
        console.log(res1)
    process.exit();
})
            
        break;
<<<<<<< HEAD
    case 2:

        
            const res2 = await rest.executeStoredProcedure("sp_consulta_B")
            console.log(res2)
        
        break;    
    case 3:
        const categoria2= process.openStdin('elija una opcion');
        categoria2.addListener("data", (data) => {
            
            process.exit();
        })
        const localidad = process.openStdin('elija una opcion');
        localidad.addListener("data", (data) => {
            process.exit();
        })
            const res3 = await rest.executeStoredProcedure("sp_consulta_C",{cat: categoria2,
                loc: localidad})
            console.log(res3)
                break;
    case 4:
        const territorio = process.openStdin('elija el territorio');
        territorio.addListener("data", (data) => {
            process.exit();
        })
            const res4 = await rest.executeStoredProcedure("sp_consulta_D",{terri: territorio})
            console.log(res4)
        
        break;
    case 5:
        const cantidad = process.openStdin('elija el territorio');
        cantidad.addListener("data", (data) => {
            process.exit();
        })
        const orden = process.openStdin('elija el territorio');
        orden.addListener("data", (data) => {
            process.exit();
        })
            const res5 = await rest.executeStoredProcedure("sp_consulta_E",{qty:cantidad,
            OrderId:orden})
            console.log(res5)
        
        break;
    case 6:
        
            const res6 = await rest.executeStoredProcedure("sp_consulta_F")
            console.log(res6)
        
        break;
    case 7:
        
            const res7 = await rest.executeStoredProcedure("sp_consulta_G")
            console.log(res7)
        
        break;    
    case 8:
        
            const res8 = await rest.executeStoredProcedure("sp_consulta_H")
            console.log(res8)
        
        break;
    case 9:
        
            const res9 = await rest.executeStoredProcedure("sp_consulta_I")
            console.log(res9)
        
        break;
    case 10:
        
            const res10 = await rest.executeStoredProcedure("sp_consulta_J")
            console.log(res10)
        
=======
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
>>>>>>> 470a7a53721537d46ef4d7a3c55fd2ee82e84b45
        break;   
    default:
        console.log("Esta opcion no existe")
        break;
}