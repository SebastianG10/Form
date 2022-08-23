import app from './app'
// Conexión a mongoDB.
import '../DB/database'

app.listen(3200)
console.log('server port', 3200)