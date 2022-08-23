import User from '../models/Users'


export const renderUsers = async (req, res) => {
    // Puede tengamos errores de duplicado.
    try {
        // Permite buscar todos los objetos de una colección.
        const users = await User.find().lean();
        // console.log(user)
        // Mostramos home y enviamos objeto users

        res.render("home", { users, });
    } catch (error) {
        console.log('Error::', error.name);
        console.log({ error });
        // return res.render("error", { errorMessage: error.message });
        
    }
};

export const createUser = async (req, res, next) => {
    // Cuando llegue el req.body se pasa al modelo de tareas
    try {
        const user = new User(req.body);
        // Añadimos el objeto a la DB automáticamente.
        await user.save();
        // res.send(usuario)
        res.redirect("/");
    } catch (error) {
        console.log('Error::', error.name);
        console.log({ error });
        // return res.render( { errorMessage: error.message });
    }
};

export const deleteUser = async (req, res, next) => {
    let { id } = req.params;
    await User.remove({ _id: id });
    res.redirect("/");
};

export const userSearch = async (req, res) => {
    console.log('Searching');
}
