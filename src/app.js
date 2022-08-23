/* CommonJS:
Para importar módulos se usa la palabra require.
También se puede usar el import de JS por lo que puede dar errores y ser tedioso a largo plazo.
con esto existe un compilador de JS, se llama BABEL, se encarga de convertir el código relativamente "nuevo" a viejo.
*/
import express from 'express'
// Uso de un camino para concatenar directorios sin importar la plataforma.
import path from 'path'
import { create } from 'express-handlebars'
import indexRoutes from './routes/index.routes'
// Si visitamos cualquier cosa nos lo detecta con su respuesta.
import morgan from 'morgan'

const app = express()

/* Configuraciones */
// app.set('port', process.env.PORT || 3200);
// Por lo general piensa que está afuera del todo la carpeta views.
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', create({
    // Para que se carguen las vistas.
    layoutsDir: path.join(app.get('views'), 'layouts'),
    // Falta decir el nombre del archivo.
    partialsDir: path.join(app.get('views'), 'partials'),
    defaulLayout: 'main',
    extname: '.hbs',
}).engine
)
app.set("view engine", ".hbs");

/* Middleware */
app.use(morgan('dev'))
//  Para trabajar los req.body
app.use(express.urlencoded({ extended: false }))

/* Rutas */
app.use(indexRoutes)

export default app
