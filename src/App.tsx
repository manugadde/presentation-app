import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

// Individual imports for each component used in this sample
import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-legend";
import "@arcgis/map-components/dist/components/arcgis-search";
import "@arcgis/coding-components/dist/components/arcgis-arcade-editor";
import "@esri/calcite-components/dist/components/calcite-scrim";
import { ArcgisMap, ArcgisSearch, ArcgisLegend } from "@arcgis/map-components-react";
import Scatterplot from "./Scatterplot";
import ArcadeEditor from "./ArcadeEditor";

// Set the asset path for charts components
import { setAssetPath as setChartsComponentsAssetPath } from '@arcgis/charts-components/dist/components';
setChartsComponentsAssetPath("https://js.arcgis.com/charts-components/4.31/assets");

// Set the asset path for calcite components
import { setAssetPath as setCalciteComponentsAssetPath } from '@esri/calcite-components/dist/components';
setCalciteComponentsAssetPath("https://js.arcgis.com/calcite-components/2.13.2/assets");

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <div className="container">
        <div className="editor-wrapper">
          <ArcadeEditor />
        </div>
      <ArcgisMap
      itemId="da8ebd2ed0b2463282e049289fc02757"
      onArcgisViewReadyChange={(event: CustomEvent) => {
        console.log("MapView ready", event);
      }}
      >
      <ArcgisSearch position="top-right"></ArcgisSearch>
      <ArcgisLegend position="bottom-left"></ArcgisLegend>
      </ArcgisMap> 
      <Scatterplot />
      </div>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
};