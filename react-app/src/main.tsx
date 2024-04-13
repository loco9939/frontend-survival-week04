import { createRoot } from 'react-dom/client';
import App from './App';

function main() {
  // TODO: App 컴포넌트를 render 해주세요.
  const element = document.getElementById('root');

  if (!element) {
    return;
  }

  const root = createRoot(element);
  root.render(<App />);
}

main();
