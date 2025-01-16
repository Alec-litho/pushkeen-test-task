## Note app with PostgreSQL
This is a test task where i had to create a note app
1. Fronend
 - App component
 - CardsList component
 - Card component
 - CardModal component
 - logic of interacting with backend
2. Backend
 - Server and sql configuration
 - Card route and card controller
 - Validatiob middleware
 - sql migration

To run both frontend and backend servers you should:
  ```bash
   npm i
  ```
then
  ```bash
   npm run start
  ```
for backend you should also run migration up command
   ```bash
   npm migrate:up
   ```
