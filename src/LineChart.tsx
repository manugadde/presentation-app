import { useEffect, useRef, useCallback } from "react";

import { ArcgisChartsActionBar, ArcgisChartsLineChart } from "@arcgis/charts-components-react";
import { LineChartModel } from "@arcgis/charts-model";

import { createFeatureLayer } from "./functions/create-feature-layer";
import { addSelectionEventListener } from "./functions/add-selection-event-listener";

import { setAssetPath as setCalciteComponentsAssetPath } from "@esri/calcite-components/dist/components";
setCalciteComponentsAssetPath("https://js.arcgis.com/calcite-components/2.13.2/assets");

import "./App.css";

export default function LineChart() {
    const lineChartRef = useRef<HTMLArcgisChartsLineChartElement>(null);

  // useCallback to prevent the function from being recreated when the component rebuilds
  const initLineChart = useCallback(async () => {
    const layer = await createFeatureLayer(
      "https://services1.arcgis.com/4yjifSiIG17X0gW4/ArcGIS/rest/services/DisabilityByType/FeatureServer/2",
    );

      // Create a new LineChartModel and set the x and y axis fields.
      const linechartModel = new LineChartModel();
      await linechartModel.setup({ layer });
  
      await linechartModel.setXAxisField("C18108_calc_numDE");
      await linechartModel.setAggregationType("avg");
      await linechartModel.setNumericFields(["C18108_calc_num1E", "C18108_calc_num2OME"])
  
  
      // Set the linechart element's config and layer properties.
      const config = linechartModel.getConfig();
  
      if (lineChartRef.current) {
        lineChartRef.current.config = config;
        lineChartRef.current.layer = layer;
      }
  
      // Add an event listener for when selections are made on the chart, the filter by selection button will be enabled
      if (lineChartRef.current instanceof HTMLElement) {
        addSelectionEventListener(lineChartRef.current, "linechart-action-bar");
      }
    }, []);
  
    // Register a function that will execute after the current render cycle
    useEffect(() => {
      initLineChart().catch(console.error);
    }, [initLineChart]);
  
    return (
      <ArcgisChartsLineChart ref={lineChartRef} class="chart-component" id="linechart">
        <ArcgisChartsActionBar slot="action-bar" id="linechart-action-bar"></ArcgisChartsActionBar>
      </ArcgisChartsLineChart>
    );

}