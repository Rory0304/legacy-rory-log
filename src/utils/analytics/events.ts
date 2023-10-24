type WindowWithDataLayerType = Window & {
  dataLayer: Record<string, any>[];
};

declare const window: WindowWithDataLayerType;

//
//
//
interface GTMEvent<E extends string = string> {
  event: E;
  [key: string]: any;
}

function __pushDataLayer(event: GTMEvent) {
  if (process.env.NODE_ENV !== "production") {
    return;
  }

  if (typeof window?.dataLayer !== "undefined") {
    window.dataLayer.push(event);
  }
}

export function eventPageView(url: string) {
  __pushDataLayer({
    event: "Pageview",
    page: url,
  });
}
