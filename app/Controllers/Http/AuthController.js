const User = use('App/Models/User')

class AuthController {
  async register({ request, response }) {
    try {
      const data = request.only(['username', 'email', 'password'])
      const user = await User.create(data)

      return response.status(200).json({ user });

    } catch(error) {
      return response.status(500).json({ message: "Error ao cadastrar usuario" });
    }
  }

  async authenticate({ request, auth }){
    try {
      const { email, password } = request.all()
      const token = await auth.attempt(email, password)

      return response.status(200).json({ token });

    } catch(error) {
      return response.status(500).json({ message: "Error ao autenticar usuario" });
    }
  }
}

module.exports = AuthController
