import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = "AyurAgent Labs — the best Ayurveda marketer your clinic deserves";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "72px",
          position: "relative",
        }}
      >
        {/* Brand wash */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -140,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background: "#dcf4e8",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 9999,
              background: "#dcf4e8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              color: "#0d7a51",
            }}
          >
            ▲
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, color: "#06211a" }}>
            AyurAgent Labs
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: "-0.035em",
              color: "#06211a",
              display: "flex",
              flexWrap: "wrap",
              maxWidth: 940,
            }}
          >
            The best Ayurveda marketer your clinic deserves
          </div>
          <div style={{ fontSize: 28, color: "#4d6b5e", display: "flex" }}>
            Patient acquisition systems for Ayurveda clinics · {SITE.region},{" "}
            {SITE.country}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#8aa89b",
          }}
        >
          <span>{SITE.email}</span>
          <span>Founded by {SITE.founder.name}</span>
        </div>
      </div>
    ),
    size,
  );
}
