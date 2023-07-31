import WarningMessage from '../../components/msg';

function Test() {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
        {/* Navbar ou qualquer outro conteúdo */}
        <nav className="bg-blue-500 p-4">Navbar</nav>

        {/* Conteúdo do site */}
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Conteúdo do site</h1>
          <p>Seu conteúdo aqui...</p>
        </div>

        {/* Mensagem de aviso */}
        <WarningMessage />
      </div>
    </div>
  );
}


export default Test;