# Nodus Chalenge

### Uso
```bash
npm install
npm start
```
### Arquitectura
Los componentes de React se crearon usando funciones para así tener acceso a los hooks, principalmente useDispatch y useSelector.

Para el manejo del state se utilizó Redux con el Patrón Ducks.

Dentro de la carpeta utils se crearon archivos de configuración para mantener los componentes en un mayor nivel de abstracción respecto a los datos.

Para la métrica de datos se añadió Google Analytics el cuál sólo estaría disponible en modo producción.

### Diseño
Para el diseño de los componentes se utilizó la librería material-ui. 

Teniendo en cuenta el contexto de este chalenge, se tomó el diseño como una prioridad mucho menor de la que se consideraría en un caso real, por motivos de tiempo.

### Sobre appConfig.json
Dentro de los archivos de configuración el más destacable es appConfig.json.
Su proposito es mantener un proyecto flexible.

Por ejemplo en caso que se deba actualizar un endpoint bastaría con modicarlo desde aquí, también se pueden agregar nuevos torneo y secciones a la barra de navegación con sus propias configuraciones.

La mejor forma de utilizar este archivo es alojandolo en una api y consumiendolo al inicio de la App. De esta forma en caso de haber modificaciones, bastaría con hacerlo desde el backend y no sería necesarío deployar toda la Aplicación por un cambio menor como podría ser cambiar una descripción en un item.
