import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SolnamesCheckout = React.lazy(() => import("pages/SolnamesCheckout"));
const SolnamesChoosetokentoconnectwith = React.lazy(
  () => import("pages/SolnamesChoosetokentoconnectwith"),
);
const BuyModal = React.lazy(() => import("pages/BuyModal"));
const DOmainexplorefullopen = React.lazy(
  () => import("pages/DOmainexplorefullopen"),
);
const ViewDetails = React.lazy(() => import("pages/ViewDetails"));
const DomainClickOverView = React.lazy(
  () => import("pages/DomainClickOverView"),
);
const SolnamesViewDomain = React.lazy(() => import("pages/SolnamesViewDomain"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<SolnamesViewDomain />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/domainclickoverview"
            element={<DomainClickOverView />}
          />
          <Route path="/viewdetails" element={<ViewDetails />} />
          <Route
            path="/domainexplorefullopen"
            element={<DOmainexplorefullopen />}
          />
          <Route path="/buymodal" element={<BuyModal />} />
          <Route
            path="/solnameschoosetokentoconnectwith"
            element={<SolnamesChoosetokentoconnectwith />}
          />
          <Route path="/solnamescheckout" element={<SolnamesCheckout />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
