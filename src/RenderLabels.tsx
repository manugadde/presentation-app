import React, { useEffect, useRef } from 'react';
import { ArcgisMap } from '@arcgis/map-components-react';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import LabelClass from '@arcgis/core/layers/support/LabelClass';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import {ArcgisMapCustomEvent} from '@arcgis/map-components/dist/types/components';

const RenderLabels: React.FC = () => {
  const mapRef = useRef<HTMLArcgisMapElement>(null);

  // Correctly define labelClass with the appropriate type
  const labelClass = new LabelClass({
    symbol: {
      type: 'text', // autocasts as new TextSymbol()
      color: 'green',
      backgroundColor: [213, 184, 255, 0.75],
      borderLineColor: 'green',
      borderLineSize: 1,
      yoffset: 5,
      font: {
        family: 'Playfair Display',
        size: 12,
        weight: 'bold',
      },
    },
    labelPlacement: 'above-center',
    labelExpressionInfo: {
      expression: '$feature.MARKER_ACTIVITY',
    },
  });

  const handleViewReady = async (event: ArcgisMapCustomEvent<void>) => {
    const view = event.target.view;

    // Create a FeatureLayer
    const featureLayer = new FeatureLayer({
      portalItem: {
        // id: '5531f62dfe924e50ab909ff6073ee2df', 
        id: '6012738cd1c74582a5f98ea30ae9876f',
      },
      labelingInfo: [labelClass],
      renderer: new SimpleRenderer({
        symbol: new SimpleMarkerSymbol({ 
          color: 'rgba(0,100,0,0.6)',
          size: 3,
          outline: {
            color: [0, 0, 0, 0.1],
            width: 0.5,
          },
        }),
      }),
    });

    // Add the FeatureLayer to the map
    view.map?.add(featureLayer);
  };

  useEffect(() => {
    if (!mapRef.current) return;

    return () => {
      // Cleanup function if needed
    };
  }, []);


  return (
    <ArcgisMap id="update-chart"
      itemId="b76559ad206a4c39bf0be5ad09677fa2"
      center={[-116.925, 34.2501]}
      zoom={12}
      onArcgisViewReadyChange={handleViewReady}
    >
    </ArcgisMap>
  );
};

export default RenderLabels;