import { useEffect, useRef, useCallback } from "react";

import { ArcgisChartsActionBar, ArcgisChartsScatterPlot } from "@arcgis/charts-components-react";
import { ScatterPlotModel } from "@arcgis/charts-model";

import { createFeatureLayer } from "./functions/create-feature-layer";
import { addSelectionEventListener } from "./functions/add-selection-event-listener";

import { setAssetPath as setCalciteComponentsAssetPath } from "@esri/calcite-components/dist/components";
setCalciteComponentsAssetPath("https://js.arcgis.com/calcite-components/2.13.2/assets");

import "./App.css";

// Default export for the Scatterplot component
export default function Scatterplot() {
  const scatterplotRef = useRef<HTMLArcgisChartsScatterPlotElement>(null);

  // useCallback to prevent the function from being recreated when the component rebuilds
  const initScatterplot = useCallback(async () => {
    const layer = await createFeatureLayer(
      "https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/DisabilityByType/FeatureServer/2",
    );
    // const layer = await createFeatureLayer(
    //   "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/LiteraryRoadTrips/FeatureServer/0",
    // );


    // Create a new ScatterPlotModel and set the x and y axis fields.
    const scatterplotModel = new ScatterPlotModel();
    await scatterplotModel.setup({ layer });

    await scatterplotModel.setXAxisField("C18108_calc_numDE");
    await scatterplotModel.setYAxisField("C18108_calc_num2OME");

    // await scatterplotModel.setXAxisField("FID");
    // await scatterplotModel.setYAxisField("bookIndex");

    // Set the scatterplot element's config and layer properties.
    const config = scatterplotModel.getConfig();

    if (scatterplotRef.current) {
      scatterplotRef.current.config = config;
      scatterplotRef.current.layer = layer;
    }

    // Add an event listener for when selections are made on the chart, the filter by selection button will be enabled
    if (scatterplotRef.current instanceof HTMLElement) {
      addSelectionEventListener(scatterplotRef.current, "scatterplot-action-bar");
    }
  }, []);

  // Register a function that will execute after the current render cycle
  useEffect(() => {
    initScatterplot().catch(console.error);
  }, [initScatterplot]);

  return (
    <ArcgisChartsScatterPlot ref={scatterplotRef} class="chart-component" id="scatteplot">
      <ArcgisChartsActionBar slot="action-bar" id="scatterplot-action-bar"></ArcgisChartsActionBar>
    </ArcgisChartsScatterPlot>
  );
}