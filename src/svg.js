const generateSvg = (score, color) => (
  `<svg width="98px" height="20px" viewBox="0 0 98 20">
    <rect
      x="0"
      y="0"
      width="98"
      height="20"
      rx="2"
    ></rect>

    <rect
      fill="${color}"
      x="51"
      y="-4"
      width="48.5217391"
      height="29.6470588"
    ></rect>

    <text
      font-family="Operator Mono, FiraCode, monospace"
      font-size="10"
      font-weight="400"
      letter-spacing="-0.25"
      fill="#FFFFFF"
    >
      <tspan x="4" y="13">cool-kid</tspan>
    </text>

    <text
      font-family="Operator Mono, FiraCode, monospace"
      font-size="10"
      font-style="italic"
      font-weight="500"
      letter-spacing="-0.5"
      fill="#FFFFFF"
    >
      <tspan x="70" y="13">${score}</tspan>
    </text>
  </svg>`
)

module.exports = generateSvg
