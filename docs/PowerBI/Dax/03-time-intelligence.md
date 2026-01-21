---
title: Time Intelligence (mémo)
description: YTD/MTD, N-1, rolling, dates, bonnes pratiques de calendrier.
---

## Pré-requis
Avoir une table de dates dédiée : `'DimDate'` avec une colonne date continue (sans trous) et marquée comme table de dates (si possible).

## Patterns fréquents

### YTD / MTD
```dax
Sales YTD =
TOTALYTD ( [Total Sales], 'DimDate'[Date] )
```
```dax
Sales MTD =
TOTALMTD ( [Total Sales], 'DimDate'[Date] )
```

### N-1 (SAMEPERIODLASTYEAR)
```dax
Sales LY =
CALCULATE ( [Total Sales], SAMEPERIODLASTYEAR ( 'DimDate'[Date] ) )
```

###Variation vs N-1
```dax
Sales YoY =
[Total Sales] - [Sales LY]
```
```dax
Sales YoY % =
DIVIDE ( [Total Sales] - [Sales LY], [Sales LY] )
Rolling 12 (pattern)
```

```dax
Sales Rolling 12 =
CALCULATE (
  [Total Sales],
  DATESINPERIOD ( 'DimDate'[Date], MAX ( 'DimDate'[Date] ), -12, MONTH )
)
```

### Bonnes pratiques
Éviter la “time intelligence” si ta table date n’est pas propre (sinon résultats incohérents).
Toujours baser ces mesures sur la même colonne 'DimDate'[Date].