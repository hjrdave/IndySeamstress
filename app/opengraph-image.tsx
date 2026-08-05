import { ImageResponse } from "next/og";

// Required for output: "export" in this Next.js version.
export const dynamic = "force-static";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #fbcfe8 0%, #fce7f3 50%, #ffffff 100%)",
        }}
      >
        <div style={{ fontSize: 32, color: "#1e1e1e" }}>Your</div>
        <div
          style={{
            fontSize: 96,
            fontFamily: "serif",
            fontStyle: "italic",
            color: "#1e1e1e",
          }}
        >
          Indy Seamstress
        </div>
        <div style={{ fontSize: 34, color: "#1e1e1e", marginTop: 12 }}>
          Something Stitched Something Sewn
        </div>
        <div style={{ fontSize: 24, color: "#757575", marginTop: 28 }}>
          Indianapolis, IN
        </div>
      </div>
    ),
    { ...size }
  );
}
