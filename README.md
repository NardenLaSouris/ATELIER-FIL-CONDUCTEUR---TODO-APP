# TODO App avec Scalingo

Application TODO realisee dans le cadre de l'atelier fil conducteur CI/CD.

Le projet contient actuellement un backend Express, une page frontend simple en HTML/CSS/JavaScript, une route de verification de l'API et un deploiement sur Scalingo.

## Developpeurs

- Jules NEVEU
- Emilien Pavageau

## Deploiement

Application disponible sur Scalingo :

```txt
https://jules-emilien-todo-app.osc-fr1.scalingo.io
```

Health check de l'API :

```txt
https://jules-emilien-todo-app.osc-fr1.scalingo.io/api/health
```

## Fonctionnalites actuelles

- Serveur Express
- Fichiers statiques servis depuis le dossier `public`
- Page HTML simple pour l'application TODO
- Verification de connexion a l'API avec `/api/health`
- Ajout de taches cote frontend
- Suppression de taches cote frontend
- Deploiement sur Scalingo

Les taches sont pour l'instant stockees dans un tableau JavaScript cote navigateur.  
Elles ne sont donc pas conservees apres un rechargement de la page.

## Stack technique

- Node.js
- Express
- HTML
- CSS
- JavaScript
- Dotenv
- CORS
- Nodemon
- Git
- GitHub
- Scalingo

## Structure du projet

```txt
.
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── src/
│   ├── app.js
│   └── server.js
├── .gitignore
├── package.json
├── package-lock.json
├── Procfile
└── README.md
```

## Installation locale

Cloner le projet :

```bash
git clone https://github.com/NardenLaSouris/ATELIER-FIL-CONDUCTEUR---TODO-APP.git
```

Entrer dans le dossier du projet :

```bash
cd ATELIER-FIL-CONDUCTEUR---TODO-APP
```

Installer les dependances :

```bash
npm install
```

Creer un fichier `.env` a la racine du projet :

```env
PORT=3000
NODE_ENV=development
```

Lancer le serveur en developpement :

```bash
npm run dev
```

L'application est ensuite disponible ici :

```txt
http://localhost:3000
```

## Scripts disponibles

Lancer le serveur en developpement :

```bash
npm run dev
```

Lancer le serveur en mode production :

```bash
npm start
```

## Routes disponibles

### Page principale

```txt
GET /
```

Affiche l'interface web de l'application.

### Health check

```txt
GET /api/health
```

Permet de verifier que l'API fonctionne.

Exemple de reponse :

```json
{
  "status": "OK"
}
```

## Variables d'environnement

En local, le projet utilise :

```env
PORT=3000
NODE_ENV=development
```

Sur Scalingo, la variable configuree est :

```env
NODE_ENV=production
```

La variable `PORT` ne doit pas etre ajoutee manuellement sur Scalingo.  
Scalingo la fournit automatiquement, et le serveur l'utilise avec :

```js
const PORT = process.env.PORT || 3000
```

## Procfile

Le fichier `Procfile` indique a Scalingo comment demarrer l'application :

```txt
web: npm start
```

Cette commande lance le script suivant depuis `package.json` :

```json
"start": "node src/server.js"
```

## Commandes utiles

Verifier l'etat Git :

```bash
git status
```

Ajouter les fichiers modifies :

```bash
git add .
```

Creer un commit :

```bash
git commit -m "message du commit"
```

Pousser sur GitHub :

```bash
git push origin main
```

Lancer le projet en local :

```bash
npm run dev
```

Tester le health check en local :

```bash
curl http://localhost:3000/api/health
```

Tester le health check en ligne :

```bash
curl https://jules-emilien-todo-app.osc-fr1.scalingo.io/api/health
```

## Prochaines etapes prevues

Les prochaines etapes de l'atelier seront :

- Ajouter PostgreSQL
- Creer une vraie API CRUD pour les taches
- Connecter le frontend a l'API
- Ajouter des tests automatises avec Jest et Supertest
- Mettre en place GitHub Actions
- Automatiser le deploiement staging et production

## Etat actuel du projet

Le projet correspond actuellement a la fin du Jour 1 de l'atelier :

- Structure Git initialisee
- Backend Express cree
- `Procfile` ajoute
- Frontend simple cree
- Application deployee sur Scalingo
- README ajoute
