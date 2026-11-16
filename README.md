# CI/CD Pipeline FreeCodeCamp Tuto

A hands-on project to explore CI/CD and understand how code goes from development to deployment.

## About the Project

I wanted to go beyond the theory and actually get my hands dirty with the CI/CD process: understanding how applications are tested, packaged, and deployed automatically.

I started by following this [freeCodeCamp tutorial](https://www.freecodecamp.org/news/learn-continuous-integration-delivery-and-deployment/). The tutorial uses Google Cloud Run for deployment, but I couldn't complete the billing setup because I didn't have an international payment card.

Instead of stopping there, I looked for a free alternative and discovered **Render**, which allowed me to continue experimenting and successfully deploy my application.

This project is mainly a learning experience, where I got to explore different tools, face some real-world configuration issues, and understand how everything fits together.

## Tech Stack

- **Node.js & Express.js:** Building the web application.
- **Jest & Supertest:** Running automated tests.
- **Git & GitHub:** Version control and collaboration workflow.
- **GitHub Actions:** Automating CI/CD workflows.
- **Docker:** Containerizing the application.
- **Docker Hub:** Storing and publishing Docker images.
- **Render:** Hosting and deploying the application.

## What I Implemented

The project is built around two GitHub Actions workflows:

**1. Continuous Integration (CI)**

Triggered when a Pull Request targets `main` or `staging`.

- Checkout the source code.
- Install dependencies using `npm ci`.
- Run automated tests with Jest.
- Execute the build step if available.

**2. Continuous Delivery / Deployment (CD)**

Automates the process of getting the application online:

- Run automated tests.
- Build a Docker image.
- Tag and push the image to Docker Hub.
- Trigger a Render deployment using a Deploy Hook.

GitHub Secrets are used to manage Docker Hub credentials and the Render deployment hook securely.

## Docker & Deployment

The application was containerized using Docker, tested locally, and published to Docker Hub.

**Docker Hub:** [wafaallouche/ci-cd-tuto](https://hub.docker.com/r/wafaallouche/ci-cd-tuto)

I then configured a Render Web Service to deploy the published Docker image.

**Live application:** https://ci-cd-tuto-v1.onrender.com/

**Health check:** https://ci-cd-tuto-v1.onrender.com/health

## What I Learned

This experience helped me better understand:

- How CI and CD workflows are structured and triggered.
- How GitHub Actions automates testing and deployment.
- How Docker images are built, tagged, and published.
- How different services communicate within a deployment pipeline.
- How to troubleshoot configuration and deployment issues.
- How to find alternatives when a tool or platform becomes a limitation.

## What's Next?

This is just a starting point! I'd like to keep improving this project

I'm looking forward to building more projects and putting these concepts into practice.
