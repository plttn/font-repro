import type { APIRoute } from "astro";
import { getFontData } from "astro:assets";
import satori from "satori";

export const GET: APIRoute = async () => {
  const data = getFontData("--font-roboto");

  console.log(JSON.stringify(data)); // to verify that we're only ever getting woff2 format

  const svg = await satori(
    {
      type: "div",
      props: {
        children: "hello, world",
        style: { color: "black" },
      },
    },
    {
      width: 600,
      height: 400,
      fonts: [
        {
          name: "Roboto",
          data: await fetch(
            new URL(data[0].src[0].url, "http://localhost:4321") //yes this is icky, but for a repro example i don't hate it
          ).then((res) => res.arrayBuffer()),
          weight: 400,
          style: "normal",
        },
      ],
    }
  );
  // satori won't handle woff2 fonts, so this is academic here
  // return new Response(new Uint8Array(svg), {
  //   headers: { "Content-Type": "image/svg+xml" },
  // });
};
