import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layout.tsx", [
    index("pages/home.tsx"),
    ...prefix("gallery", [
      route("wedding", "pages/gallery/wedding.tsx"),
      route("event", "pages/gallery/event.tsx"),
      route("potrait", "pages/gallery/potrait.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
