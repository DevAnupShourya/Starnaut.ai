## Table of Contents

- [Tech Stack](#tech-stack)
- [Languages](#languages)
- [Other Libraries](#other-libraries)

## **Tech Stack**

- Frontend: [NextJS](https://nextjs.org/docs)
- Backend: [NextJS Backend](https://nextjs.org/docs)
- Auth: [ClerkJS](https://clerk.com/docs/quickstarts/nextjs)
  <!-- TODO : shift it somewhere good place -->
  - Test credentials :
    - Test email: your_email+clerk_test@example.com
    - Test verification code: 424242
    - Test phone number:+15555550100
- Storage: [Uploadthing](https://uploadthing.com/)
- Database : [Aiven PostgreSQL Service](https://aiven.io/)
- Hosting: [Coolify](https://coolify.io/)
- UI: [ShadCN](https://ui.shadcn.com/docs) & [MagicUI](https://magicui.design/) & [Aceternity](https://ui.aceternity.com/)

## **Languages**

Used **TypeScript** for better type-safety and everyone seems using TS now so.

## **Flows**

- Auth: 

```
+-------------------+
| User Visits App   |
+-------------------+
          |
          v
+-------------------+
| Choose Auth Method|
+-------------------+
          |
          v
+-------------------+
| Input Credentials  |
+-------------------+
          |
          v
+-------------------+
| Clerk Validates   |
| Credentials       |
+-------------------+
          |
    +-----+-----+
    |           |
    v           v
+-------------------+        +-------------------+
| Success           |        | Error             |
+-------------------+        +-------------------+
          |                       |
          v                       v
+-----------------------+     +--------------------+
| Redirect to           |     | Show Error Message |
| Dashboard(/dashboard) |     |+-------------------+
+-----------------------+
          |
          v
+-------------------+
| Session Management |
+-------------------+
          |
          v
+-------------------+
| Access Protected   |
| Routes (Middleware)|
+-------------------+
          |
          v
+-------------------+
| User Logs Out     |
+-------------------+
          |
          v
+-------------------+
| Clear Session      |
| Redirect to Home   |
+-------------------+
```

- Persona Creation: 
```

```
- Persona Talking: 
```

```