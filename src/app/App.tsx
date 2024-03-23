import { Accordion } from '../ui/accordion';
import { Button } from '../ui/button';
import './App.css';
function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Accordion />
      <Button variant="contained">кнопка</Button>
      <Button variant="outlined">кнопка</Button>
    </div>
  );
}

export default App;
