import { Card } from "./components/Card";

function App() {
  return (
    <div className="flex items-center justify-center p-10">
      <Card variant="elevated">
        <Card.Header title="Título del Card" subtitle="Descripción adicional" />
        <Card.Body scrollable>
          <p>Contenido principal del card</p>
        </Card.Body>
        <Card.Footer alignment="right">
          <button className="px-2 py-1 bg-orange-600 rounded hover:shadow-md text-orange-50 hover:bg-orange-700 hover:text-orange-100">
            Aceptar
          </button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default App;
