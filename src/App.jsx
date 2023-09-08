import SearchBar from "./assets/components/Buscador";
import DyD from "./assets/components/MiApi";
import { useState } from "react";

function App() {
  // ambos use state comunican sus estados a todos los componentes por los cuales se pasen como prop

  const [search, setSearch] = useState("");
  const [DyDData, setDyDData] = useState("");

  return (
    <>
      <header>
        <SearchBar
          setDyDData={setDyDData}
          DyDData={DyDData}
          search={search}
          setSearch={setSearch}
        />
      </header>
      {/* no se nombrar clases  */}
      <main className="maincillo">
        <DyD
          setDyDData={setDyDData}
          DyDData={DyDData}
          search={search}
          setSearch={setSearch}
        />
      </main>
    </>
  );
}

export default App;
