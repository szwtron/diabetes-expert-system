import React, {useCallback, useEffect, useState} from 'react';
import DiagnosisContext, {Diagnosis} from "./diagnosis-context";
import {Storage} from "@capacitor/storage"
import { Directory, Filesystem } from '@capacitor/filesystem';

const DiagnosisContextProvider: React.FC = props => {
    const [diagnosis, setDiagnosis] = useState<Diagnosis[]>([]);

    const addDiagnosis = (email: string, name: string, telepon: number, sex: string, umur: number, gdp: number, gpp: number, gpt: number, gd2pp: number, hba1c: number, hdl: number, trigliserida: number, insulin: number, hasil: number) => {
        const newDiagnosis: Diagnosis = {
            id: Math.round(Math.random() * 100),
            email,
            name,
            telepon,
            sex, 
            umur,
            gdp,
            gpp,
            gpt,
            gd2pp,
            hba1c,
            hdl,
            trigliserida,
            insulin,
            hasil
        }
        setDiagnosis(curDiagnosis => {
            return [...curDiagnosis, newDiagnosis];
        });
    };

    useEffect(() => {

        const storableDiagnosis = diagnosis.map(diagnosis => {
            return {
                id: diagnosis.id,
                email: diagnosis.email,
                name: diagnosis.name,
                telepon: diagnosis.telepon,
                sex: diagnosis.sex,
                umur: diagnosis.umur,
                gdp: diagnosis.gdp,
                gpp: diagnosis.gpp,
                gpt: diagnosis.gpt,
                gd2pp: diagnosis.gd2pp,
                hba1c: diagnosis.hba1c,
                hdl: diagnosis.hdl,
                trigliserida: diagnosis.trigliserida,
                insulin: diagnosis.insulin,
                hasil: diagnosis.hasil
            }
        });
        Storage.set({key: 'diagnosis', value: JSON.stringify(storableDiagnosis)});
    }, [diagnosis]);

    const initContext = useCallback(async () => {
        const diagnosisData = await Storage.get({key: 'diagnosis'});
        const storedDiagnosies = diagnosisData.value ? JSON.parse(diagnosisData.value) : [];
        const loadedDiagnosis: Diagnosis[] = [];
        for (const storedDiagnosis of storedDiagnosies) {
            const file = await Filesystem.readFile({
                path: storedDiagnosis.id,
                directory: Directory.Data
            })
            loadedDiagnosis.push({
                id: storedDiagnosis.id,
                email: storedDiagnosis.email,
                name: storedDiagnosis.name,
                telepon: storedDiagnosis.telepon,
                sex: storedDiagnosis.sex,
                umur: storedDiagnosis.umur,
                gdp: storedDiagnosis.gdp,
                gpp: storedDiagnosis.gpp,
                gpt: storedDiagnosis.gpt,
                gd2pp: storedDiagnosis.gd2pp,
                hba1c: storedDiagnosis.hba1c,
                hdl: storedDiagnosis.hdl,
                trigliserida: storedDiagnosis.trigliserida,
                insulin: storedDiagnosis.insulin,
                hasil: storedDiagnosis.hasil
            });
        }
        setDiagnosis(loadedDiagnosis);
    }, []);

    return (
        <DiagnosisContext.Provider value = {{diagnosis, addDiagnosis, initContext}}>
        {props.children}
        </DiagnosisContext.Provider>
    );
}

export default DiagnosisContextProvider;