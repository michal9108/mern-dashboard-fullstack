# Full-Stack Finance Dashboard App

<a href="https://mern-dashboard-fullstack.vercel.app/" target="blank"> <img src="https://github.com/michal9108/mern-dashboard-fullstack/blob/main/finance-hero-img.png" width="100%" height="100%"/>
</a>

## Link

[Finance Dashboard App](https://mern-dashboard-fullstack.vercel.app/)

### Requirements

Before using this project, you will need to have installed [Node.js](https://nodejs.org/en/), [git](https://git-scm.com/).

### Dependencies

- [React 18](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/guide/)
- [React Router v6](https://reactrouter.com/en/main)
- [Redux](https://redux.js.org/)
- [Redux toolkit](https://redux-toolkit.js.org/)
- [Tailwind](https://tailwindcss.com/)
- [Material UI](https://mui.com/material-ui/)
- [Recharts](https://recharts.org/en-US/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/docs/guide.html)
- [Axios](https://axios-http.com/docs/intro)
- [jsonwebtoken](https://jwt.io/)
- [express](https://expressjs.com/)
- [helmet](https://www.npmjs.com/package/helmet)
- [morgan](https://www.npmjs.com/package/morgan)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [bodyparser](https://axios-http.com/docs/intro)
- [cors](https://www.npmjs.com/package/cors)
- [Stripe](https://github.com/stripe/stripe-node)


### Developer Dependencies

- [Types/node](https://www.npmjs.com/package/@types/node)
- [eslint](https://eslint.org/docs/latest/)
- [Prettier](https://prettier.io/docs/en/)
- [nodemon](https://www.npmjs.com/package/nodemon)

## Instalation and manual to run locally

Clone the repository:

```
$ git clone https://github.com/michal9108/mern-dashboard-fullstack.git
```

**1. MongoDB**

1. Create / Login to your existing MongoDB Account
2. Deploy free tier MO database
3. Create User's `Username` & `Password` and enable access from Local Environment
4. In **SECURITY/Database Access** Set User Privileges to `Atlas Admin` Built-in Role
5. Make sure your IP address is added in **Network Access** Entry List!
6. inside `server` folder create: `.env ` file.
7. Connect to cluster - Select driver Node.js and copy your connection string into .`.env`:

```
MONGO_URL='mongodb+srv://<username>:<password>@cluster0.zdcxm56.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
```

7. Replace the `<username>` `<password>` with given.
8. Add into `.env`:

```
JWT_SECRET='YOUR-SECRET'
PORT=3000
```

**2. Server**

Start the script:

```
$ cd mern-dashboard-fullstack/server
$ npm install
$ npm run dev
```

**3. Client**

```
$ cd mern-dashboard-fullstack/client
$ npm install
```

inside `client` folder create: `.env.local` file:

```
VITE_BASE_URL=http://localhost:3000/
```

Start the script:

```
$ npm run dev
```

## Development

### Frontend Installations and configurations:

Install Vite:

```
$ npm create vite@latest
$ npm install
```

- Project name: `client`
- Select framework: `React`
- Select variant: `Typescript`

then run the script:

```
cd client
npm install
npm run dev
```

Install required dependencies:

```
npm i react-redux @reduxjs/toolkit react-router-dom @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/x-data-grid axios recharts
```

Install development dependencies:

```
npm i -D @types/react-dom
npm i -D eslint eslint-config-react-app
npm i -D @types/node
prettier
```

CLIENT

Modify Vite Boilerplate code in **client/src**:

- delete `App.css` file
- rewrite `App.tsx` - delete unnecessary code
- delete content of `index.css `
- add Google Fonts from https://fonts.google.com/ :

```
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Mouse+Memoirs&family=Open+Sans:wght@300&display=swap");

html,
body,
#root,
.app {
  height: 100%;
  width: 100%;
  font-family: "Roboto", "Poppins";
}
::-webkit-scrollbar {
  width: 0px;
}
```

Setup default settings for eslint in Vite:

```
$ npm i -D eslint eslint-config-react-app
```

inside **client** create `.eslintrc.json` and add:

```
{
  "extends": "react-app"
}
```

Modification to use specific environment variables:

Inside `tsconfig.json` add:

```
  "types": ["vite/client"]
```

Configuration of the paths for the imports:

```
$ npm i -D @types/node
```

Inside of the file `vite.config.ts` add:

```
import path from ‘path’

 resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
```

Inside of the file`tsconfig.json` add:

```
"paths": {
      "@/*": ["./src/*"]
    },

```

### Theme configuration

inside **client/src** create file `theme.ts` and copy configuration from **client/src/theme.ts**

### Data Modeling

<img src="https://github.com/michal9108/mern-dashboard-fullstack/blob/main/data-models.png" width="100%" height="100%"/>

### Server Installations

Create folder **server**:

```
mkdir server
cd server
```

```
$ npm init -y
```

```
npm i express body-parser cors dotenv helmet morgan mongoose jsonwebtoken bcrypt axios
```

```
npm i -D nodemon
```

inside `package.json` add:

```
 "dev": "nodemon server.js"
```
