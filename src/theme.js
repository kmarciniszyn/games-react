const colors = {
    lightGray: "#c7c7c7",
    white: "#ffffff",
    black: "#252525",
    mineShaft: "#363636",
    merino: "#F0E5D8",
    pampas: "#F2EFEA",
    terracotta: "#DF6B58",
};

const common = {
    breakpoints: {
        maxMobileWidth: 767,
    },
}

export const lightTheme = {
    ...common,
    colors: {
        primary: colors.terracotta,
        textPrimary: colors.black,
        site: {
            background: colors.pampas,
        },
    },
};

export const darkTheme = {
    ...common,
    colors: {
        primary: colors.terracotta,
        textPrimary: colors.white,
        site: {
            background: colors.mineShaft,
        },
    },
};