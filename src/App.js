import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListMahasiswa from "./component/ListMahasiswa";
import AddMahasiswa from "./component/AddMahasiswa";
import EditMahasiswa from "./component/EditMahasiswa";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListMahasiswa />} />
        <Route path="add" element={<AddMahasiswa />} />
        <Route path="edit/:id" element={<EditMahasiswa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
