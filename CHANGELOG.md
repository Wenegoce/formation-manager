# Changelog

Toutes les modifications notables du projet Formation Manager sont documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/).

---

## [1.5.3] - 2025-10-24

### Modifié
- Suppression de l'heure de réponse dans les envois vers Make
- Suppression de la colonne "Heure réponse" dans l'export Excel
- Seule la date de réponse est conservée

---

## [1.5.2] - 2025-10-24

### Modifié
- Amélioration du template email : lien directement après l'icône 👉
- Remplacement de "Statut" par "Présence" dans le récapitulatif des emails

### Corrigé
- Validation renforcée de l'email des stagiaires
- Vérification obligatoire de la présence de l'email

---

## [1.5.1] - 2025-10-24

### Modifié
- Remplacement de "Absent excusé" par "Partielle" dans les options de présence
- Nouveau template email avec structure améliorée
- Page dédiée à l'envoi des emails après validation des présences

### Amélioré
- Séparation claire entre l'étape "Présences" et l'étape "Envoi emails"
- Affichage du statut de présence dans la liste d'envoi

---

## [1.5.0] - 2025-10-24

### Ajouté
- Intégration avec Make via webhook
- Authentification API avec header `x-make-apikey`
- Configuration de la clé API dans les paramètres
- Section "Version" dans l'onglet Paramètres avec copyright
- Validation de date : maximum 7 jours avant aujourd'hui

### Supprimé
- Champ "Email du formateur" (non nécessaire)
- Zone de test de la vue stagiaire (inutile)
- Toutes les références à "Power Automate" (remplacées par "Make")

### Modifié
- Architecture de synchronisation : passage à Make
- Interface des paramètres adaptée pour Make
- Messages d'information mis à jour

### Corrigé
- Messages d'erreur qui persistent après correction
- Suppression du fond rouge sur les champs en erreur
- Validation de l'email des stagiaires renforcée
- Effacement automatique des erreurs lors de la saisie

---

## [1.4.1] - 2025-10-24 (version précédente)

### Fonctionnalités principales
- Gestion complète des formations
- Suivi des présences
- Enquête de satisfaction stagiaires
- Export Excel automatique
- Intégration Power Automate / SharePoint
- Stockage local (localStorage)
- Interface responsive

### Composants
- Espace Formateur (préparation et suivi)
- Espace Stagiaire (attestation et évaluation)
- Onglet Paramètres (configuration webhook)
- Onglet Export & Backup

---

## Roadmap future (suggestions)

### À considérer
- [ ] Mode hors ligne complet
- [ ] Import de listes de stagiaires (CSV/Excel)
- [ ] Modèles d'emails personnalisables
- [ ] Statistiques et tableaux de bord
- [ ] Export PDF des attestations
- [ ] Rappels automatiques pour stagiaires
- [ ] Multi-langues (EN, ES)
- [ ] Thèmes personnalisables
- [ ] Authentification formateur

---

## Notes de version

### Compatibilité
- Navigateurs modernes requis (Chrome, Firefox, Safari, Edge)
- Responsive design (desktop, tablette, mobile)
- localStorage requis pour le stockage local

### Dépendances externes
- SheetJS (XLSX) v0.18.5 pour l'export Excel
- Aucune autre dépendance

### Sécurité
- Authentification API Make via header personnalisé
- Validation de tous les champs obligatoires
- Liens uniques par stagiaire
- Stockage local sécurisé
