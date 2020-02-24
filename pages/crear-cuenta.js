import Layout from '../components/layout/Layout'



const CrearCuenta = () => (
  <div>
      <Layout>
        <>
          <h1>Crear Cuenta</h1>
          <form>
            <div>
              <lable htmlFor="nombre">Nombre</lable>
              <input 
                type="text"
                id="nombre"
                placeholder="Tu Nombre"
                name="nombre"

              />
            </div>
            <div>
              <lable htmlFor="email">Email</lable>
              <input 
                type="email"
                id="email"
                placeholder="Tu Email"
                name="email"
                
              />
            </div>
            <div>
              <lable htmlFor="nombre">Password</lable>
              <input 
                type="password"
                id="password"
                placeholder="Tu Password"
                name="password"
                
              />
            </div>
            <input 
              type="submit"
              value="Crear Cuenta"
            />
          </form>
        </>
      </Layout>

  </div>
)


export default CrearCuenta
