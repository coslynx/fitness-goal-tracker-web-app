<h1 align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
  <br>fitness-goal-tracker-web-app
</h1>
<h4 align="center">A web application to help users set, track, and share their fitness goals.</h4>
<h4 align="center">Developed with the software and tools below.</h4>
<p align="center">
  <img src="https://img.shields.io/badge/Framework-Next.js-blue" alt="Framework: Next.js" />
  <img src="https://img.shields.io/badge/Frontend-JavaScript,_HTML,_CSS-red" alt="Frontend: JavaScript, HTML, CSS" />
  <img src="https://img.shields.io/badge/Backend-Node.js-blue" alt="Backend: Node.js" />
  <img src="https://img.shields.io/badge/LLMs-Custom,_Gemini,_OpenAI-black" alt="LLMs: Custom, Gemini, OpenAI" />
</p>
<p align="center">
  <img src="https://img.shields.io/github/last-commit/spectra-ai-codegen/fitness-goal-tracker-web-app?style=flat-square&color=5D6D7E" alt="Last Commit" />
  <img src="https://img.shields.io/github/commit-activity/m/spectra-ai-codegen/fitness-goal-tracker-web-app?style=flat-square&color=5D6D7E" alt="Commit Activity" />
  <img src="https://img.shields.io/github/languages/top/spectra-ai-codegen/fitness-goal-tracker-web-app?style=flat-square&color=5D6D7E" alt="Top Language" />
</p>


## 📑 Table of Contents
- 📍 Overview
- 📦 Features
- 📂 Structure
- 💻 Installation
- 🏗️ Usage
- 🌐 Hosting
- 📄 License
- 👏 Authors

## 📍 Overview
The repository contains a Minimum Viable Product (MVP) called "fitness-goal-tracker-web-app" that provides a comprehensive solution using the following tech stack: Next.js, React, JavaScript, HTML, CSS, Node.js, and Custom LLMs including Gemini and OpenAI. It aims to empower fitness enthusiasts to set, track, and share their fitness goals.

## 📦 Features
|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| ⚙️ | **Architecture**   | The codebase follows a modular architectural pattern with separate directories for different functionalities, ensuring easier maintenance and scalability.             |
| 📄 | **Documentation**  | The repository includes a README file that provides a detailed overview of the MVP, its dependencies, and usage instructions.|
| 🔗 | **Dependencies**   | The codebase relies on various external libraries and packages such as React, uuid, esbuild, and eslint, which are essential for building and styling the UI components, and handling external services.|
| 🧩 | **Modularity**     | The modular structure allows for easier maintenance and reusability of the code, with separate directories and files for different functionalities such as background, components, and content.|
| 🧪 | **Testing**        | Implement unit tests using frameworks like Jest or React Testing Library to ensure the reliability and robustness of the codebase.       |
| ⚡️  | **Performance**    | The performance of the system can be optimized based on factors such as the browser and hardware being used. Consider implementing performance optimizations for better efficiency.|
| 🔐 | **Security**       | Enhance security by implementing measures such as input validation, data encryption, and secure communication protocols.|
| 🔀 | **Version Control**| Utilizes Git for version control with GitHub Actions workflow files for automated build and release processes.|
| 🔌 | **Integrations**   | Interacts with browser APIs, external services through HTTP requests, and includes integrations with speech recognition and synthesis APIs.|
| 📶 | **Scalability**    | Design the system to handle increased user load and data volume, utilizing caching strategies and cloud-based solutions for better scalability.           |

## 📂 Structure

```
└── pages
    └── _app.tsx
    └── index.tsx
    └── goals
        └── new.tsx
        └── [id].tsx
    └── activities
        └── new.tsx
    └── profile
        └── index.tsx
    └── api
        └── auth
            └── [...nextauth].js
            └── register.js
        └── goals
            └── [id].js
            └── index.js
        └── activities
            └── index.js
        └── users
            └── [id].js
└── components
    └── Header.tsx
    └── Footer.tsx
    └── GoalCard.tsx
    └── ActivityCard.tsx
    └── GoalForm.tsx
    └── ActivityForm.tsx
    └── LoginForm.tsx
    └── RegisterForm.tsx
    └── ProfileCard.tsx
    └── Button.tsx
└── styles
    └── globals.css
└── utils
    └── helpers.ts
    └── constants.ts
└── prisma
    └── schema.prisma
└── next.config.js
└── tailwind.config.js
└── README.md

```

## 💻 Installation
### 🔧 Prerequisites
- Node.js
- npm
- Docker

### 🚀 Setup Instructions
1. Clone the repository:
   - `git clone https://github.com/spectra-ai-codegen/fitness-goal-tracker-web-app.git`
2. Navigate to the project directory:
   - `cd fitness-goal-tracker-web-app`
3. Install dependencies:
   - `npm install`

## 🏗️ Usage
### 🏃‍♂️ Running the MVP
1. Start the development server:
   - `npm run dev`
2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

### ⚙️ Configuration
Adjust configuration settings in `next.config.js` or `.env`.

### 📚 Examples
- 📝 **Example 1**: Setting a new goal:
  - Navigate to the "Goals" section.
  - Click on "New Goal" to create a new fitness goal.
  - Enter the goal's name, target value, and deadline.
  - Click on "Create Goal" to save the goal.
- 📝 **Example 2**: Logging a new activity:
  - Navigate to the "Activities" section.
  - Click on "New Activity" to log a new workout.
  - Select the activity type, duration, and calories burned.
  - Click on "Log Activity" to save the activity.
- 📝 **Example 3**: Viewing progress on a goal:
  - Navigate to the "Goals" section.
  - Click on a specific goal to view its details.
  - The goal card will display the progress bar and other relevant information.

## 🌐 Hosting
### 🚀 Deployment Instructions
#### Vercel
1. Login to Vercel:
   - `vercel login`
2. Initialize Vercel project:
   - `vercel init`
3. Deploy the code:
   - `vercel deploy`

#### Netlify
1. Create a Netlify account:
   - `https://app.netlify.com/signup`
2. Create a new Netlify site:
   - `netlify init`
3. Deploy the code:
   - `netlify deploy`

#### GitHub Pages
1. Create a new GitHub repository for the project.
2. Configure GitHub Pages in the repository settings:
   - `https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site`
3. Push the code to the repository.

#### AWS
1. Create an AWS account:
   - `https://aws.amazon.com/`
2. Create an S3 bucket to store the website files.
3. Configure CloudFront for serving the website content.
4. Deploy the code to the S3 bucket.

#### Google Cloud
1. Create a Google Cloud account:
   - `https://cloud.google.com/`
2. Create a Cloud Storage bucket to store the website files.
3. Configure Cloud CDN for serving the website content.
4. Deploy the code to the Cloud Storage bucket.


### 🔑 Environment Variables
- `NEXT_PUBLIC_GOOGLE_CLIENT_ID`: Google OAuth Client ID
- `NEXT_PUBLIC_GOOGLE_CLIENT_SECRET`: Google OAuth Client Secret
- `DATABASE_URL`: PostgreSQL database connection URL

## 📜 API Documentation
### 🔍 Endpoints
- **GET /api/users/[id]**: Retrieves a user's profile.
- **POST /api/auth/register**: Registers a new user.
- **GET /api/goals**: Retrieves a list of goals for the current user.
- **POST /api/goals**: Creates a new goal for the current user.
- **GET /api/goals/[id]**: Retrieves details of a specific goal.
- **PUT /api/goals/[id]**: Updates a specific goal.
- **DELETE /api/goals/[id]**: Deletes a specific goal.
- **GET /api/activities**: Retrieves a list of activities for the current user.
- **POST /api/activities**: Creates a new activity for the current user.
- **GET /api/activities/[id]**: Retrieves details of a specific activity.
- **PUT /api/activities/[id]**: Updates a specific activity.
- **DELETE /api/activities/[id]**: Deletes a specific activity.

### 🔒 Authentication
Uses NextAuth.js for authentication and authorization, supporting multiple providers such as Google, Facebook, and Email/Password.

### 📝 Examples
- `curl -X GET http://localhost:3000/api/goals` - Retrieve a list of goals for the current user.
- `curl -X POST http://localhost:3000/api/goals -H "Content-Type: application/json" -d '{"name": "Lose 10 pounds", "target": 10, "deadline": "2024-06-01T00:00:00.000Z"}'` - Create a new goal for the current user.

## 📜 License
This MVP is licensed under the [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/).

## 👥 Authors
- **Author Name** - [Spectra.codes](https://spectra.codes)
- **Creator Name** - [DRIX10](https://github.com/Drix10)

<p align="center">
  <h1 align="center">🌐 Spectra.Codes</h1>
</p>
<p align="center">
  <em>Why only generate Code? When you can generate the whole Repository!</em>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/Developer-Drix10-red" alt="Developer: Drix10" />
  <img src="https://img.shields.io/badge/Website-Spectra.codes-blue" alt="Website: Spectra.codes" />
  <img src="https://img.shields.io/badge/Backed_by-Google,_Microsoft_&_Amazon_for_Startups-red" alt="Backed by: Google, Microsoft, & Amazon for Startups" />
  <img src="https://img.shields.io/badge/Finalist-Backdrop_Build_v4-black" alt="Finalist: Backdrop Build v4" />
</p>