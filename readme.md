# Slider Simple en JavaScript Vanilla

## Fonctionnalités

- Navigation entre les slides via des boutons "Suivant" et "Précédent".
- Pagination permettant de sauter directement à un slide spécifique.

## Structure du Code

Le slider est implémenté en suivant ces étapes clés :

1. **Récupération des éléments dans le DOM** : Sélection des éléments nécessaires (slider, slides, boutons).
2. **Création de l'index des slides** : Gestion de l'index pour suivre le slide actuel.
3. **Écouteurs d'événements sur les boutons "Suivant" et "Précédent"** : Réaction aux clics sur les boutons pour changer de slide.
4. **Fonction `displaySlide`** : Logique pour afficher le slide correspondant à l'index donné.
5. **Création des boutons de pagination** : Ajout de boutons pour permettre de naviguer directement à un slide spécifique.
6. **Gestion des boutons de pagination non présents dans le DOM initial** : Stockage de ces boutons dans un tableau pour pouvoir y accéder plus tard.
7. **Ajout des boutons de pagination au tableau** : Pour permettre leur manipulation ultérieure.
8. **Écouteurs d'événements sur les boutons de pagination** : Réaction aux clics sur ces boutons pour changer de slide.
