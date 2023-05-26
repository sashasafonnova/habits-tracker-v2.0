type Mods = Record<string, boolean | string>;


export const classMaker = (mainClass: string, mods: Mods = {}, additional: string[] = []): string => {
    return [
        mainClass,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
        ...additional.filter(Boolean),
    ]
        .join(' ');
};