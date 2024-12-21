import express from 'express';
import ngrok from 'ngrok';

const app = express();
const serverPort = 3002;  
const ngrokPort = 3001;   

app.get('/', (req, res) => {
  res.send('Sentio Webhook Server is Running!');
});

async function startServer() {
  try {
    app.listen(serverPort, async () => {
      console.log(`Server is running on port ${serverPort}`);

      const ngrokUrl = await ngrok.connect(ngrokPort);
      console.log(`Ngrok tunnel opened at: ${ngrokUrl}`);
    });
  } catch (error) {
    console.error('Error starting the server or ngrok:', error);
  }
}

startServer();
