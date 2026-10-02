import {connect} from "mongoose"
import {MongoClient, ObjectId} from "mongodb"

const connectMongoDb = async () => {
   try{
        await connect("mongodb://localhost:27017")
        console.log("Conectado con Exito!")

   }
   catch (error){
        console.log("Error al Conectarse a MongoDb")
   }     
}

//connectMongoDb()

const client = new MongoClient("mongodb://localhost:27017")

const db = client.db("biblioteca")
const collection = db.collection("libros")

const argumentos = process.argv.splice(2)
const accion = argumentos[0]

const leerLibros = async () => {
 const libros = await collection.find().toArray()
 return libros
}

const agregarLibro = async (titulo: string, autor: string, precio: number, stock: number) => {
   const nuevoLibro = {titulo, autor, stock, precio}
   const resultado = await collection.insertOne(nuevoLibro)
   return collection.findOne({_id: new ObjectId(resultado.insertedId) })
}

switch  (accion) {
     case "help":
                console.log(`
            create data -> para crear libro
            read -> para leer libros
            update id -> para actualizar libro
            delete id -> para borrar libro 
        `)
        break
    case "create":
        const titulo = argumentos[1]
        const autor = argumentos[2]
        const precio = +argumentos[3]
        const stock = +argumentos[4]   
        console.log(await agregarLibro(titulo, autor, precio, stock))
        process.exit(1)
    case "read":
        console.log(await leerLibros())
        process.exit(1)
    case "update":
        console.log("Actualizando Libro")
        process.exit(1)
    case "delete":
        console.log("Borrando Libro")
        process.exit(1)
    default:
        console.log("Comando inexistente, utilice Help para ver opciones")
}

