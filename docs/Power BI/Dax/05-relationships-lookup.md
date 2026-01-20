---
title: Relations & Lookup (RELATED, LOOKUPVALUE, USERELATIONSHIP)
description: Récupérer des attributs, activer une relation inactive, et gérer les cas complexes.
---

## RELATED (modèle en étoile)
Utilise `RELATED` quand tu as une relation de la table de faits vers une dimension.
```dax
Sales[Customer Country] =
RELATED ( 'Customers'[Country] )
```

## LOOKUPVALUE (à utiliser avec prudence)
Utile si pas de relation (ou besoin ponctuel), mais attention aux ambiguïtés.

```dax
Customer Country =
LOOKUPVALUE (
  'Customers'[Country],
  'Customers'[CustomerID], 'Sales'[CustomerID]
)
```
## USERELATIONSHIP (relation inactive)
Ex : une table a OrderDate et ShipDate, une seule relation active possible.

```dax
Sales by Ship Date =
CALCULATE (
  [Total Sales],
  USERELATIONSHIP ( 'Sales'[ShipDate], 'DimDate'[Date] )
)
```

## CROSSFILTER (cas avancé)
Permet de modifier temporairement la direction de filtre (à manier avec précaution).

```dax
Sales Crossfilter =
CALCULATE (
  [Total Sales],
  CROSSFILTER ( 'DimA'[Key], 'Fact'[Key], BOTH )
)
```

## Reco modèle
Préférer une relation + RELATED plutôt que LOOKUPVALUE.
Sur Power BI : vise une étoile simple, cardinalités cohérentes, directions maîtrisées.