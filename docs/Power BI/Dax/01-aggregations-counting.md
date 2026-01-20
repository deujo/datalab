---
title: Agrégations & Comptage (fondations)
description: Les fonctions de base pour agréger, compter et éviter les doublons.
---

Toujours privilégier des **mesures explicites** plutôt que du glisser-déposer de colonnes.

## Fonctions essentielles

| Fonction | Description | Exemple |
| :--- | :--- | :--- |
| `SUM` | Somme simple | `SUM('Sales'[Amount])` |
| `AVERAGE` | Moyenne arithmétique | `AVERAGE('Sales'[Price])` |
| `MIN` / `MAX` | Min/Max | `MAX('Sales'[OrderDate])` |
| `COUNTROWS` | Compte les lignes (souvent le plus performant) | `COUNTROWS('Sales')` |
| `COUNT` | Compte les valeurs numériques non vides | `COUNT('Sales'[Quantity])` |
| `COUNTA` | Compte les valeurs non vides | `COUNTA('Customers'[Email])` |
| `DISTINCTCOUNT` | Compte les valeurs distinctes | `DISTINCTCOUNT('Sales'[OrderNumber])` |

### Astuce : compter sans doublons
```dax
Unique Orders =
DISTINCTCOUNT ( 'Orders'[OrderID] )
```

### Agrégations “itératives” (quand une simple SUM ne suffit pas)

| Fonction  | Quand l’utiliser                                 | Exemple                                              |
| :-------- | :----------------------------------------------- | :--------------------------------------------------- |
| `SUMX`    | Somme sur une expression (ligne à ligne)         | `SUMX('Sales', 'Sales'[Qty] * 'Sales'[UnitPrice])`   |
| `AVERAGEX`| Moyenne sur une expression                       | `AVERAGEX('Sales', 'Sales'[Amount])`                 |
| `COUNTX`  | Compter selon une expression (ligne à ligne)     | `COUNTX('Sales', IF('Sales'[Amount]>100, 1, BLANK()))`|
| `MAXX`    | Maximum d'une expression sur chaque ligne        | `MAXX('Sales', 'Sales'[Discount])`                   |