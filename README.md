# 📚 Formation Manager

**Version 1.5.3** | © 2025 WeNégoce

Solution de gestion des formations avec suivi des présences et enquêtes de satisfaction en temps réel.

---

## 📋 Description

Formation Manager est une application web autonome permettant aux formateurs de :
- Préparer et enregistrer les détails d'une formation
- Suivre les présences des stagiaires
- Générer automatiquement des liens personnalisés pour chaque stagiaire
- Collecter les évaluations de satisfaction
- Synchroniser automatiquement les données avec SharePoint via Make
- Exporter les données au format Excel

## ✨ Fonctionnalités principales

### 👨‍🏫 Espace Formateur
- Création de session de formation avec informations détaillées
- Gestion de la liste des stagiaires (jusqu'à 10)
- Enregistrement des présences (Présent / Absent / Partielle)
- Ajout de commentaires personnalisés par stagiaire
- Génération de liens uniques pour chaque participant
- Envoi d'emails individuels avec les liens personnalisés

### 👤 Espace Stagiaire
- Attestation de présence personnalisée
- Formulaire d'évaluation de satisfaction (5 questions)
- Notation par étoiles (1 à 5)
- Commentaires et suggestions
- Interface responsive et intuitive

### ⚙️ Configuration & Intégration
- **Intégration Make** : Envoi automatique des données vers SharePoint
- **Authentification API** : Sécurisation via clé API personnalisée
- **Configuration webhook** : URL Make configurable
- **Synchronisation automatique** : Après chaque évaluation stagiaire

### 📦 Export & Backup
- Export Excel de toutes les formations
- Backup automatique après chaque évaluation
- Purge des formations > 13 mois
- Stockage local (localStorage)

---

## 🚀 Installation

### Prérequis
- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Aucune installation serveur requise
- Compte Make (pour la synchronisation SharePoint)

### Étapes d'installation

1. **Télécharger le fichier**
   ```bash
   git clone https://github.com/votre-organisation/formation-manager.git
   cd formation-manager
   ```

2. **Ouvrir l'application**
   - Double-cliquer sur `Formation-Manager-v1_5_3.html`
   - Ou héberger sur un serveur web

3. **Configuration Make (optionnel mais recommandé)**
   - Aller dans l'onglet "⚙️ Paramètres"
   - Entrer l'URL du webhook Make
   - Configurer la clé API (par défaut : `formation-manager-key`)
   - Activer la synchronisation SharePoint

---

## 📖 Guide d'utilisation

### 1️⃣ Créer une formation

1. Aller dans l'onglet **"👨‍🏫 Espace Formateur"**
2. Remplir les informations :
   - Raison sociale du client *
   - Thème de la formation *
   - Référence JIRA (optionnel)
   - Nom du formateur *
   - Date de la formation * (max 7 jours avant aujourd'hui)
   - Type : Présentiel ou Visio
   - Horaires de début et fin *
3. Ajouter les stagiaires (nom + email obligatoires)
4. Cliquer sur **"📝 Enregistrer la formation"**

### 2️⃣ Enregistrer les présences

1. Après l'enregistrement, compléter pour chaque stagiaire :
   - Présence (Présent / Absent / Partielle)
   - Commentaire du formateur (optionnel)
2. Cliquer sur **"📧 Générer et envoyer les liens stagiaires"**

### 3️⃣ Envoyer les liens

1. Réviser le modèle d'email (personnalisable)
2. Cliquer sur **"📧 Envoyer l'email"** pour chaque stagiaire
3. Le client email s'ouvre avec le message pré-rempli

### 4️⃣ Stagiaires : Remplir l'évaluation

Les stagiaires reçoivent un lien unique par email :
1. Cliquer sur le lien personnalisé
2. Consulter l'attestation de présence
3. Remplir l'enquête de satisfaction (5 questions)
4. Valider avec **"📤 Envoyer mon évaluation"**

Les données sont automatiquement :
- Envoyées vers SharePoint (si configuré)
- Sauvegardées localement
- Exportées en Excel (backup automatique)

---

## 🔧 Configuration Make / SharePoint

### Créer le scénario Make

1. **Créer un webhook** dans Make :
   - Module : "Webhooks > Custom webhook"
   - Copier l'URL générée

2. **Ajouter l'authentification API** :
   - Dans Make, ajouter un filtre qui vérifie le header `x-make-apikey`
   - Valeur attendue : votre clé API (ex: `formation-manager-key`)

3. **Connecter à SharePoint** :
   - Ajouter un module "SharePoint > Create an item"
   - Mapper les champs du webhook vers les colonnes SharePoint

### Structure des données envoyées

```json
{
  "formationId": "1729779600000",
  "date": "24/10/2025",
  "client": "Nom du client",
  "formation": "Thème de la formation",
  "referenceJira": "TIC-123",
  "formateur": "Nom du formateur",
  "type": "Présentiel",
  "heureDebut": "09:00",
  "heureFin": "17:00",
  "stagiaireNom": "Nom Prénom",
  "stagiaireEmail": "email@exemple.fr",
  "presence": "Présent",
  "commentaireFormateur": "Commentaire...",
  "q1": 5,
  "q2": 4,
  "q3": 5,
  "q4": "Très à l'aise",
  "q5": "Adaptée",
  "suggestions": "Suggestions...",
  "commentaire": "Commentaire...",
  "noteGlobale": 4.7,
  "dateReponse": "24/10/2025"
}
```

---

## 📊 Structure des données

### Stockage local (localStorage)
- Clé : `wenegoce_formations`
- Format : JSON
- Contenu : Tableau de toutes les formations

### Export Excel
Colonnes par formation :
- Date, Client, Formation, Référence JIRA
- Formateur, Type, Horaires
- Pour chaque stagiaire (1 à 10) :
  - Nom, Email, Présence, Commentaire formateur
  - Questions 1-5, Suggestions, Commentaire
  - Note globale, Date de réponse

---

## 🔐 Sécurité

- **Authentification API** : Header `x-make-apikey` requis
- **Stockage local** : Données sauvegardées dans le navigateur (localStorage)
- **Liens uniques** : Chaque stagiaire a un lien personnel non devinable
- **Validation** : Contrôles sur tous les champs obligatoires

### ⚠️ Important
- Les données sont stockées **localement** dans le navigateur
- Effectuer des exports Excel réguliers pour backup
- Purger les formations anciennes (> 13 mois) régulièrement
- La synchronisation Make nécessite une connexion internet

---

## 📱 Compatibilité

- ✅ Chrome / Edge (recommandé)
- ✅ Firefox
- ✅ Safari
- ✅ Responsive : Desktop, Tablette, Mobile

---

## 🛠️ Support technique

### Problèmes courants

**Les données ne s'envoient pas vers SharePoint**
- Vérifier l'URL du webhook Make
- Vérifier la clé API
- S'assurer que la synchronisation est activée
- Vérifier la connexion internet

**Les emails ne s'envoient pas**
- Le bouton ouvre le client email par défaut
- S'assurer qu'un client email est configuré (Outlook, Mail, Gmail)
- Copier manuellement le lien si nécessaire

**Les données disparaissent**
- Les données sont en localStorage (propres au navigateur)
- Ne pas effacer les données du navigateur
- Faire des exports Excel réguliers

---

## 📝 Changelog

### Version 1.5.3 (24/10/2025)
- ✅ Suppression de l'heure de réponse dans les exports et envois Make

### Version 1.5.2 (24/10/2025)
- ✅ Amélioration du template email
- ✅ Correction de l'affichage "Présence" au lieu de "Statut"
- ✅ Validation email des stagiaires renforcée

### Version 1.5.1 (24/10/2025)
- ✅ Remplacement "Absent excusé" par "Partielle"
- ✅ Page dédiée à l'envoi des emails
- ✅ Nouveau template email

### Version 1.5.0 (24/10/2025)
- ✅ Intégration Make avec authentification API
- ✅ Suppression du champ email formateur
- ✅ Validation de date : max 7 jours avant aujourd'hui
- ✅ Informations de version et copyright

---

## 👥 Contributeurs

**WeNégoce** - Développement et maintenance

---

## 📄 Licence

© 2025 WeNégoce - Tous droits réservés

Formation Manager est une solution propriétaire développée par WeNégoce.
Toute utilisation, reproduction ou distribution non autorisée est interdite.

---

## 📞 Contact

Pour toute question ou demande de support :
- Site web : [https://www.wenegoce.fr](https://www.wenegoce.fr)
- Email : support@wenegoce.fr

---

**Made with ❤️ by WeNégoce**
