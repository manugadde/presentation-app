/**
 * Adds an event listener to the chart element that listens for the "arcgisSelectionComplete" event. 
 * This will enable or disable the Clear Selection and Filter by Selection buttons in the action bar based on the selection state.
 */
export function addSelectionEventListener(chartElement: HTMLElement, actionBarId: string) {
    chartElement.addEventListener("arcgisSelectionComplete", (event) => {
      const actionBarElement = document.getElementById(actionBarId);
  
      const selectionData = (event as CustomEvent).detail;
      if (selectionData.selectionOIDs === undefined || selectionData.selectionOIDs.length === 0) {
        if (actionBarElement) {
          actionBarElement.setAttribute("clearSelectionState", "disabled");
          actionBarElement.setAttribute("filterBySelectionState", "disabled");
        }
      } else {
        if (actionBarElement) {
          actionBarElement.setAttribute("clearSelectionState", "enabled");
          actionBarElement.setAttribute("filterBySelectionState", "enabled");
        }
      }
    });
  }