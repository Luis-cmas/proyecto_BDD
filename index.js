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
        const categoria = process.openStdin('Ingrese la categoria del producto ');
        categoria.addListener("data", async (data) => {
        const res1 = await rest2.executeStoredProcedure('sp_consulta_A',{cat: categoria})
        console.log(res1)
        process.exit();
        })
        break;

    case 2: //aqui inicia la consulta B y se le pide al usuario los datos que se quieren obtener
            const prod = process.openStdin('Ingrese el producto mas solicitado que quiera obtener')
            prod.addListener("data", async(data) => {
            process.exit();
            })
            const region = process.openStdin('Ingrese el territorio que quiera obtener')
            region.addListener("data", async(data) =>{
            process.exit();
            })
            const res2 = await rest.executeStoredProcedure("sp_consulta_B")
            console.log(res2)
        break;  

    case 3://Consulta C, se le pide al usuario dos valores, uno la categoria y otro la localidad del producto para poder ver el stock disponible
        const categoria2= process.openStdin('elija una opcion');
        categoria2.addListener("data", (data) => {
            process.exit();
        })
        const localidad = process.openStdin('elija una opcion');
        localidad.addListener("data", (data) => {
            process.exit();
        })
            const res3 = await rest.executeStoredProcedure("sp_consulta_C",{cat: categoria2,loc: localidad})
            console.log(res3)
                break;

    case 4: //Consulta D ver los clientes que existen en un territorio 
        const territorio = process.openStdin('elija el territorio');
        territorio.addListener("data", (data) => {
            process.exit();
        })
            const res4 = await rest.executeStoredProcedure("sp_consulta_D",{terri: territorio})
            console.log(res4)
        
        break;
    case 5://consulta E, actualiza la cantidad de productos 
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
    case 6: //consulta F actualiza el metodo de envio de una orden 
            const envio = process.openStdin('Ingrese el nuevo metodo de envio')
            envio.addListener("data", (data) =>{
                procces.exit();
            })
            const orden2 = process.openStdin('Ingrese el numero de orden')
            orden2.addListener("data", (data) =>{
                process.exit();
            })
            const res6 = await rest.executeStoredProcedure("sp_consulta_F", {envio:envio, Order:orden2})
            console.log(res6)
        
        break;
    case 7://consulta G actualiza el correo de un cliente
            const fname = process.openStdin('Ingrese su nombre')
            fname.addListener("data", (data) =>{
                process.exit();
            })
            const lname = process.openStdin('Ingrese su apellido')
            lname.addListener("data", (data) =>{
                process.exit();
            })
            const correo = process.openStdin('Ingrese el correo nuevo')
            correo.addListener("data", (data)=>{
                process.exit();
            })
            const res7 = await rest.executeStoredProcedure("sp_consulta_G", {fName:fname, lName:lname, correo:correo})
            console.log(res7)
        
        break;    
    case 8://consulta H ver el empleado que mas atendio 
            const res8 = await rest.executeStoredProcedure("sp_consulta_H")
            console.log(res8)
        
        break;
    case 9://consulta i ver el total de ventas de un rango establecido 
            
            const fecha = process.openStdin('Fecha de entrada')
            fecha.addListener("data", (data)=>{
                process.exit();
            })        
            const fecha2 = process.openStdin('Fecha de salida')
            fecha2.addListener("data", (data)=>{
                procces.exit();
            })
            const res9 = await rest.executeStoredProcedure("sp_consulta_I", {fechaEntrada:fecha, fechaSalida:fecha2})
            console.log(res9)
        
        break;
    case 10:
            
            const res10 = await rest.executeStoredProcedure("sp_consulta_J")
            console.log(res10)
        
        break;   
    default:
        console.log("Esta opcion no existe")
        break;
}