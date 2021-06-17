export declare const languageReplacements: {
    ara: Language;
    ces: Language;
    dan: Language;
    deu: Language;
    div: Language;
    ell: Language;
    fas: Language;
    fra: Language;
    gle: Language;
    grc: Language;
    hun: Language;
    hye: Language;
    jav: Language;
    jpn: Language;
    kat: Language;
    kor: Language;
    lat: Language;
    lav: Language;
    lit: Language;
    mkd: Language;
    nld: Language;
    nno: Language;
    nob: Language;
    nor: Language;
    pol: Language;
    por: Language;
    pus: Language;
    ron: Language;
    rus: Language;
    slk: Language;
    spa: Language;
    srp: Language;
    swe: Language;
    tur: Language;
    ukr: Language;
    urd: Language;
    vie: Language;
};
export declare type ISO6393 = string;
export declare type SupportedISO6393s = keyof typeof languageReplacements;
export declare const supportedISO6393s: ("ara" | "ces" | "dan" | "deu" | "div" | "ell" | "fas" | "fra" | "gle" | "grc" | "hun" | "hye" | "jav" | "jpn" | "kat" | "kor" | "lat" | "lav" | "lit" | "mkd" | "nld" | "nno" | "nob" | "nor" | "pol" | "por" | "pus" | "ron" | "rus" | "slk" | "spa" | "srp" | "swe" | "tur" | "ukr" | "urd" | "vie")[];
export interface Language {
    ISO6393: ISO6393;
    type: "list" | "module";
    list?: {
        uses?: SupportedISO6393s[];
        conflictsWith?: SupportedISO6393s[];
        replacements?: [string, string][];
    };
    module?: {
        name: string;
        function?: string;
    };
}
