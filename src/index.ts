import {connect} from "mongoose"
import {MongoClient} from "mongodb"

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

switch  (accion) {
    case "read":
        const respuesta = await leerLibros()
        console.log(respuesta)
        break
}

