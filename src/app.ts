import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', function connection(ws) {
    console.log("Cliente conectado com sucess")

    ws.on('error', console.error);


    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });

    ws.send('Hola desde el sevidor! on port 3000');

    setInterval(() => {
        ws.send('Hola cada 2 seg');
    }, 2000)
});