# 🚀 Guide de mise sur GitHub

## Structure du projet à créer sur GitHub

```
wenegoce-formation-manager/
├── README.md
├── CHANGELOG.md
├── .gitignore
├── Formation-Manager-v1_5_3.html
└── docs/
    └── screenshots/  (optionnel - captures d'écran)
```

---

## 📋 Commandes Git

### 1️⃣ Initialiser le dépôt local

```bash
# Se placer dans le dossier du projet
cd /chemin/vers/votre/projet

# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "🎉 Initial commit - Formation Manager v1.5.3

- Application complète de gestion des formations
- Intégration Make/SharePoint
- Export Excel automatique
- Interface responsive"
```

### 2️⃣ Créer le dépôt sur GitHub

1. Aller sur [github.com](https://github.com)
2. Cliquer sur "New repository"
3. Nom : `formation-manager` (ou `wenegoce-formation-manager`)
4. Description : "Solution de gestion des formations avec suivi des présences et enquêtes de satisfaction"
5. **Privé** ou **Public** selon votre choix
6. ⚠️ **Ne pas** initialiser avec README (on a déjà le nôtre)
7. Créer le repository

### 3️⃣ Lier et pousser vers GitHub

```bash
# Renommer la branche en 'main'
git branch -M main

# Ajouter l'origine (remplacer par votre URL)
git remote add origin https://github.com/VOTRE-ORGANISATION/formation-manager.git

# Pousser vers GitHub
git push -u origin main
```

### 4️⃣ Créer un tag pour la version

```bash
# Créer un tag annoté
git tag -a v1.5.3 -m "Version 1.5.3 - Suppression heure de réponse"

# Pousser le tag
git push origin v1.5.3
```

---

## 🏷️ Convention de tags

Pour les futures versions :

```bash
# Version majeure (changements importants)
git tag -a v2.0.0 -m "Description"

# Version mineure (nouvelles fonctionnalités)
git tag -a v1.6.0 -m "Description"

# Version patch (corrections de bugs)
git tag -a v1.5.4 -m "Description"
```

---

## 📝 Bonnes pratiques pour les commits

### Format recommandé

```
<emoji> <type>: <description courte>

<description détaillée optionnelle>
```

### Exemples

```bash
git commit -m "✨ feat: Ajout de l'export PDF"
git commit -m "🐛 fix: Correction validation email"
git commit -m "📝 docs: Mise à jour README"
git commit -m "♻️ refactor: Optimisation du code"
git commit -m "🎨 style: Amélioration de l'interface"
git commit -m "⚡ perf: Optimisation des performances"
git commit -m "🔒 security: Amélioration sécurité API"
```

---

## 🔄 Workflow pour les futures mises à jour

### Après chaque modification

```bash
# 1. Vérifier les changements
git status

# 2. Ajouter les fichiers modifiés
git add Formation-Manager-v1_5_4.html
git add README.md CHANGELOG.md

# 3. Commiter avec un message clair
git commit -m "✨ feat: Ajout nouvelle fonctionnalité X"

# 4. Pousser vers GitHub
git push origin main

# 5. Créer un tag si nouvelle version
git tag -a v1.5.4 -m "Version 1.5.4 - Description"
git push origin v1.5.4
```

---

## 🌿 Branches (optionnel)

Si vous voulez travailler sur plusieurs fonctionnalités en parallèle :

```bash
# Créer une branche de développement
git checkout -b develop

# Créer une branche pour une fonctionnalité
git checkout -b feature/nouvelle-fonction

# Une fois terminé, merger dans main
git checkout main
git merge feature/nouvelle-fonction

# Supprimer la branche
git branch -d feature/nouvelle-fonction
```

---

## 🔐 Fichier sensible (si nécessaire)

Si vous avez des clés API ou mots de passe à ne pas pousser :

1. Créer un fichier `.env` ou `config.js`
2. L'ajouter dans `.gitignore`
3. Créer un fichier exemple `.env.example` avec des valeurs factices

---

## 📊 GitHub Releases (recommandé)

Pour créer une release sur GitHub :

1. Aller dans l'onglet "Releases"
2. "Draft a new release"
3. Choisir le tag v1.5.3
4. Titre : "Formation Manager v1.5.3"
5. Description : Copier depuis CHANGELOG.md
6. Attacher le fichier HTML si besoin
7. Publier

---

## ✅ Checklist finale

- [ ] README.md créé et complet
- [ ] CHANGELOG.md à jour
- [ ] .gitignore configuré
- [ ] Dépôt GitHub créé
- [ ] Premier commit effectué
- [ ] Code poussé vers GitHub
- [ ] Tag v1.5.3 créé
- [ ] (Optionnel) Release créée sur GitHub
- [ ] (Optionnel) Description du repo mise à jour
- [ ] (Optionnel) Topics ajoutés sur GitHub

---

## 📞 Support

En cas de problème :
- [Documentation Git](https://git-scm.com/doc)
- [Documentation GitHub](https://docs.github.com)
- [Guide Git en français](https://git-scm.com/book/fr/v2)

---

Bonne chance avec votre projet ! 🚀
