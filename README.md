# BYT project

**PyLingo** - python learning platform

## Development

### Prerequisites:
- docker
- docker compose
- git
- IDE (optional)
- .env file

### Setup:
1. Clone repository - git clone https://github.com/s27081/project-BYT.git
2. Copy .env file to src/
3. Run docker compose up --build
4. Add database from DB.sql to postgres via localhost:8080(adminer)

### Ports:
- 80 -> FastAPI
- 8080 -> Adminer
- 5432 -> Postgresql
- 3000 -> Next frontend
- 3001 -> Authentication service
- 3002 -> Class service

### Project structure

Project is divided into two parts src/frontend and src/backend. Backend contains Fastapi with tests and frontend contains whole Next application with services like Authenitcation, Client and Class. Within every service directory there's Dockerfile. Every container is managed via docker-compose.yaml located in src/. It loads a context of services and build images. After sucessful build it starts every container in app_network, sets envieronmet variables based on .env file and exposes ports.

### Endpoints

- POST :3001/api/users/signin - sign in user
- POST :3001/api/users/signup - sign up user
- GET :3001/api/users/currentuser - display currently logged in user
- POST :3001/api/users/changePassword - change user password
- POST :3001/api/users/deleteUser - delete user
- POST :3001/api/users/signout - sign out user
- POST :3002/api/group/addGroup - add new group
- POST :3002/api/group/joinGroup - join group
- GET :3002/api/group/showUserGroups - show in which groups user is a member
- POST :3002/api/group/deleteUser - delete user from group
- GET :3002/api/group/showUsersInGroup - show ALL users in group
- POST :80/execute_code - run test
- GET :3000 - web app

