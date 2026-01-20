---
title: Fonctions utiles pour Data Engineers
description: Fonctions SQL courantes
---

## Conversion / typage
- `CAST` / `CONVERT`
```sql
SELECT CAST(amount AS DECIMAL(18,2)), CONVERT(DATE, created_at);
```

## Safe conversion (T-SQL) 
```sql
SELECT TRY_CAST(value AS INT) AS value_int;
```

## Date / time
Troncature / partie :
```sql
SELECT CAST(created_at AS DATE) AS day, DATEPART(hour, created_at) AS hour;
```

Ajouter/soustraire jours :
```sql
SELECT DATEADD(day, -1, GETDATE());
```

Différence entre dates :
```sql
SELECT DATEDIFF(day, start_date, end_date) AS days_between;
```
## String
LEFT, RIGHT, SUBSTRING, CHARINDEX, REPLACE, TRIM
```sql
SELECT LEFT(name, 30), REPLACE(description, CHAR(10), ' ');
```

## gestion des NULL
COALESCE / ISNULL
```sql
SELECT COALESCE(email, 'unknown@example.com') FROM customers;
```sql

