const app = require("./app");
const { initDatabase } = require("./models/db");

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    if (process.env.DATABASE_URL) {
      await initDatabase();
    } else {
      console.log("No DATABASE_URL found, database skipped");
    }

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error while starting server");
    console.error(error.message);
    process.exit(1);
  }
}

startServer();
