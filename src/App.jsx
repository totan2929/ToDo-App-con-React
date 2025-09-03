import Title from "./components/Title/Title";
import Input from "./components/Input/Input";

function App() {
  return (
    <>
      <div className="bg-blue-400 min-h-screen text-white flex flex-col items-center justify-center px-4">
        <div className="container flex flex-col max-w-md">
          <Title title="TODO APP" />
          <Input/>
        </div>
      </div>
    </>
  );
}

export default App;
