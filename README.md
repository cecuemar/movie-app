# WikiMovie

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

Its a simple app to search movies and see the details of each one.
Its deployed on [Netlify](https://wikimovie-carlosedgar.netlify.app).

[wikimovie-carlosedgar.netlify.app]

## Performance
![Performance](/performance.jpeg)
## Dependencies

For styling, I used [Tailwindcss](https://tailwindcss.com/).
Title Font: Bagel Fat One

## How I Made it

First of all, i did a simple APi(i choosed The Open Movie DataBase) call to get the movies list(/mocks/response.json), and then i created a service to get the movies list and the movie details.

After that, i created a component to show the movies list, then i created a component to show the movie details.
I decide to create a header component to show the logo and a way to go back to the movie search(this component is always visible).

As i did before, i did another API call to get movie details. 

I manage the routing to show the movie details when you click on a movie Poster from the list.

Then i style the components to made it responsive and i added some animations to make it more dynamic(Poster hover).

## What was required

- Te registres en algún servicio online donde puedas realizar llamadas a un API de películas. Por ejemplo puedes utilizar The Movie Database (https://www.themoviedb.org/documentation/api) o The Open Movie Database (https://www.omdbapi.com).
- Utilizando los servicios de dicho API crees una pequeña interfaz con dos pantallas: Listado de Películas y Detalle de Película.
- El listado de películas mostraría simplemente el nombre de las películas de una búsqueda basada en un cuadro de texto donde el usuario pueda introducir el texto de búsqueda del nombre de la película.
- Desde el listado de películas (que sólo son los nombres) al seleccionar una se mostraría el detalle de la misma: nombre, fecha, idioma, descripción y cualquier otro campo que quieras adicionalmente.
- Este ejercicio nos gustaría poder verlo publicado, además, en GitHub (hazlo de forma pública y así podemos revisarlo desde Okode).
- El framework de desarrollo en frontal debe ser Angular en sus últimas versiones

