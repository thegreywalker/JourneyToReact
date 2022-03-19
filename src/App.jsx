import Header from "./Components/Header";

function App() {
  const DUMMY_DATA = (
    <p className="mt-5 bg-blue-400 font-extrabold max-w-md mx-auto rounded-lg p-4 text-white text-2xl italic hover:bg-blue-200 cursor-pointer">
      Let's Build a Dummy Frontend for Backend Testing!!🔥
    </p>
  );


  return (
  <div className="App">
    {DUMMY_DATA}

    {/* Header */}
    <Header />

    {/* Body Content */}
    {/* Footer */}

  </div>
  );

}
export default App;
