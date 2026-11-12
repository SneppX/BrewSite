import { ImageResponse } from "next/og";

export const alt = "BrewPilot — local-first automation with explicit permission";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#111512",
          color: "#f3f1e9",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "14px",
              background: "#b7e4c7",
              color: "#111512",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "27px",
              fontWeight: 800,
            }}
          >
            B
          </div>
          <div style={{ fontSize: "27px", fontWeight: 700, letterSpacing: "-0.5px" }}>BrewPilot</div>
          <div style={{ marginLeft: "auto", color: "#a5b1a8", fontSize: "20px" }}>by SneppX</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "900px" }}>
          <div style={{ color: "#b7e4c7", fontSize: "20px", fontWeight: 700, letterSpacing: "4px" }}>
            LOCAL-FIRST AUTOMATION
          </div>
          <div style={{ fontSize: "76px", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-3px" }}>
            Automation that stays under your control.
          </div>
          <div style={{ color: "#c2ccc4", fontSize: "27px", lineHeight: 1.35 }}>
            Permission-gated browser workflows. Local policy. Your machine keeps the final say.
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "14px", color: "#a5b1a8", fontSize: "18px" }}>
          <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#b7e4c7" }} />
          <div>Explicit permissions</div>
          <div style={{ color: "#536158" }}>·</div>
          <div>Local execution</div>
          <div style={{ color: "#536158" }}>·</div>
          <div>Open engineering</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
