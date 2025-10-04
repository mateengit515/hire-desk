import { Route } from "react-router-dom";
import HDCDepots from "./HDCDepots";
import HyderabadDepot from "./HyderabadDepot";
import Dashboard from "./dashboard/Dashboard";
import Assets from "./assets/Assets";
import Issues from "./issues/Issues";
import AssetAssignment from "./asset-assignment/AssetAssignment";



const AppRoutes = [
  <Route path="/" element={<HDCDepots />} key="root" />,
  <Route path="/delhi" element={<HyderabadDepot />} key="delhi" />,
  <Route path="/hyderabad/*" element={<HyderabadDepot />} key="hyderabad">
    <Route index element={<Dashboard />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="assets" element={<Assets />} />
    <Route path="dashboard/asset-list" element={<Assets />} />
     <Route path="dashboard/asset-assignment" element={<AssetAssignment/>} />




    

    <Route path="issues" element={<Issues />} />
    <Route path="dashboard/asset-list" element={<Assets />} />
  </Route>,
  <Route path="/kolkata" element={<HyderabadDepot />} key="kolkata" />,
  <Route path="/houston" element={<HyderabadDepot />} key="houston" />,
];

export default AppRoutes;
