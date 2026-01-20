---
title: Texte & utilitaires (mémo)
description: CONCATENATE, FORMAT, SWITCH, SELECTEDVALUE, etc.
---

## Texte
### Concaténer
```dax
Full Name =
'Customers'[FirstName] & " " & 'Customers'[LastName]
```

### Concaténer une liste (très utile dans des tooltips)
```dax
Selected Products =
CONCATENATEX ( VALUES ( 'Products'[Name] ), 'Products'[Name], ", " )
```

##Utilitaires
### SWITCH (remplacer des IF imbriqués)
```dax
Segment Label =
SWITCH (
  TRUE (),
  [Total Sales] >= 100000, "Top",
  [Total Sales] >= 50000, "Mid",
  "Long tail"
)
```
### FORMAT (attention performance)
```dax
Sales Formatted =
FORMAT ( [Total Sales], "#,##0" )
```
### SELECTEDVALUE
```dax
Selected Year =
SELECTEDVALUE ( 'DimDate'[Year], "ALL" )
```
