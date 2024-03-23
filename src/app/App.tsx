import { Accordion } from '../ui/accordion';
import { Button } from '../ui/button';
import { Chip } from '../ui/chip';
import './App.css';
function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Accordion />
      <Chip label="Кешбэк до 30%" />
      <Button variant="contained">кнопка</Button>
      <Button variant="outlined">кнопка</Button>
    </div>
  );
}

export default App;
