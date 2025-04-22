import { run } from './server.mjs';

try {
  run(3000);
} catch (err) {
  console.error(err.message);
  process.exit(1)
}
