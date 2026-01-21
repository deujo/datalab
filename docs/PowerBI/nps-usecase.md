---
id: nps-template
title: 📊 Template NPS (Satisfaction Client)
tags: [powerbi, dax, kpi]
---

# Net Promoter Score (NPS) Dashboard

Le NPS mesure la fidélité client sur une échelle de -100 à +100.
**La question :** "Sur une échelle de 0 à 10, recommanderiez-vous ce produit ?"

## Le Modèle de Données
Il vous faut une table `Survey` avec une colonne `Score` (0-10).

## Les Mesures DAX

### 1. Classification
Ne faites pas de colonne calculée, faites une mesure ou une table de segmentation.

* **Promoters (9-10)**
* **Passives (7-8)**
* **Detractors (0-6)**

### 2. Le calcul du Score
```dax
NPS Score = 
VAR TotalReponses = COUNTROWS('Survey')
VAR Promoters = CALCULATE(COUNTROWS('Survey'), 'Survey'[Score] >= 9)
VAR Detractors = CALCULATE(COUNTROWS('Survey'), 'Survey'[Score] <= 6)

VAR PctPromoters = DIVIDE(Promoters, TotalReponses)
VAR PctDetractors = DIVIDE(Detractors, TotalReponses)

RETURN
    (PctPromoters - PctDetractors) * 100
```