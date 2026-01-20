---
title: Gestion du BLANK (pas de vide)
description: COALESCE, IF, affichage, et logique métier quand une mesure renvoie BLANK().
---

## Pourquoi c’est important
`BLANK()` impacte :
- l’affichage des visuels (valeurs non affichées),
- les totaux,
- certaines comparaisons.

## Remplacer BLANK par 0
```dax
Sales (No Blank) =
COALESCE ( [Total Sales], 0 )
```
### Forcer un texte quand BLANK
```dax
KPI Label =
IF ( ISBLANK ( [Total Sales] ), "No data", "OK" )
### Éviter les divisions par zéro
Toujours préférer DIVIDE.
```
```dax

Margin % =
DIVIDE ( [Margin], [Total Sales] )
```
### Pièges
Remplacer tout en 0 peut “mentir” : parfois BLANK est le bon signal (ex : absence de données).
Gérer l’affichage au niveau visuel (format / filtres) vs au niveau mesure : décider selon le besoin métier.