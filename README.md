# codework-app

5º Proyecto del Bootcamp stack(MERN)

## Instalación de dependencias para frontend
    "@paypal/react-paypal-js": "^7.8.3",
    "axios": "^1.3.4",
    "bootstrap": "^5.2.3",
    "bootstrap-icons": "^1.10.3",
    "react": "^18.2.0",
    "react-bootstrap": "^2.7.2",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.1"


## Creación de la carpeta routers(donde irán alojados todos los archivos de rutas)

## Creación componente de rutas para las diferentes páginas de la app
-AppRouters

## Creación de los componente de rutas privadas, públicas y administrador
-PrivateRouter
-PublicRouter
-AdminRouter

## Creación de la carpeta auth donde contiene 

-AuthProvider (componente para autentificación (contexto general inicio de sesión)
los estados dentro de este componente cuando contiene el objeto abre las rutas private y en el caso de
admin si el password coincide con el ADMINPASS en el .env)

-useAuth (custom hook) para dar mayor legibilidad y escalabilidad a futuro


## Creación del archivo page
AboutPage,
Admin,
CheckoutPage,
HomePage,
LoginPage,
NotFoundPage,
OrdersPage,
ProductPage(individual a través de params.id),
ProductsPage,
ProfilePage

## Creación de carpeta components (con los componentes reutilizables en su interior)
Boton,
CardProduct,
Carousel,
Footer,
Header,
PopUp,
Spinner

creo archivo para despliegue vercel.json



