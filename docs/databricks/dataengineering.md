---
id: academy-notes
title: 🎓 Databricks Academy Cheat Sheet
description: Résumé des concepts clés de la certification Data Engineer Associate.
tags: [databricks, spark, delta, certification]
sidebar_position: 1
---

# Databricks Data Engineer : L'essentiel

Résumé technique basé sur le [Learning Plan Data Engineer](https://customer-academy.databricks.com/).

## 1. Architecture Medallion (Multi-hop)
L'architecture standard pour organiser la qualité des données dans le Lakehouse.

* **🥉 Bronze (Raw) :** Données brutes, ingérées "telles quelles". On garde l'historique complet.
* **🥈 Silver (Cleaned) :** Données nettoyées, dédublonnées, types validés. La source de vérité pour les Data Analysts.
* **🥇 Gold (Curated) :** Données agrégées, prêtes pour le business (Power BI, ML).

## 2. Delta Lake : ACID sur le Lac
Delta Lake apporte la fiabilité des bases de données au Data Lake.

### Commandes clés
* **OPTIMIZE :** Compacte les petits fichiers (small files problem) en plus gros fichiers.
    ```sql
    OPTIMIZE table_name ZORDER BY (column_name)
    ```
* **VACUUM :** Supprime les vieux fichiers non utilisés (Attention : on ne peut plus faire de Time Travel après).
    ```sql
    VACUUM table_name RETAIN 168 HOURS; -- Garde 7 jours
    ```
* **Time Travel :** Requêter une ancienne version.
    ```sql
    SELECT * FROM table_name VERSION AS OF 3;
    -- ou
    SELECT * FROM table_name TIMESTAMP AS OF '2023-01-01'
    ```

[Documentation Delta Lake](https://docs.databricks.com/en/delta/index.html)

## 3. Auto Loader (Ingestion Streaming)
La méthode recommandée pour ingérer des fichiers (JSON, CSV, Parquet) depuis le Cloud Storage (ADLS/S3) de manière incrémentale.

```python
# Syntaxe PySpark pour Auto Loader (cloudFiles)
(spark.readStream
  .format("cloudFiles")
  .option("cloudFiles.format", "json")
  .option("cloudFiles.schemaLocation", "/path/to/schema")
  .load("/path/to/source/data")
  .writeStream
  .option("checkpointLocation", "/path/to/checkpoint")
  .table("bronze_table")
)