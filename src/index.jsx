// routes.js
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/menu/layout";  

import {Home,Contact,Service,Cliente} from './site/sites'
import {ListarClientes} from './site/ListarClientes'

export const BaseRouter = () => {


return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Contact/" element={<Contact />} />
          <Route path="/customers/" element={<Cliente />} />
          <Route path="/clientes/" element={<ListarClientes />} />
        </Routes>
      </Layout>
    </>
  );

}






 