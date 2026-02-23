import React from "react";

const Card = ({ title, description, time }) => {
  const formattedDate = new Date(time).toLocaleString();

  return (
    <div
      style={{
        width: "320px",
        padding: "16px",
        borderRadius: "12px",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <h3
        style={{
          margin: 0,
          fontSize: "18px",
          fontWeight: "600",
          color: "#222",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          margin: 0,
          fontSize: "14px",
          color: "#555",
          lineHeight: "1.5",
        }}
      >
        {description}
      </p>

      <span
        style={{
          marginTop: "8px",
          fontSize: "12px",
          color: "#888",
        }}
      >
        {formattedDate}
      </span>
    </div>
  );
};

export default Card;