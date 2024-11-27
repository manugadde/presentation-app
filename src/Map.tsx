// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./App.css";

// // Individual imports for each component used in this sample
// import "@arcgis/map-components/dist/components/arcgis-map";
// import "@arcgis/map-components/dist/components/arcgis-legend";
// import "@arcgis/map-components/dist/components/arcgis-search";
// import "@arcgis/coding-components/dist/components/arcgis-arcade-editor";
// import "@esri/calcite-components/dist/components/calcite-scrim";
// import { ArcgisMap, ArcgisSearch, ArcgisLegend } from "@arcgis/map-components-react";
// import Scatterplot from "./Scatterplot";
// // import ArcadeEditor from "./ArcadeEditor";
// import RenderLabels from "./RenderLabels";

// import { CalciteButton } from "@esri/calcite-components-react";

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
//                 {/* <ArcadeEditor /> */}
//                 <RenderLabels />
//             </div>
//             <ArcgisMap
//                 itemId="da8ebd2ed0b2463282e049289fc02757"
//                 onArcgisViewReadyChange={(event: CustomEvent) => {
//                     console.log("MapView ready", event);
//                 }}
//             >
//                 <ArcgisSearch position="top-right"></ArcgisSearch>
//                 <ArcgisLegend position="bottom-left"></ArcgisLegend>
//             </ArcgisMap>
//             <Scatterplot />
//             <CalciteButton id="update-chart">Render Labels</CalciteButton>
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

// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import "./App.css";

// // Individual imports for each component used in this sample
// import "@arcgis/map-components/dist/components/arcgis-map";
// import "@arcgis/map-components/dist/components/arcgis-legend";
// import "@arcgis/map-components/dist/components/arcgis-search";
// import "@arcgis/coding-components/dist/components/arcgis-arcade-editor";
// import "@esri/calcite-components/dist/components/calcite-scrim";
// import { ArcgisMap, ArcgisSearch, ArcgisLegend } from "@arcgis/map-components-react";
// import Scatterplot from "./Scatterplot";
// // import ArcadeEditor from "./ArcadeEditor";
// import RenderLabels from "./RenderLabels";

// import { CalciteButton } from "@esri/calcite-components-react";

// // Set the asset path for charts components
// import { setAssetPath as setChartsComponentsAssetPath } from "@arcgis/charts-components/dist/components";
// setChartsComponentsAssetPath("https://js.arcgis.com/charts-components/4.31/assets");

// // Set the asset path for calcite components
// import { setAssetPath as setCalciteComponentsAssetPath } from "@esri/calcite-components/dist/components";
// setCalciteComponentsAssetPath("https://js.arcgis.com/calcite-components/2.13.2/assets");

// const App = () => {
//   // State to control the visibility of the RenderLabels component
//   const [showLabels, setShowLabels] = useState(false);

//   return (
//     <div className="container">
//       <div className="editor-wrapper">
//         {/* <ArcadeEditor /> */}
//         {/* Conditionally render the button or the RenderLabels component */}
//         {!showLabels ? (
//           <CalciteButton
//             id="update-chart"
//             onClick={() => setShowLabels(true)}
//           >
//             Render Labels
//           </CalciteButton>
//         ) : (
//           <RenderLabels />
//         )}
//       </div>

//       <ArcgisMap
//         itemId="ea3e0ac443c945cf8d6641acfa1f761e"
//         onArcgisViewReadyChange={(event: CustomEvent) => {
//           console.log("MapView ready", event);
//         }}
//       >
//         <ArcgisSearch position="top-right"></ArcgisSearch>
//         <ArcgisLegend position="bottom-left"></ArcgisLegend>
//       </ArcgisMap>
//       <Scatterplot />
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// if (rootElement) {
//   const root = ReactDOM.createRoot(rootElement);
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// } else {
//   console.error("Root element not found");
// }
// import React, { useState, useRef } from "react";
// import ReactDOM from "react-dom/client";
// import "./App.css";

// // Individual imports for each component used in this sample
// import "@arcgis/map-components/dist/components/arcgis-map";
// import "@arcgis/map-components/dist/components/arcgis-legend";
// import "@arcgis/map-components/dist/components/arcgis-search";
// import "@esri/calcite-components/dist/components/calcite-scrim";
// import { ArcgisMap, ArcgisSearch, ArcgisLegend } from "@arcgis/map-components-react";
// import Scatterplot from "./Scatterplot";
// import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
// import LabelClass from "@arcgis/core/layers/support/LabelClass";
// import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
// import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
// import { CalciteButton } from "@esri/calcite-components-react";
// import {ArcgisMapCustomEvent} from '@arcgis/map-components/dist/types/components';

// // // Set the asset path for charts components
// import { setAssetPath as setChartsComponentsAssetPath } from "@arcgis/charts-components/dist/components";
// setChartsComponentsAssetPath("https://js.arcgis.com/charts-components/4.31/assets");

// import { setAssetPath as setCalciteComponentsAssetPath } from "@esri/calcite-components/dist/components";
// setCalciteComponentsAssetPath("https://js.arcgis.com/calcite-components/2.13.2/assets");

// const App = () => {
//   // State to control the addition of labels
//   const [showLabels, setShowLabels] = useState(false);
//   const mapRef = useRef<HTMLArcgisMapElement>(null);

//   const addLabelsToMap = (view: __esri.MapView) => {
//     const labelClass = new LabelClass({
//       symbol: {
//         type: "text",
//         color: "green",
//         backgroundColor: [213, 184, 255, 0.75],
//         borderLineColor: "green",
//         borderLineSize: 1,
//         yoffset: 5,
//         font: {
//           family: "Playfair Display",
//           size: 12,
//           weight: "bold",
//         },
//       },
//       labelPlacement: "above-center",
//       labelExpressionInfo: {
//         expression: "$feature.BOOK",
//       },
//     });

//     const featureLayer = new FeatureLayer({
//       portalItem: {
//         id: "deec09bae53248e5bcafa98835623587",
//       },
//       labelingInfo: [labelClass],
//       renderer: new SimpleRenderer({
//         symbol: new SimpleMarkerSymbol({
//           color: "rgba(0,100,0,0.6)",
//           size: 6,
//           outline: {
//             color: [0, 0, 0, 0.1],
//             width: 0.5,
//           },
//         }),
//       }),
//     });

//     // Add the FeatureLayer to the existing map
//     view.map?.add(featureLayer);
//   };

//   const handleViewReady = async (event: ArcgisMapCustomEvent<void>) => {
//     const view = event.target.view;
//     console.log("MapView ready", view);

//     // If showLabels is true, add labels to the map
//     if (showLabels) {
//       addLabelsToMap(view);
//     }
//   };

//   const handleButtonClick = () => {
//     setShowLabels(true);

//     // If map is already loaded, add labels directly
//     const mapElement = mapRef.current;
//     if (mapElement && mapElement.view) {
//       addLabelsToMap(mapElement.view as __esri.MapView);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="editor-wrapper">
//         {/* Conditionally render the button */}
//         {!showLabels && (
//           <CalciteButton id="update-chart" onClick={handleButtonClick}>
//             Display Statistics
//           </CalciteButton>
//         )}
//       </div>

//       <ArcgisMap
//         ref={mapRef}
//         itemId="ea3e0ac443c945cf8d6641acfa1f761e"
//         onArcgisViewReadyChange={handleViewReady}
//       >
//         <ArcgisSearch position="top-right" />
//         <ArcgisLegend position="bottom-left" />
//       </ArcgisMap>
//       {showLabels && <Scatterplot />}

//       {/* <Scatterplot /> */}
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// if (rootElement) {
//   const root = ReactDOM.createRoot(rootElement);
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// } else {
//   console.error("Root element not found");
// }


