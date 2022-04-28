/**
 * 1. create angular project ng new [name], create a component - ng g c [name component].
 * 2. create a module - ng g m [name module].
 * 3. create a component of module - ng g c [component name] --module=[module name].
 * 4. create a module routing file - ng g m home-routing --flat --module=[module name].
 * 5. create a service - ng g service [name service].
 * 6. CAREFULL ERROR, listmovie component(parent component), movie component(child component), if u wanna use child component
 * at listmovie module u have to delare parent component.  declarations: [ListMoviesComponent,MovieComponent].
 * 7. CAREFULL ERROR - forRoot use at general module (app module), forChild use at child routing.
 */