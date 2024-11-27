import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

// ArcGIS Component imports
import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-legend";
import "@arcgis/map-components/dist/components/arcgis-search";
import "@esri/calcite-components/dist/components/calcite-scrim";
import { CalciteButton } from "@esri/calcite-components-react";
import { ArcgisMap, ArcgisSearch, ArcgisLegend } from "@arcgis/map-components-react";
import Scatterplot from "./Scatterplot";
import LineChart from "./LineChart";
import ArcadeEditor from "./ArcadeEditor";
import Embeddable from "./Embeddable";
import RenderLabels from "./RenderLabels";

// // Set the asset path for charts components
import { setAssetPath as setChartsComponentsAssetPath } from "@arcgis/charts-components/dist/components";
setChartsComponentsAssetPath("https://js.arcgis.com/charts-components/4.31/assets");

import { setAssetPath as setCalciteComponentsAssetPath } from "@esri/calcite-components/dist/components";

// import ArcadeEditor from "./ArcadeEditor";
setCalciteComponentsAssetPath("https://js.arcgis.com/calcite-components/2.13.2/assets");

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div>
      <h1>ArcGIS JS SDK Components</h1>
      <p>This app showcases various components packages.</p>

      {/* Tab Navigation */}
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "home" ? "active" : ""}`}
          onClick={() => setActiveTab("home")}
        >
          Map Components
        </button>
        <button
          className={`tab-button ${activeTab === "coding" ? "active" : ""}`}
          onClick={() => setActiveTab("coding")}
        >
          Coding Components
        </button>
        <button
          className={`tab-button ${activeTab === "charts" ? "active" : ""}`}
          onClick={() => setActiveTab("charts")}
        >
          Charts Components
        </button>
        <button
          className={`tab-button ${activeTab === "embed" ? "active" : ""}`}
          onClick={() => setActiveTab("embed")}
        >
          Embed Components
        </button>
      </div>

      <hr />

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "home" && <Home />}
        {activeTab === "coding" && <Coding />}
        {activeTab === "charts" && <Charts />}
        {activeTab === "embed" && <Embed />}
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="container">
      <ArcgisMap itemId="b76559ad206a4c39bf0be5ad09677fa2">
        <ArcgisSearch position="top-right" />
        <ArcgisLegend position="bottom-left" />
      </ArcgisMap>
    </div>
  );
}

function Coding() {
  const [showLabels, setShowLabels] = useState(false);
  return (
    <div className="container">
        <div className="editor-wrapper">
            <ArcadeEditor />
        </div>
        <div className="render-button">
          {!showLabels ? (
            <CalciteButton
            id="update-chart"
            onClick={() => setShowLabels(true)}
          >
            Render Labels
          </CalciteButton>
      
      ) : (
        <div className="map-render-button">
          <RenderLabels />
        </div>
      )}
      </div>
        <div className="map-arcade-editor">
            <ArcgisMap
                itemId="b76559ad206a4c39bf0be5ad09677fa2"></ArcgisMap>
        </div>
    </div>
);
}
        
function Charts() {
  return (
    <div className="container">
      <ArcgisMap itemId="b76559ad206a4c39bf0be5ad09677fa2">
        <Scatterplot />
        <LineChart />
      </ArcgisMap>
    </div>
    
  );
}

function Embed() {
  return (
    <div className="container">
      <Embeddable />
    </div>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
// -------------------------------------
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./App.css";

// // Individual imports for each component used in this sample
// import "@arcgis/map-components/dist/components/arcgis-map";
// import "@arcgis/map-components/dist/components/arcgis-legend";
// import "@arcgis/map-components/dist/components/arcgis-search";
// import "@arcgis/coding-components/dist/components/arcgis-arcade-editor";
// import "@esri/calcite-components/dist/components/calcite-scrim";
// // import { ArcgisMap, ArcgisSearch, ArcgisLegend } from "@arcgis/map-components-react";
// // import Scatterplot from "./Scatterplot";
// import ArcadeEditor from "./ArcadeEditor";
// // import RenderLabels from "./RenderLabels";

// // import { CalciteButton } from "@esri/calcite-components-react";

// // Set the asset path for charts components
// import { setAssetPath as setChartsComponentsAssetPath } from '@arcgis/charts-components/dist/components';
// setChartsComponentsAssetPath("https://js.arcgis.com/charts-components/4.31/assets");

// // Set the asset path for calcite components
// import { setAssetPath as setCalciteComponentsAssetPath } from '@esri/calcite-components/dist/components';
// setCalciteComponentsAssetPath("https://js.arcgis.com/calcite-components/2.13.2/assets");

// const MapComponent = () => {
//     return (
//         <div className="container">
//             <div className="editor-wrapper">
//                 <ArcadeEditor />
//             </div>
//         </div>
//     );
// };

// export default MapComponent;

// const rootElement = document.getElementById("root");
// if (rootElement) {
//     const root = ReactDOM.createRoot(rootElement);
//     root.render(
//         <React.StrictMode>
//             <MapComponent />
//         </React.StrictMode>
//     );
// } else {
//     console.error("Root element not found");
// }
// -------------------------------------


