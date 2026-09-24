import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KLOTZ Bauelemente",
    short_name: "KLOTZ",
    description: "Bauelemente & Outdoor Living aus Merseburg",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f3ee",
    theme_color: "#123a82",
    lang: "de",
  };
}
