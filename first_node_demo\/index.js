import { Server } from 'http';
const s = Server((req, res) => {
  console.log('url: ' + req.url);
  console.log('\nmethod: ' + req.method + '\n');
  res.end('OK\n')
});
s.listen(4321);
