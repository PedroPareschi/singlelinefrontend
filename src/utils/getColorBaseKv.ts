export function getColorBaseKv(basekv: number) {
    switch (basekv) {
        case 33:
            return '#ffda6b';
        case 66:
            return '#7bebaa';
        case 138:
            return '#e6ac00';
        case 230:
            return '#FF7F27';
        case 345:
            return '#2980b9';
        case 440:
            return '#9a58b5';
        case 500:
            return '#3F48CC';
        case 765:
            return '#000';
        default:
            return '#7F7F7F';
    }
}