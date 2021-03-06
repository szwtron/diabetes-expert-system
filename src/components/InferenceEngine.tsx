export class InferenceEngine {
    public fuzzification = (gdp: number, gpp: number, gpt: number, gd2pp: number, hba1c: number, hdl: number, trigliserida: number, insulin: number) => {
        let fhasil: string = 'Negatif Diabetes';

        //Fuzzification gdp
        let fgdp: number[] = [0];

        //0 low, 1  mid, 2 high, 3 very high
        //Range gdp rendah 75 - 85
        if (gdp <= 75) {
            fgdp[0] = 1;
        } else if (gdp >= 75 && gdp <= 85) {
            fgdp[0] = ((85 - gdp) / 10);
            console.log("fgdp[0] = " + fgdp[0]);
        } else if (gdp >= 85) {
            fgdp[0] = 0;
        }

        //Range gdp sedang
        if (gdp <= 75) {
            fgdp[1] = 0;
        } else if (gdp >= 75 && gdp <= 85) {
            fgdp[1] = ((gdp - 75) / 10);
        } else if (gdp >= 85 && gdp <= 115) {
            fgdp[1] = 1;
        } else if (gdp >= 85 && gdp <= 115) {
            fgdp[1] = ((125 - gdp) / 10);
        } else if (gdp >= 125) {
            fgdp[1] = 0;
        }

        //Range gdp tinggi
        if (gdp <= 115) {
            fgdp[2] = 0;
        } else if (gdp >= 115 && gdp <= 125) {
            fgdp[2] = ((gdp - 115) / 10);
        } else if (gdp >= 125 && gdp <= 145) {
            fgdp[2] = 1;
        } else if (gdp >= 145 && gdp <= 155) {
            fgdp[2] = ((155 - gdp) / 10);
        } else if (gdp >= 155) {
            fgdp[2] = 0;
        }

        //Range gdp sangat tinggi
        if (gdp <= 145) {
            fgdp[3] = 0;
        } else if (gdp >= 145 && gdp <= 155) {
            fgdp[3] = ((gdp - 145) / 10);
        } else if (gdp >= 155) {
            fgdp[3] = 1;
        }


        //Fuzzification gpp
        let fgpp: number[] = [0];

        //0 low, 1  mid, 2 high, 3 very high
        //Range gpp rendah 65 - 75
        if (gpp <= 65) {
            fgpp[0] = 1;
        } else if (gpp >= 65 && gpp <= 75) {
            fgpp[0] = ((75 - gpp) / 10);
        } else if (gpp >= 75) {
            fgpp[0] = 0;
        }

        //Range gpp sedang
        if (gpp <= 65) {
            fgpp[1] = 0;
        } else if (gpp >= 65 && gpp <= 75) {
            fgpp[1] = ((gpp - 65) / 10);
        } else if (gpp >= 75 && gpp <= 105) {
            fgpp[1] = 1;
        } else if (gpp >= 105 && gpp <= 115) {
            fgpp[1] = ((115 - gpp) / 10);
        } else if (gpp >= 115) {
            fgpp[1] = 0;
        }

        //Range gpp tinggi
        if (gpp <= 105) {
            fgpp[2] = 0;
        } else if (gpp >= 105 && gpp <= 115) {
            fgpp[2] = ((gpp - 105) / 10);
        } else if (gpp >= 115 && gpp <= 135) {
            fgpp[2] = 1;
        } else if (gpp >= 135 && gpp <= 145) {
            fgpp[2] = ((145 - gpp) / 10);
        } else if (gpp >= 145) {
            fgpp[2] = 0;
        }

        //Range gdp sangat tinggi
        if (gpp <= 135) {
            fgpp[3] = 0;
        } else if (gpp >= 135 && gpp <= 145) {
            fgpp[3] = ((gpp - 135) / 10);
        } else if (gpp >= 145) {
            fgpp[3] = 1;
        }


        //Fuzzification gpt
        let fgpt: number[] = [0];

        //0 low, 1  mid, 2 high, 3 very high
        //Range gpt rendah 65 - 75
        if (gpt <= 105) {
            fgpt[0] = 1;
        } else if (gpt >= 105 && gpt <= 115) {
            fgpt[0] = ((115 - gpt) / 10);
        } else if (gpt >= 115) {
            fgpt[0] = 0;
        }

        //Range gpt sedang
        if (gpt <= 105) {
            fgpt[1] = 0;
        } else if (gpt >= 105 && gpt <= 115) {
            fgpt[1] = ((gpt - 105) / 10);
        } else if (gpt >= 115 && gpt <= 145) {
            fgpt[1] = 1;
        } else if (gpt >= 145 && gpt <= 155) {
            fgpt[1] = ((155 - gpt) / 10);
        } else if (gpt >= 155) {
            fgpt[1] = 0;
        }

        //Range gpt tinggi
        if (gpt <= 145) {
            fgpt[2] = 0;
        } else if (gpt >= 145 && gpt <= 155) {
            fgpt[2] = ((gpt - 145) / 10);
        } else if (gpt >= 155) {
            fgpt[2] = 1;
        }


        //Fuzzification gd2pp
        let fgd2pp: number[] = [0];

        //0 low, 1  mid, 2 high, 3 very high
        //Range gd2pp rendah 65 - 75
        if (gd2pp <= 95) {
            fgd2pp[0] = 1;
        } else if (gd2pp >= 95 && gd2pp <= 105) {
            fgd2pp[0] = ((105 - gd2pp) / 10);
        } else if (gd2pp >= 105) {
            fgd2pp[0] = 0;
        }

        //Range gd2pp sedang
        if (gd2pp <= 95) {
            fgd2pp[1] = 0;
        } else if (gd2pp >= 95 && gd2pp <= 105) {
            fgd2pp[1] = ((gd2pp - 95) / 10);
        } else if (gd2pp >= 105 && gd2pp <= 135) {
            fgd2pp[1] = 1;
        } else if (gd2pp >= 135 && gd2pp <= 145) {
            fgd2pp[1] = ((145 - gd2pp) / 10);
        } else if (gd2pp >= 145) {
            fgd2pp[1] = 0;
        }

        //Range gd2pp tinggi
        if (gd2pp <= 135) {
            fgd2pp[2] = 0;
        } else if (gd2pp >= 135 && gd2pp <= 145) {
            fgd2pp[2] = ((gd2pp - 135) / 10);
        } else if (gd2pp >= 145 && gd2pp <= 195) {
            fgd2pp[2] = 1;
        } else if (gd2pp >= 195 && gd2pp <= 205) {
            fgd2pp[2] = ((205 - gd2pp) / 10);
        } else if (gd2pp >= 205) {
            fgd2pp[2] = 0;
        }

        //Range gd2pp sangat tinggi
        if (gd2pp <= 195) {
            fgd2pp[3] = 0;
        } else if (gd2pp >= 195 && gd2pp <= 205) {
            fgd2pp[3] = ((gd2pp - 195) / 10);
        } else if (gd2pp >= 205) {
            fgd2pp[3] = 1;
        }


        //Fuzzification hba1c
        let fhba1c: number[] = [0];

        //0 low, 1  mid, 2 high, 3 very high
        //Range hba1c rendah
        if (hba1c <= 3) {
            fhba1c[0] = 1;
        } else if (hba1c >= 3 && hba1c <= 4) {
            fhba1c[0] = ((4 - hba1c));
        } else if (hba1c >= 4) {
            fhba1c[0] = 0;
        }

        //Range hba1c sedang
        if (hba1c <= 3) {
            fhba1c[1] = 0;
        } else if (hba1c >= 3 && hba1c <= 4) {
            fhba1c[1] = ((gdp - 4));
        } else if (hba1c >= 4 && hba1c <= 6) {
            fhba1c[1] = 1;
        } else if (hba1c >= 6 && hba1c <= 7) {
            fhba1c[1] = ((7 - hba1c));
        } else if (hba1c >= 7) {
            fhba1c[1] = 0;
        }

        //Range hba1c tinggi
        if (hba1c <= 6) {
            fhba1c[2] = 0;
        } else if (hba1c >= 6 && hba1c <= 7) {
            fhba1c[2] = ((hba1c - 6));
        } else if (hba1c >= 7) {
            fhba1c[2] = 1;
        }


        //Fuzzification hdl
        let fhdl: number[] = [0];

        //0 low, 1  mid, 2 high, 3 very high
        //Range hdl rendah
        if (hdl <= 35) {
            fhdl[0] = 1;
        } else if (hdl >= 35 && hdl <= 45) {
            fhdl[0] = ((45 - hdl) / 10);
        } else if (hdl >= 45) {
            fhdl[0] = 0;
        }

        //Range hdl sedang
        if (hdl <= 35) {
            fhdl[1] = 0;
        } else if (hdl >= 35 && hdl <= 45) {
            fhdl[1] = ((gdp - 35) / 10);
        } else if (hdl >= 45 && hdl <= 55) {
            fhdl[1] = 1;
        } else if (hdl >= 55 && hdl <= 65) {
            fhdl[1] = ((65 - hdl) / 10);
        } else if (hdl >= 65) {
            fhdl[1] = 0;
        }

        //Range hdl tinggi
        if (hdl <= 55) {
            fhdl[2] = 0;
        } else if (hdl >= 55 && hdl <= 65) {
            fhdl[2] = ((hdl - 55) / 10);
        } else if (hdl >= 65) {
            fhdl[2] = 1;
        }

        //Fuzzification trigliserida
        let ftrigliserida: number[] = [0];

        //0 low, 1  mid, 2 high, 3 very high
        //Range trigliserida rendah
        if (trigliserida <= 45) {
            ftrigliserida[0] = 1;
        } else if (trigliserida >= 45 && trigliserida <= 55) {
            ftrigliserida[0] = ((55 - trigliserida) / 10);
        } else if (trigliserida >= 55) {
            ftrigliserida[0] = 0;
        }

        //Range trigliserida sedang
        if (trigliserida <= 45) {
            ftrigliserida[1] = 0;
        } else if (trigliserida >= 45 && trigliserida <= 55) {
            ftrigliserida[1] = ((gdp - 45) / 10);
        } else if (trigliserida >= 55 && trigliserida <= 145) {
            ftrigliserida[1] = 1;
        } else if (trigliserida >= 145 && trigliserida <= 155) {
            ftrigliserida[1] = ((155 - trigliserida) / 10);
        } else if (trigliserida >= 155) {
            ftrigliserida[1] = 0;
        }

        //Range trigliserida tinggi
        if (trigliserida <= 145) {
            ftrigliserida[2] = 0;
        } else if (trigliserida >= 145 && trigliserida <= 155) {
            ftrigliserida[2] = ((trigliserida - 145) / 10);
        } else if (trigliserida >= 155) {
            ftrigliserida[2] = 1;
        }

        //Fuzzification insulin
        let finsulin: number[] = [0];

        //0 low, 1  mid, 2 high, 3 very high
        //Range trigliserida rendah
        if (insulin <= 3) {
            finsulin[0] = 1;
        } else if (insulin >= 3 && insulin <= 4) {
            finsulin[0] = ((4 - insulin));
        } else if (insulin >= 4) {
            finsulin[0] = 0;
        }

        //Range insulin sedang
        if (insulin <= 3) {
            finsulin[1] = 0;
        } else if (insulin >= 3 && insulin <= 4) {
            finsulin[1] = ((gdp - 4));
        } else if (insulin >= 4 && insulin <= 6) {
            finsulin[1] = 1;
        } else if (insulin >= 6 && insulin <= 7) {
            finsulin[1] = ((7 - insulin));
        } else if (insulin >= 7) {
            finsulin[1] = 0;
        }

        //Range insulin tinggi
        if (insulin <= 6) {
            finsulin[2] = 0;
        } else if (insulin >= 6 && insulin <= 7) {
            finsulin[2] = ((insulin - 6) / 10);
        } else if (insulin >= 7) {
            finsulin[2] = 1;
        }



        //0 low, 1  mid, 2 high, 3 very high
        let weightRule1 = Math.min(fgdp[0], fhdl[1], fgpt[0]);
        let weightRule2 = Math.min(fgdp[0], fgpp[0], fgd2pp[1]);

        let weightRule: number[] = [0];
        weightRule[0] = Math.min(fgdp[0], fhdl[1], fgpt[0]);
        weightRule[1] = Math.min(fgdp[0], fgpp[0], fgd2pp[1]);
        weightRule[2] = Math.min(fgpt[0], fhdl[1], fgpt[0]);
        weightRule[3] = Math.min(fgdp[0], finsulin[1], fhdl[2]);
        weightRule[4] = Math.min(fgdp[0], fhba1c[0], ftrigliserida[2]);
        weightRule[5] = Math.min(fgdp[0], ftrigliserida[0], fgd2pp[1]);
        weightRule[6] = Math.min(fgdp[0], fgd2pp[0], fgpt[0]);
        weightRule[7] = Math.min(fgpp[0], fgd2pp[0], fhdl[2]);
        weightRule[8] = Math.min(fgpt[0], fgd2pp[0], fgd2pp[1]);
        weightRule[9] = Math.min(fgpt[0], fgpp[0], ftrigliserida[2]);
        weightRule[10] = Math.min(fgpp[0], fhdl[1], fgpt[0]);
        weightRule[11] = Math.min(fgpp[0], ftrigliserida[2], fgd2pp[1]);
        weightRule[12] = Math.min(fgpt[0], ftrigliserida[0], fgpt[0]);
        weightRule[13] = Math.min(fgpt[0], fhba1c[0], ftrigliserida[2]);
        weightRule[14] = Math.min(fgd2pp[0], fhdl[1], fgpt[0]);
        weightRule[15] = Math.min(fgpp[0], fhba1c[0], fgd2pp[1]);
        weightRule[16] = Math.min(fgpt[0], finsulin[1], fhdl[2]);
        weightRule[17] = Math.min(fgdp[0], fgpt[0], fgpt[0]);
        weightRule[18] = Math.min(fgd2pp[0], fhba1c[0], fgd2pp[1]);
        weightRule[19] = Math.min(fhba1c[0], fhdl[1], ftrigliserida[2]);
        weightRule[20] = Math.min(fhba1c[0], ftrigliserida[0], fgpt[0]);
        weightRule[21] = Math.min(fgd2pp[0], ftrigliserida[0], fgpt[0]);
        weightRule[22] = Math.min(fgdp[1], fgpt[1], fhdl[2]);
        weightRule[23] = Math.min(fgdp[1], fgd2pp[2], ftrigliserida[0]);
        weightRule[24] = Math.min(fgdp[1], fgpp[1], finsulin[0]);
        weightRule[25] = Math.min(fhba1c[2], ftrigliserida[2], ftrigliserida[2]);
        weightRule[26] = Math.min(fgdp[3], finsulin[0], fgpt[2]);
        weightRule[27] = Math.min(fhba1c[2], finsulin[0], finsulin[0]);
        weightRule[28] = Math.min(fgdp[3], fhdl[0], fgd2pp[2]);
        weightRule[29] = Math.min(fhba1c[2], fhdl[0], ftrigliserida[2]);
        weightRule[30] = Math.min(fgdp[2], finsulin[0], fgd2pp[2]);
        weightRule[31] = Math.min(fgdp[2], fgpp[2], ftrigliserida[2]);
        weightRule[32] = Math.min(fgdp[3], fgpp[2], fgd2pp[2]);
        weightRule[33] = Math.min(fgdp[2], fgpp[3], ftrigliserida[2]);
        weightRule[34] = Math.min(fgdp[3], ftrigliserida[2], fgpt[2]);
        weightRule[35] = Math.min(fgdp[0], fgpp[2], ftrigliserida[2]);


        var j = 0;
        var k = 0;
        var l = 0;
        var m = 0;
        //Memisahkan weight rule negatif diabetes, pra diabetes, diabetes 1, dan diabetes 2
        let praDiabetes: number[] = [0];
        let diabetes1: number[] = [0];
        let diabetes2: number[] = [0];
        let negatifDiabetes: number[] = [0];

        //Negatif diabetes
        for (var i = 0; i < 36; i++) {
            negatifDiabetes[m] = weightRule[i];
            m++;
        }

        for (var i = 0; i < 36; i++) {
            //Pradiabetes
            if (i == 22) {
                praDiabetes[j] = weightRule[i];
                j++;
            }
            if (i == 23) {
                praDiabetes[j] = weightRule[i];
                j++;
            }
            if (i == 24) {
                praDiabetes[j] = weightRule[i];
                j++;
            }
            if (i == 31) {
                praDiabetes[j] = weightRule[i];
                j++;
            }
            if (i == 35) {
                praDiabetes[j] = weightRule[i];
                j++;
            }

            //diabetes tipe 1
            if (i == 25) {
                diabetes1[k] = weightRule[i];
                k++;
            }
            if (i == 26) {
                diabetes1[k] = weightRule[i];
                k++;
            }
            if (i == 27) {
                diabetes1[k] = weightRule[i];
                k++;
            }

            //Diabetes tipe 2
            if (i == 28) {
                diabetes2[l] = weightRule[i];
                l++;
            }
            if (i == 29) {
                diabetes2[l] = weightRule[i];
                l++;
            }

            if (i == 30) {
                diabetes2[l] = weightRule[i];
                l++;
            }

            if (i == 32) {
                diabetes2[l] = weightRule[i];
                l++;
            }

            if (i == 33) {
                diabetes2[l] = weightRule[i];
                l++;
            }
            if (i == 34) {
                diabetes2[l] = weightRule[i];
                l++;
            }
        }

        let maxProbs: number = 0;
        let index: number = 0;
        for (var i = 0; i < 36; i++) {
            if (weightRule[i] >= maxProbs) {
                maxProbs = Math.max(weightRule[i]);
                index = i;
            }
        }

        console.log("Hasil diagnosa")
        console.log("Sesuai dengan rules nomor = " + index);
        console.log("Dengan bobot = " + (maxProbs * 100) + "%");

        if (index < 22) {
            fhasil = "Negatif Diabetes";
        } else if ((index >= 22 && index < 25) || index == 31 || index == 35) {
            fhasil = "Pra Diabetes";
        } else if (index >= 25 && index < 28) {
            fhasil = "Diabetes Tipe 1";
        } else if ((index >= 28 && index < 31) || (index >= 32 && index < 35)) {
            fhasil = "Diabetes Tipe 2";
        }

        return fhasil;
    };
};
