¿por qué el 404 sí tiene encabezado y pie?
se muestra por la ruta para paginas no encontradas esta dentro del layout en app.tsx,
layout.tsx siempre dibuja el encabezado y pie, usa el espacion de <outlet/> para mostrar
la pagina que corresponde


¿qué cambia en la pestaña Red si usas <a href> en lugar de Link? Muéstralo con capturas
le pide que cargue la direccion desde cero, recarga el documento y la aplicacion vuelve a iniciarse
a diferencia de react que cambia de ruta dentro de la app sin recargar el documento


¿en qué tipo de dato llega el id de la URL y qué pasa si no lo conviertes?
en un tipo de dato string, si no se convierte podria haber errores de conversiones
detectarlo como un "12" en vez de un 12, etc.



¿qué pasa al ir de /clases/1 a /clases/2 si el id no está en las dependencias del efecto?
si no esta en las dependecias, puede que la aplicacion siga mostrando la clase 1 aunque la url
ya tenga el id de la clase 2