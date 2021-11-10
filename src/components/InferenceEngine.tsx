export class InferenceEngine {
    public fuzzification(gdp: number, gpp: number, gpt: number, gd2pp: number, hba1c: number, hdl: number, trigliserida: number, insulin: number) {
        //let fgdp: string = '';
        //let fgpp: string = '';
        //let fgpt: string = '';
        //let fgd2pp: string = '';
        let fhba1c: string = '';
        let fhdl: string = '';
        let ftrigliserida: string = '';
        let finsulin: string = '';
        let fhasil: string = 'Negatif Diabetes';

        

        //Fuzzification gdp
        let fgdp: number[] = [0] ;

        //0 low, 1  mid, 2 high, 3 very high
        //Range gdp rendah 75 - 85
        if(gdp <= 75){
            fgdp[0] = 1;
        } else if (gdp >= 75 && gdp <= 85){
            fgdp[0] = ((85 - gdp) / 10);
        } else if (gdp >= 85) {
            fgdp[0] = 0;
        }

        //Range gdp sedang 
        if(gdp <= 75){
            fgdp[1] = 0;
        } else if (gdp >= 75 && gdp <= 85){
            fgdp[1] = ((gdp - 75) / 10);
        } else if (gdp >= 85 && gdp <= 115){
            fgdp[1] = 1;
        } else if (gdp >= 85 && gdp <= 115){
            fgdp[1] = ((125 - gdp) / 10);
        }else if (gdp >= 125) {
            fgdp[1] = 0;
        }

        //Range gdp tinggi
        if(gdp <= 115){
            fgdp[2] = 0;
        } else if (gdp >= 115 && gdp <= 125){
            fgdp[2] = ((gdp - 115) / 10);
        } else if (gdp >= 125 && gdp <= 145){
            fgdp[2] = 1;
        } else if (gdp >= 145 && gdp <= 155) {
            fgdp[2] = ((155 - gdp) / 10);
        }else if (gdp >= 155) {
            fgdp[2] = 0;
        }

        //Range gdp sangat tinggi
        if(gdp <= 145){
            fgdp[3] = 0;
        } else if (gdp >= 145 && gdp <= 155){
            fgdp[3] = ((gdp - 145) / 10);
        } else if (gdp >= 155) {
            fgdp[3] = 1;
        }


        //Fuzzification gpp
        let fgpp: number[] = [0] ;

        //0 low, 1  mid, 2 high, 3 very high
        //Range gpp rendah 65 - 75
        if(gpp <= 65){
            fgpp[0] = 1;
        } else if (gpp >= 65 && gpp <= 75){
            fgpp[0] = ((75 - gpp) / 10);
        } else if (gpp >= 75) {
            fgpp[0] = 0;
        }

        //Range gpp sedang 
        if(gpp <= 65){
            fgpp[1] = 0;
        } else if (gpp >= 65 && gpp <= 75){
            fgpp[1] = ((gpp - 65) / 10);
        } else if (gpp >= 75 && gpp <= 105){
            fgpp[1] = 1;
        } else if (gpp >= 105 && gpp <= 115){
            fgpp[1] = ((115 - gpp) / 10);
        }else if (gpp >= 115) {
            fgpp[1] = 0;
        }

        //Range gpp tinggi
        if(gpp <= 105){
            fgpp[2] = 0;
        } else if (gpp >= 105 && gpp <= 115){
            fgpp[2] = ((gpp - 105) / 10);
        } else if (gpp >= 115 && gpp <= 135){
            fgpp[2] = 1;
        } else if (gpp >= 135 && gpp <= 145) {
            fgpp[2] = ((145 - gpp) / 10);
        }else if (gpp >= 145) {
            fgpp[2] = 0;
        }

        //Range gdp sangat tinggi
        if(gpp <= 135){
            fgpp[0] = 0;
        } else if (gpp >= 135 && gpp <= 145){
            fgpp[0] = ((gpp - 135) / 10);
        } else if (gpp >= 145) {
            fgpp[0] = 1;
        }


        //Fuzzification gpt
        let fgpt: number[] = [0] ;

        //0 low, 1  mid, 2 high, 3 very high
        //Range gpp rendah 65 - 75
        if(gpt <= 105){
            fgpt[0] = 1;
        } else if (gpt >= 105 && gpt <= 115){
            fgpt[0] = ((115 - gpt) / 10);
        } else if (gpt >= 115) {
            fgpt[0] = 0;
        }

        //Range gpt sedang 
        if(gpt <= 105){
            fgpt[1] = 0;
        } else if (gpt >= 105 && gpt <= 115){
            fgpt[1] = ((gpt - 105) / 10);
        } else if (gpt >= 115 && gpt <= 145){
            fgpt[1] = 1;
        } else if (gpt >= 145 && gpt <= 155){
            fgpt[1] = ((155 - gpt) / 10);
        }else if (gpt >= 155) {
            fgpt[1] = 0;
        }

        //Range gpt tinggi
        if(gpt <= 145){
            fgpt[2] = 0;
        } else if (gpt >= 145 && gpt <= 155){
            fgpt[2] = ((gpt - 145) / 10);
        } else if (gpt >= 155) {
            fgpt[2] = 1;
        }


        //Fuzzification gd2pp
        let fgd2pp: number[] = [0] ;

        //0 low, 1  mid, 2 high, 3 very high
        //Range gd2pp rendah 65 - 75
        if(gd2pp <= 95){
            fgd2pp[0] = 1;
        } else if (gd2pp >= 95 && gd2pp <= 105){
            fgd2pp[0] = ((115 - gd2pp) / 10);
        } else if (gd2pp >= 105) {
            fgd2pp[0] = 0;
        }

        //Range gd2pp sedang 
        if(gd2pp <= 95){
            fgd2pp[1] = 0;
        } else if (gd2pp >= 95 && gd2pp <= 105){
            fgd2pp[1] = ((gd2pp - 95) / 10);
        } else if (gd2pp >= 105 && gd2pp <= 135){
            fgd2pp[1] = 1;
        } else if (gd2pp >= 135 && gd2pp <= 145){
            fgd2pp[1] = ((145 - gd2pp) / 10);
        }else if (gd2pp >= 145) {
            fgd2pp[1] = 0;
        }

        //Range gd2pp tinggi
        if(gd2pp <= 135){
            fgd2pp[2] = 0;
        } else if (gd2pp >= 135 && gd2pp <= 145){
            fgd2pp[2] = ((gd2pp - 135) / 10);
        } else if (gd2pp >= 145 && gd2pp <= 195){
            fgd2pp[2] = 1;
        } else if (gd2pp >= 195 && gd2pp <= 205){
            fgd2pp[2] = ((205 - gd2pp) / 10);
        } else if (gd2pp >= 205) {
            fgd2pp[2] = 0;
        }

        //Range gd2pp sangat tinggi
        if(gd2pp <= 195){
            fgd2pp[3] = 0;
        } else if (gd2pp >= 195 && gd2pp <= 205){
            fgd2pp[3] = ((115 - gd2pp) / 10);
        } else if (gd2pp >= 205) {
            fgd2pp[3] = 1;
        }


        // if(gd2pp < 90){
        //     fgd2pp = "Rendah";
        // } else if ( gd2pp >= 90 && gd2pp <= 130) {
        //     fgd2pp = "Sedang";
        // } else if (gd2pp >= 130 && gd2pp <= 190) {
        //     fgd2pp = "Tinggi";
        // }else if ( gd2pp > 190 ) {
        //     fgd2pp = "Sangat Tinggi";
        // }

        //Fuzzification hba1c
        if(hba1c < 3){
            fhba1c = "Rendah";
        } else if ( hba1c >= 3 && hba1c <= 75) {
            fhba1c = "Sedang";
        } else if (hba1c > 9) {
            fhba1c = "Tinggi";
        }

        //Fuzzification hdl
        if(hdl < 30){
            fhdl = "Rendah";
        } else if ( hdl >= 30 && hdl <= 75) {
            fhdl = "Sedang";
        } else if (hdl > 75) {
            fhdl = "Tinggi";
        }

        //Fuzzification trigliserida
        if(trigliserida < 35){
            ftrigliserida = "Rendah";
        } else if ( trigliserida >= 35 && trigliserida <= 165) {
            ftrigliserida = "Sedang";
        } else if (trigliserida > 165) {
            ftrigliserida = "Tinggi";
        }

        //Fuzzification insulin
        if(insulin < 5){
            finsulin = "Rendah";
        } else if ( insulin >= 5 && insulin <= 9) {
            finsulin = "Sedang";
        } else if (insulin > 9) {
            finsulin = "Tinggi";
        }

        //If-then rule
        // if(fgdp == "Rendah" && fhdl == "Sedang" && fgpt == "Rendah") {
        //     fhasil = "Negatif Diabetes";
        // } else if(fgdp == "Rendah" && fgpp == "Rendah" && fgd2pp == "Sedang") {
        //     fhasil = "Negatif Diabetes";
        // } else if(fgpt == "Rendah" && fhdl == "Sedang" && fgpt == "Rendah") {
        //     fhasil = "Negatif Diabetes";
        // } else if(fgdp == "Rendah" && finsulin == "Sedang" && fhdl == "Tinggi") {
        //     fhasil = "Negatif Diabetes";
        // } else if(fgdp == "Rendah" && fhba1c == "Rendah" && ftrigliserida == "Tinggi") {
        //     fhasil = "Negatif Diabetes";
        // } else if(fgdp == "Rendah" && ftrigliserida == "Rendah" && fgd2pp == "Sedang") {
        //     fhasil = "Negatif Diabetes";
        // } else if(fgdp == "Rendah" && fgd2pp == "Rendah" && fgpt == "Rendah") {
        //     fhasil = "Negatif Diabetes";
        // } else if(fgpp == "Rendah" && fgd2pp == "Rendah" && fhdl == "Tinggi") {
        //     fhasil = "Negatif Diabetes";
        // } else if(fgpt == "Rendah" && fgdp == "Rendah" && fgd2pp == "Sedang") {
        //     fhasil = "Negatif Diabetes";
        // } else if(fgpt == "Rendah" && fgpp == "Rendah" && ftrigliserida == "Tinggi") {
        //     fhasil = "Negatif Diabetes";
        // } else if(fgpp == "Rendah" && fhdl == "Sedang" && fgpt == "Rendah") {
        //     fhasil = "Negatif Diabetes";
        // } else if(fgpp == "Rendah" && ftrigliserida == "Rendah" && fgd2pp == "Sedang") {
        //     fhasil = "Negatif Diabetes";
        // } else if(fgpt == "Rendah" && ftrigliserida == "Rendah" && fgpp == "Rendah") {
        //     fhasil = "Negatif Diabetes";
        // } else if(fgpt == "Rendah" && fhba1c == "Rendah" && ftrigliserida == "Tinggi") {
        //     fhasil = "Negatif Diabetes";
        // } else if(fgd2pp == "Rendah" && fhdl == "Sedang" && fgpt == "Rendah") {
        //     fhasil = "Negatif Diabetes";
        // } else if(fgpp == "Rendah" && fhba1c == "Rendah" && fgd2pp == "Sedang") {
        //     fhasil = "Negatif Diabetes";
        // } else if(fgpt == "Rendah" && finsulin == "Sedang" && fhdl == "Tinggi") {
        //     fhasil = "Negatif Diabetes";
        // } else if(fgdp == "Rendah" && fgpt == "Rendah" && fgpp == "Rendah") {
        //     fhasil = "Negatif Diabetes";
        // } else if(fgdp == "Rendah" && fhba1c == "Rendah" && fgd2pp == "Sedang") {
        //     fhasil = "Negatif Diabetes";
        // } else if(fhba1c == "Rendah" && fhdl == "Sedang" && ftrigliserida == "Tinggi") {
        //     fhasil = "Negatif Diabetes";
        // } else if(fhba1c == "Rendah" && ftrigliserida == "Rendah" && fgpt == "Rendah") {
        //     fhasil = "Negatif Diabetes";
        // } else if(fgd2pp == "Rendah" && ftrigliserida == "Rendah" && fgpt == "Rendah") {
        //     fhasil = "Negatif Diabetes";
        // } else if(fgdp == "Sedang" && fgpt == "Sedang" && fhdl == "Tinggi") {
        //     fhasil = "PraDiabetes";
        // } else if(fgdp == "Sedang" && fgd2pp == "Tinggi" && finsulin == "Rendah") {
        //     fhasil = "PraDiabetes";
        // } else if(fgdp == "Sedang" && fgpp == "Sedang" && finsulin == "Rendah") {
        //     fhasil = "PraDiabetes";
        // } else if(fhba1c == "Tinggi" && ftrigliserida == "Tinggi") {
        //     fhasil = "Positif Diabetes Tipe 1";
        // } else if(fgdp == "Sangat Tinggi" && finsulin == "Rendah" && fgpt == "Tinggi") {
        //     fhasil = "Positif Diabetes Tipe 1";
        // } else if(fhba1c == "Tinggi" && finsulin == "Rendah") {
        //     fhasil = "Positif Diabetes Tipe 1";
        // } else if(fgdp == "Sangat Tinggi" && fhdl == "Rendah" && fgd2pp == "Tinggi") {
        //     fhasil = "Positif Diabetes Tipe 2";
        // } else if(fhba1c == "Tinggi" && fhdl == "Rendah" && ftrigliserida == "Tinggi") {
        //     fhasil = "Positif Diabetes Tipe 2";
        // } else if(fgdp == "Tinggi" && finsulin == "Rendah" && fgd2pp == "Tinggi") {
        //     fhasil = "Positif Diabetes Tipe 2";
        // } else if(fgdp == "Tinggi" && fgpp == "Tinggi" && ftrigliserida == "Tinggi") {
        //     fhasil = "PraDiabetes";
        // } else if(fgdp == "Sangat Tinggi" && fgpp == "Tinggi" && fgd2pp == "Tinggi") {
        //     fhasil = "Positif Diabetes Tipe 2";
        // } else if(fgdp == "Tinggi" && fgpp == "Sangat Tinggi" && ftrigliserida == "Tinggi") {
        //     fhasil = "Positif Diabetes Tipe 2";
        // } else if(fgdp == "Sangat Tinggi" && ftrigliserida == "Tinggi" && fgpt == "Tinggi") {
        //     fhasil = "Positif Diabetes Tipe 2";
        // } else if(fgdp == "Rendag" && fgpp == "Tinggi" && ftrigliserida == "Tinggi") {
        //     fhasil = "PraDiabetes";
        // }

        return fhasil;
    }
}