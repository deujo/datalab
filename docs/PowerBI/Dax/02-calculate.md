---
title: CALCULATE & contextes (mémo)
description: Comprendre les contextes et les filtres avec CALCULATE.
---

## Idée clé
`CALCULATE` évalue une expression en **modifiant le contexte de filtre**.

## Mesure de base
```DAX
Total Sales =
SUM ( Sales[Amount] )
```

## Forcer un filtre
```DAX
Sales France =
CALCULATE (
  [Total Sales],
  Customers[Country] = "France"
)
```

## Enlever des filtres (ALL)
```DAX
Sales All Countries =
CALCULATE (
  [Total Sales],
  ALL ( Customers[Country] )
)
```

## Conserver le filtre utilisateur mais “élargir” (ALLSELECTED)
Utile pour des % sur la sélection.

```DAX
Sales AllSelected =
CALCULATE (
  [Total Sales],
  ALLSELECTED ( Customers )
)
```

### FILTER (quand il faut une condition complexe)
```DAX
Sales High Value =
CALCULATE (
  [Total Sales],
  FILTER ( 'Sales', 'Sales'[Amount] > 1000 )
)
```

