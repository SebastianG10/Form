import { Router } from 'express'

// Aplicamos el MVC
import {
    renderUsers,
    createUser,
    deleteUser,
    userSearch
} from '../../controllers/user.controller'

const router = Router()

// Cada que se acceda a esta ruta de la aplicación se le devolverá un mensaje.
router.get('/', renderUsers)

router.post('/users/add', createUser)

router.get('/delete/:id', deleteUser)

router.get('/users/search', userSearch)

// router.get('/toggleDone/:id', toggle)

// router.get('/edit/:id', taskEdit)

// Si queremos actualzar usamos PUT, en frontend ahora usamos post.
// router.post('/edit/:id', updateTask)


export default router