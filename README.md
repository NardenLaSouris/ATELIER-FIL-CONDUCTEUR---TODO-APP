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
... (150lignes restantes)

