# Projet KASA - Site d'Agence Immobilière

## Objectif

Développer une application web pour une agence immobilière permettant d'afficher la liste des logements et leurs détails.

## Technologies et Contraintes

- **Framework** : React avec Vite
- **Routing** : React Router
- **API des logements** :
  - Liste des logements : `https://titi.startwin.fr/logements`
  - Détails d'un logement : `https://titi.startwin.fr/logements/{identifiant}`
- **Maquette** : [Lien Figma](https://www.figma.com/design/18JBuOu3AvMWSni1JgX6TT/Kasa-FR?node-id=0-1&p=f&t=7O9vaSJoMpMFg88u-0)

## Tâches

### 1. Initialisation du projet

- Créer un projet avec Vite.
- Installer les dépendances requises, dont React Router.

### 2. Structure du projet

Le projet doit contenir les dossiers suivants :

- `components/` : pour les composants réutilisables
- `pages/` : pour les pages principales de l'application
- `assets/` : pour les images et les styles

### 3. Mise en place du routing

- Créer une route pour la page d'accueil affichant la liste des logements.
- Créer une route dynamique pour la page détail d'un logement.
- Gérer les pages inexistantes avec une page 404.

### 4. Consommation de l'API

- Récupérer la liste des logements et l'afficher dynamiquement.
- Récupérer les détails d'un logement à partir de son identifiant.

### 5. Affichage des données

- Afficher les informations principales des logements sur la page d'accueil.
- Afficher les détails complets d'un logement sur sa page dédiée.

### 6. Gestion des erreurs

- Ajouter un chargement en cas de requête en attente.
- Gérer les erreurs en cas de logement introuvable.
- Implémenter une redirection vers une page 404 pour les routes inconnues.

### 7. Améliorations possibles

- Intégrer un carrousel pour afficher plusieurs images.
- Ajouter un système de filtrage et de recherche.
- Améliorer le design en respectant la maquette Figma.

## Livrables

- Un projet fonctionnel respectant les consignes ci-dessus.
- Un code propre et bien structuré.
- Une interface utilisateur conforme à la maquette.

**Bon courage ! 🚀**
