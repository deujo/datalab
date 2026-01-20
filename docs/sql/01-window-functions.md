---
title: Window functions (ROW_NUMBER, LAG/LEAD, running total)
description: Patterns SQL incontournables pour analytics et data engineering.
---
## Window Functions (Fonctions de Fenêtrage)
C'est l'outil le plus puissant pour le nettoyage de données sans faire de `GROUP BY` destructif.

### Dédoublonnage (Deduplication)
Garder uniquement la ligne la plus récente pour chaque ID.

```sql
SELECT *
FROM (
    SELECT 
        *,
        ROW_NUMBER() OVER(PARTITION BY user_id ORDER BY updated_at DESC) as rn
    FROM raw_users
) t
WHERE rn = 1
```
### Lag & Lead (Comparaison lignes précédentes)
Calculer la croissance sans jointure complexe.
```sql
SELECT 
    month,
    revenue,
    LAG(revenue) OVER(ORDER BY month) as prev_month_revenue,
    revenue - LAG(revenue) OVER(ORDER BY month) as growth
FROM monthly_sales
```
