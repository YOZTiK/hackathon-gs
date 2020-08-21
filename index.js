const express = require('express')
const app = express()
const port = 3000

const AssistantV2 = require('ibm-watson/assistant/v2');
const version = "2019-02-28";
const apikey = "fV3Jr8pFAc61dRaiQtKhLToW9RBdA9Usoq7od5NoXy1e";
const url = "https://gateway.watsonplatform.net/assistant/api";
const sessionId = "a58e94fc-b904-4e1a-890c-261a3dece034";

const service = new AssistantV2({
    version: '2019-02-28',
    url: 'https://gateway.watsonplatform.net/assistant/api/',
    iam_apikey: 'fV3Jr8pFAc6ldRaiQtKhLToW9RBdA9Usoq7od5NoXy1e'
  });

  app.get('/:text', (req, res)=>{
    var {text} = req.params;
    console.log(req);
    console.log("lalo")
    var session;
    service.createSession({
      assistant_id: 'a33bc087-6144-41c5-a3e0-4a0ede09cad1'
    })
      .then(res => {
        session = JSON.stringify(res);
        session = JSON.parse(session)
        console.log(session)
        service.message({
          assistant_id: 'a33bc087-6144-41c5-a3e0-4a0ede09cad1',
          session_id: session['session_id'],
          input: {
            'message_type': 'text',
            'text': 'Hola'
            }
          })
          .then(res1 => {
            var watsonRes = JSON.stringify(res1, null, 2)
            res.send(watsonRes)
          })1
          .catch(err1 => {
            console.log(err1)
            res.status(404).end();
          })
      })
      .catch(err => {
        console.log(err)
        res.status(404).end();
      });
  
  });

  app.get('/', function(req, res) {
    var session;
  var text = 'Hola'
  console.log(text)
    service.createSession({
      assistant_id: 'a33bc087-6144-41c5-a3e0-4a0ede09cad1'
    })
      .then(res => {
        session = JSON.stringify(res);
        session = JSON.parse(session)
        console.log(session)
        service.message({
          assistant_id: 'a33bc087-6144-41c5-a3e0-4a0ede09cad1',
          session_id: session['session_id'],
          input: {
            'message_type': 'text',
            'text': text
            }
          })
          .then(res => {
            var watsonRes = JSON.stringify(res, null, 2);
            console.log(watsonRes);
          })
          .catch(err => {
            console.log(err)
            res.status(404).end();
          })
      })
      .catch(err => {
        console.log(err)
        res.status(404).end();
      });
  
    
  
  });
  
  app.get('/test', function(req, res) {
    console.log("HOLAAAAAA")
  });
  
  

app.listen(port, () => console.log(`Example app listening on port ${port}!`))