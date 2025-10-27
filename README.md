# Employee Dashboard (React)

A small React app that shows an Employee Dashboard (Home) and an Employee Form. The dashboard fetches sample users from https://jsonplaceholder.typicode.com/users and displays id, name and email. The UI uses a coffee color theme.

## Features
- Navbar with Home and Employee Form links
- Dashboard shows id, name, email fetched from external API
- Employee Form with fields: Name, Designation, Location, Salary
- Routing with `react-router-dom`
- Uses Bootstrap for layout and a custom coffee theme

## Setup (Windows PowerShell)

Open PowerShell in the project root (`c:\Users\Student\Documents\Employee-Dashboard`) and run:

```powershell
npm install
npm start
```

The app will open at http://localhost:3000 by default.

Notes:
- The form does not POST data (per requirements). It simply captures data locally and logs it to the console.
- If you prefer not to install `bootstrap` via npm, the app uses the CDN included in `public/index.html`.
