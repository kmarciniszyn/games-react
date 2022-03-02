const colors = {
    lightGray: "#c7c7c7",
    silver: "#A8A8A8",
    nobel: "#b3b3b3",
    white: "#ffffff",
    black: "#252525",
    mineShaft: "#363636",
    pampas: "#F2EFEA",
    terracotta: "#DF6B58",
    semiTransparentWhite: "rgba(255,255,255,0.5)",
    semiTransparentBlack: "rgba(0,0,0,0.5)",
    blue: "#007cdb",
    darkGreen: "#009c17",
    red: "#ad0000",
    violet: "#640082",
    navyBlue: "#4600d1",
    green: "#00d13b",
    orange: "#eb7200",
};

const common = {
    breakpoints: {
        maxMobileWidth: 767,
    },
    boxShadow: `inset -4px -4px 15px -2px ${colors.silver}`,
}

export const lightTheme = {
    ...common,
    colors: {
        primary: colors.terracotta,
        textPrimary: colors.black,
        disabled: colors.lightGray,
        site: {
            background: colors.pampas,
        },
        section: {
            background: colors.semiTransparentWhite,
            borderBottom: colors.black,
            select: colors.black,
            selectText: colors.white,
        },
        button: {
            background: colors.black,
            text: colors.white,
        },
        game: {
            button: {
                background: colors.nobel,
                text: colors.lightGray,
            },
            oneNeighbour: colors.blue,
            twoNeighbours: colors.darkGreen,
            threeNeighbours: colors.red,
            fourNeighbours: colors.violet,
            fiveNeighbours: colors.navyBlue,
            sixNeighbours: colors.green,
            sevenNeighbours: colors.orange,
            eightNeighbours: colors.black,
        }
    },
};