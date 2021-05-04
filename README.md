# Travilias - admin

Ce projet sert d'interface d'administration à l'application Travilias (voir : [documentation travilias](./docs/Travilias.md))

Une preview de l'application est disponible : ![Preview](https://travilias-admin.herokuapp.com)

## Mise en place

L'application est entièrement disponible en ligne, cependant vous pouvez aussi la déployer en local. 

### Déployer le front-end
Pour déployer le client vue, il vous suffit de cloner le repository puis d'installer les dépendances avec un `npm install`. Les variables d'environment par défaut sont situées dans le fichier `.env`. Elles permettent de se connecter par défaut au Backend sur Heroku et au *Keycloak* sur *Azure App Service*.

### Déployer le Backend
Pour utiliser le Backend en local, nous vous invitons à regarder notre documentation sur le repository suivant : [https://github.com/Travilias/Travilias-admin-server](https://github.com/Travilias/Travilias-admin-server)

### Déployer Keycloak
Pour deployer keycloak, nous vous invitons à utiliser docker (voir la documentation sur [Docker Hub](https://hub.docker.com/r/jboss/keycloak/))

## description des pages

Ce projet est une interface d'admin pour une autre application de partage de photos, ainsi, il existe 4 pages pour gérer différents aspect de l'application :

### Suggestions

Il s'agit de la page d'arrivée. Elle permet de voir les différentes suggestions faites par les utilisateurs et d'y répondre (attention, une fois une réponse données, elle est envoyée par mail et donc pas modifiable)

### Posts

Sur cette page, on peut voir l'intégralité des posts de l'application (si l'application a du succès, le but sera d'affiher seulement ceux qui ont été signalés). On peut voir toutes les informations à propos du post. On peut aussi décider de supprimer ou d'empêcher la diffusion du post en signalant un manquement au règlement (copyright, violence...). Enfin on peut voir si d'autres utilisateurs ont déjà signalé ces posts pour ces même raisons.

### Images

Cette page ressemble un peu au post, à la différence que ce sont les images envoyés par les utilisateurs que l'on voit, et que l'on peut contrôler.

### Ban liste

Cette page permet de voir, d'ajouter et de supprimer des mots ou expressions interdits (le but est à terme que les posts qui contiennent ces mots ou expressions ne soient pas publiquement visible, voire même supprimés)

## Contributeurs

- **Anthony Quéré** : Développeur
- **Kilian Debraux** : Développeur

## Architecture
![Schema d'architecture](./docs/architecture.png)

Afin de minimiser les coûts de mise en production, l'application est déployé à travers divers services. Les parties Backend et Front end sont disponibles sur Heroku. Le serveur d'authentification Keycloak tourne sur Azure App service et l base de donnée est gérée par MongoDB Atlas. 

Suite à des problèmes SSL côté Azure, la connection au serveur d'authentification n'est pas suffisamment sécurisée, c'est pourquoi, **nous recommandons l'utilisation de mot de passe non sensibles pour la création de compte**. 

Nous n'avons pas eu le temps d'ajouter Keycloak dans l'authentification du Backend. Cependant, le code vue pourrait très simplement s'y authentifier car le token d'authentification est accessible par le store VueX.

## Choix technologique
Nous avons développé un Backend en nodejs/express car c'est une technologie que nous connaissons bien. Notre architecture s'inspire largement de l'architecture *Clean Code* popularisée par *Uncle Bob*. Nous avons utilisé une base de donnée mongodb car elle est simple à mettre en place, à utiliser et à déployer.

Nous avons utilisé un serveur d'authentification Keycloak car c'est un système simple à mettre ne place et proposant beaucoup de services par défaut permettant d'implémenter simplement des OAuth2 avec Google et GitHub par exemple ou encore des connections par SAML ce qui pourrait être très intéressant pour une utilisation en entreprise. Afin de simplifier le développement et de palier à nos problèmes de ssl Azure, nous utilisons le service classique de keycloak permettant de créer un compte avec un username et un mot de passe.

## Carte google maps

**Pour utiliser l'api google maps, une API KEY est nécessaire, si vous n'en avez pas, vous pouvez nous en demander une !**
