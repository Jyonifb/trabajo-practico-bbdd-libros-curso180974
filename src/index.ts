import mongoose from "mongoose"
process.loadEnvFile()

//import {MongoClient, ObjectId} from "mongodb"

const URI_DB = process.env.URI_DB || ""

const connectDb = async (URI: string) => {
  try {
    await mongoose.connect(URI)
    console.log("Conectado a MongoDb con éxito :)")
  } catch (e) {
    console.log(`Error al conectar a MongoDb :(`)
  }
}

//connectDb(URI_DB)


/*const client = new MongoClient("mongodb://localhost:27017")

const db = client.db("biblioteca")
const collection = db.collection("libros")

const argumentos = process.argv.splice(2)
const accion = argumentos[0]
const id = new ObjectId(argumentos[1])

const leerLibros = async () => {
 const libros = await collection.find().toArray()
 return libros
}

const agregarLibro = async (titulo: string, autor: string, precio: number, stock: number) => {
   const nuevoLibro = {titulo, autor, stock, precio}
   const resultado = await collection.insertOne(nuevoLibro)
   return collection.findOne({_id: new ObjectId(resultado.insertedId) })
}

const borrarLibro = async (id: ObjectId) => {
    return await collection.deleteOne({ _id: new ObjectId(id) })
}

interface ILibro {
  titulo: string
  autor: string
  precio: number
  stock: number
}

const actualizarLibro = async (id: ObjectId, actualizaciones: string[]) => {
  const nuevaInfo: Partial<ILibro> = {}

  // [--nombre, cien años de soledad, --precio, 100, --stock, 100]
  for (let index = 0; index < actualizaciones.length; index = index + 2) {
    const propiedadAActualizar = actualizaciones[index].replace("--", "")
    const valoresDePropAActualizar = actualizaciones[index + 1]
    console.log(propiedadAActualizar)
    console.log(valoresDePropAActualizar)

    if (propiedadAActualizar === "precio" || propiedadAActualizar === "stock") {
      nuevaInfo[propiedadAActualizar] = +valoresDePropAActualizar
    } else {
      nuevaInfo[propiedadAActualizar as keyof ILibro] = valoresDePropAActualizar as never
    }
  }

  collection.updateOne({ _id: id }, { $set: nuevaInfo })
  return collection.findOne({ _id: id })
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
        console.log(await actualizarLibro(id, argumentos.splice(2)))
    process.exit(1)
    case "delete":
        console.log(await borrarLibro(new ObjectId(id)))
        process.exit(1)
    default:
        console.log("Comando inexistente, utilice Help para ver opciones")
}
*/
