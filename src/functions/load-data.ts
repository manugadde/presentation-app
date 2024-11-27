import WebMap from "@arcgis/core/WebMap";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { createFeatureLayer } from "../functions/create-feature-layer";
import PortalItem from "@arcgis/core/portal/PortalItem";
import Portal from "@arcgis/core/portal/Portal";

export async function loadData() {
  const webMap = new WebMap({
    portalItem: { id: "b76559ad206a4c39bf0be5ad09677fa2" },
  });
  await webMap.loadAll();

  const featureLayer = await createFeatureLayer(
    "https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/DisabilityByType/FeatureServer/2",
  );

  const featureSet = await new Promise<__esri.FeatureSet>((resolve, reject) => {
    const portalItem = new PortalItem({
      id: "5531f62dfe924e50ab909ff6073ee2df",
      portal: new Portal({ url: "https://www.arcgis.com" }),
    });

    portalItem.load().then(() => {
      const layer = new FeatureLayer({
        portalItem: portalItem,
        layerId: 2,
      });

      layer.queryFeatures({
        where: "1=1",
        outFields: ["*"],
        returnGeometry: true,
      }).then(resolve).catch(reject);
    }).catch(reject);
  });

  return { webMap, featureLayer, featureSet };

}
  

