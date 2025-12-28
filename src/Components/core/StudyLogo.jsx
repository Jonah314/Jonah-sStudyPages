const StudyLogo = ({
  height = 300,
  background = "#0f172a",
  titleColor = "#f8fafc",
  subtitleColor = "#cbd5f5",
}) => {
  return (
    <svg
      viewBox="0 0 1600 300"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: "100%", height }}
      role="img"
      aria-label="Jonah's Study Pages logo"
    >
      {/* Background */}
      <rect width="1600" height="300" fill={background} />

      {/* Icon */}
      <g transform="translate(200, 150)">
        {/* Book - Left Page */}
        <path
          d="M-90 -60 Q-40 -80 0 -60 V60 Q-40 40 -90 60 Z"
          fill="#38bdf8"
        />

        {/* Book - Right Page */}
        <path
          d="M0 -60 Q40 -80 90 -60 V60 Q40 40 0 60 Z"
          fill="#22c55e"
        />

        {/* Code Brackets */}
        <text
          x="-20"
          y="15"
          fontSize="48"
          fontFamily="monospace"
          fill="#020617"
          textAnchor="middle"
        >
          {"{ }"}
        </text>
      </g>

      {/* Title */}
      <text
        x="50%"
        y="52%"
        textAnchor="middle"
        fontSize="64"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="700"
        fill={titleColor}
      >
        Jonah’s Study Pages
      </text>

      {/* Subtitle */}
      <text
        x="50%"
        y="68%"
        textAnchor="middle"
        fontSize="28"
        fontFamily="Inter, system-ui, sans-serif"
        fill={subtitleColor}
      >
        Cheat Sheets & Lessons for Modern Web Development
      </text>
    </svg>
  );
};

export default StudyLogo;