import { Server } from 'http';
const s = Server((req, res) => {
  res.end('OK\n')
});
s.listen(4321);
