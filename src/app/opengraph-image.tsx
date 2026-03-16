import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "HETAL J SHAH & Co. | Chartered Accountants Ahmedabad, Gujarat";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f1729",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 96px",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Accent line */}
        <div style={{ width: 64, height: 4, background: "#9a7229", marginBottom: 40 }} />

        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            color: "#f0ede8",
            lineHeight: 1.1,
            marginBottom: 20,
            letterSpacing: "-0.5px",
          }}
        >
          HETAL J SHAH &amp; Co.
        </div>

        <div
          style={{
            fontSize: 28,
            color: "#9a7229",
            fontWeight: 400,
            marginBottom: 40,
          }}
        >
          Chartered Accountants
        </div>

        <div
          style={{
            fontSize: 22,
            color: "rgba(240,237,232,0.65)",
            lineHeight: 1.5,
            maxWidth: 700,
          }}
        >
          Audit · Tax · GST · Company Registration · NRI Services
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 56,
            right: 96,
            fontSize: 18,
            color: "rgba(240,237,232,0.40)",
          }}
        >
          Maninagar, Ahmedabad · Gujarat · India
        </div>
      </div>
    ),
    { ...size }
  );
}
