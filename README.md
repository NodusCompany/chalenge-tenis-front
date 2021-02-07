# Instrucciones

Sobre la carpeta del proyecto (challenge-node-tenis)
`run-dev.sh`

# Challenge torneos tenis

Usando los siguientes endpoints, te pedimos que nos digas de cada [Grand Slam](<https://es.wikipedia.org/wiki/Grand_Slam_(tenis)>), quién es el jugador que mas veces lo ganó y cuando haces un click sobre el jugador te diga cuando fue la ultima vez que lo ganó.

Usando el comando ./run-dev.sh la api va a empezar a correr localmente en http://localhost:4000
Para cada grand slam los endpoints son:

  /winner/us-open\
  /winner/australian-open\
  /winner/wimbledon\
  /winner/roland-garros

Para obtener la última vez que lo ganó el jugador, se realiza un POST con el body {player: "Nombre"} (ej. {player: "Novak Djokovic"}). Los endpoints son:

  /winner/us-open/date\
  /winner/australian-open/date\
  /winner/wimbledon/date\
  /winner/roland-garros/date


### Consignas y Tips

- La resolución debe ser un fork de este repo (Se evalúa el uso de GIT).
- El frontend puede ser tanto en React como en vanilla js.
- El diseño y usabilidad quedan a tu criterio.
- Suma que el sitio tenga buena performance!

### El extra mile

Si se te ocurre alguna otra cosa para agregarle al challenge, queres hacerla y mostrarnos nos ayudarías a mejorar este ejercicio.


## Para correr el Front
```
  cd front
  npm install
  npm start
```
El front corre con React JS creado con create-react-app, corre en el puerto 3000
### Comentarios

Ranking sorteado por cantidad

Fechas ordenadas de menor a mayor

El método del server para obtener la fecha se cambió a GET

Se cachea llamado de fecha cuando se hace clic en tenista

En SpreadsheetService.js getWinner devuelve (count) la cantidad de torneos ganados en general

- En SpreadsheetService.js hace dos loops seguidos 'for (const item in winners)', con uno alcanzaba (pedir que corrija en vivo)
