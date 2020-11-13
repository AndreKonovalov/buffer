import { Server } from 'http';
const s = Server((req, res) => {
  console.log('url: ' + req.url);
  console.log('\nmethod: ' + req.method + '\n');
  res.writeHead(200, { 'Content-length': 3 });
  res.write('\u0002\u0001\u0021');
  res.write('OK\n');
  res.end()
});
s.listen(4321);
