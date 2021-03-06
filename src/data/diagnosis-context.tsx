import React from 'react';

export interface Diagnosis {
    //Data diri
    id: number,
    email: string,
    name: string,
    telepon: string,

    //jenis kelamin dan umur
    sex: string,
    umur: number,

    //Gejala
    gdp: number,
    gpp: number,
    gpt: number,
    gd2pp: number,
    hba1c: number,
    hdl: number,
    trigliserida: number,
    insulin: number,

    hasil: string
}

const DiagnosisContext = React.createContext<{
    diagnosis: Diagnosis[];
    addDiagnosis: (email: string, name: string, telepon: string, sex: string, umur: number, gdp: number, gpp: number, gpt: number, gd2pp: number, hba1c: number, hdl: number, trigliserida: number, insulin: number, hasil: string) => void,
    initContext: () => void;
}>({
    diagnosis: [],
    addDiagnosis: () => { },
    initContext: () => { }
});

export default DiagnosisContext;