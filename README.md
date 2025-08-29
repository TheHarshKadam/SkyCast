# Sky Cast

A weather application using Vite and React

-------------------------------------------

<img width="2000" height="1000" alt="image" src="https://github.com/user-attachments/assets/9aa0e8cd-12a6-492a-bb3c-ba8dd33a4248" />

-------------------------------------------

## GET STARTED: 

- [React JS](https://react.dev/) - A javascript library for web and native user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A collection of beautiful, fully responsive UI components
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - A text-based scripting language or programming language used on both the server-side and client-side
- [Vite](https://vite.dev/) - An open-source frontend build tool and development server
- [Weather API](https://openweathermap.org/api) - Weather API used to fetch the weather data object in Json Format.


Generate the API key from Open Weather API website and paste your generated key in `\src\weatherApi.jsx`

```
const api = {
    key: "YOUR_OWN_API_KEY",
    base: "https://api.openweathermap.org/data/2.5/"
}

export default api;
```
---------------------------------------

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
