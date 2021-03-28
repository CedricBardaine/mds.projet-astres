# mds.projet-astres

Front app to visualise astral bodies data from https://api.le-systeme-solaire.net/rest/bodies/ (integrated as Nuxt $content). 

## Détails du projet (fr)
### Contexte du projet
Afin de pouvoir évaluer vos niveau d’acquisition de savoirs, il vous est demandé de réaliser une application front end en lien avec le système solaire.
S’agissant essentiellement d’une application à destination pédagogique, il n’y aura nul besoin d’avoir de gestion de compte utilisateur et l’application ne fonctionnera que avec de la lecture de data issue d’une API. 
Cette application devra utiliser la technologie Vue JS, NuxtJS ou NextJS. 
Il n’est pas attendu de réaliser une application backend.

### Résultats attendus
- Liste des astres : Une page listant l’ensemble des astres doit être disponible avec les fonctionnalités suivantes
  - [x] Filtre sur des critères tels que si c’est une planète (isPlanet) ou non
  - [x] Filtre sur le fait d’avoir des lunes
- Page de l’astre
  - [x] L’ensemble des infomations liées à l’astre doivent être affichées au sein de cette page.
  - [x] Si l’astre est une planète, possédant des lunes, un accès rapide vers ses lunes doit être disponible.  
  --> L'application fait juste un petit détour vers la page d'accueil car l'architechture de l'application fait que les données sont injectées dans la page d'accueil et les envoies à la page détails, mais les détails pour chaque lune ne le sont pas. 
- Page des favoris
  - [x] Il doit être possible de spécifier des astres en tant que favoris et de le retirer de la liste des favoris. 
  - [x] Lorsque vous rajoutez un astre en favori, une notification doit apparaître pour vous le signaler.
  - [x] L’affichage des astres sur cette page réutilise l’affichage en liste de la page ‘liste des astres’
  --> les favoris sont affichés sur la même page. 


## Run on localhost 

`npm i && npm run dev` 

<br>

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).