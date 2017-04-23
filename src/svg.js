const generateSvg = (score, color) => (`
  <svg
    width="100"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <svg
      width="50%"
      height="100%"
      x="0"
      y="0"
    >
      <rect
        width="100%"
        height="100%"
        x="0"
        y="0"
        fill="#000"
      ></rect>
      <text
        x="50%"
        y="50%"
        alignment-baseline="middle"
        text-anchor="middle"
        font-family="OperatorMono-Medium, Operator Mono, monospace"
        font-size="10"
        font-weight="400"
        letter-spacing="-0.25"
        fill="#FFF"
      >
        cool-kid
      </text>
    </svg>

    <svg
      width="50%"
      height="100%"
      x="50"
      y="0"
    >
      <rect
        width="100%"
        height="100%"
        x="0"
        y="0"
        fill="${color}"
      ></rect>

      <text
        x="50%"
        y="50%"
        alignment-baseline="middle"
        text-anchor="middle"
        font-family="OperatorMono-Medium, Operator Mono, monospace"
        font-size="10"
        font-weight="400"
        letter-spacing="-0.25"
        fill="#FFF"
      >
        ${score}
      </text>
    </svg>
  </svg>
`)

module.exports = generateSvg
