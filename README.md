#t3_Weather
==================================================

Permet l'intégration de la météo avec la libraire javascript simpleweather.js

##Minimal Dependencies
====================

* TYPO3 CMS 7.6 or greater

##Quick Install Guide
===================

Une variable typoscript doit être déclaré avec le WOIED de la ville.

##Usage
===================
Pour les codes à utiliser dans la template afin de personnaliser l'affichage:
[SimpleWeather Usage](http://simpleweatherjs.com/#usage)

Pour récuperer le Woeid d'une commune
[http://woeid.rosselliot.co.nz/](http://woeid.rosselliot.co.nz/)

Pour déclarer le Woeid à utiliser, il faut ajouter dans les constantes la variable suivante:
```
page.weather.woeid = XXXXXX
```
Pour utiliser un nouveau template de mise en forme de la météo, il est possible de définir un autre fichier javascript
```
page.weather.jsWeather = fileadmin/Collectivites/Serignac/Resources/Public/Js/weather.js
```
##Examples
===================
[Exemples d'affichage](https://github.com/CDG47-Dev/t3_Weather/tree/master/Examples)
