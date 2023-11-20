// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { a } from "@org/lib";
import { bar } from "@org/lib/test-import";

export function App() {
  return (
    <div>
      {a} {bar}
    </div>
  );
}

export default App;
