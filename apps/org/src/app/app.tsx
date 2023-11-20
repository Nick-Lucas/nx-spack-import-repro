// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { a } from "@org/lib";

// FIXME: this import fails at build-time as unresolvable
import { bar } from "@org/lib/test-import";

export function App() {
  return (
    <div>
      {a} {bar}
    </div>
  );
}

export default App;
