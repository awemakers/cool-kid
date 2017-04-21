function generateSvg(score, color) {
    return `<svg width="98px" height="20px" viewBox="0 0 98 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect id="path-1" x="0" y="0" width="98" height="20" rx="2"></rect>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Desktop-HD" transform="translate(-243.000000, -349.000000)">
                    <g id="passed" transform="translate(243.000000, 349.000000)">
                        <g id="Rectangle-2">
                            <rect fill="${color}" mask="url(#mask-2)" x="51" y="-4" width="48.5217391" height="29.6470588"></rect>
                        </g>
                        <text id="cool-kid" font-family="OperatorMono-Medium, Operator Mono, FiraCode, monospace" font-size="10" font-weight="400" letter-spacing="-0.249999955" fill="#FFFFFF">
                            <tspan x="4" y="13">cool-kid</tspan>
                        </text>
                        <text id="25" font-family="OperatorMono-MediumItalic, Operator Mono, FiraCode, monospace" font-size="10" font-style="italic" font-weight="500" letter-spacing="-0.249999955" fill="#FFFFFF">
                            <tspan x="70" y="13">${score}</tspan>
                        </text>
                    </g>
                </g>
            </g>
        </svg>`;    
}

module.exports = generateSvg
