export class InferenceEngine {
    public fuzzification(gdp: number, gpp: number, gpt: number, gd2pp: number, hba1c: number, hdl: number, trigliserida: number, insulin: number) {
        let fgdp: string;
        let fgpp: string;
        let fgpt: string;
        let fgd2pp: string;
        let fhba1c: string;
        let fhdl: string;
        let ftrigliserida: string;
        let finsulin: string;

        //Fuzzification gdp
        if(gdp < 75){
            fgdp = "Rendah";
        } else if ( gdp >= 75 && gdp <= 125) {
            fgdp = "Sedang";
        } else if (gdp >= 125 && gdp <= 145) {
            fgdp = "Tinggi";
        }else if ( gdp > 145 ) {
            fgdp = "Sangat Tinggi";
        }

        //Fuzzification gpp
        if(gpp < 79){
            fgpp = "Rendah";
        } else if ( gpp >= 79 && gpp <= 120) {
            fgpp = "Sedang";
        } else if (gpp >= 120 && gpp <= 135) {
            fgpp = "Tinggi";
        }else if ( gpp > 135 ) {
            fgpp = "Sangat Tinggi";
        }

        //Fuzzification gpt
        if(gpt < 115){
            fgpt = "Rendah";
        } else if ( gpt >= 115 && gpt <= 140) {
            fgpt = "Sedang";
        } else if (gpt >= 140 && gpt <= 185) {
            fgpt = "Tinggi";
        }else if ( gpt > 185 ) {
            fgpt = "Sangat Tinggi";
        }

        //Fuzzification gd2pp
        if(gd2pp < 90){
            fgd2pp = "Rendah";
        } else if ( gd2pp >= 90 && gd2pp <= 130) {
            fgd2pp = "Sedang";
        } else if (gd2pp >= 130 && gd2pp <= 190) {
            fgd2pp = "Tinggi";
        }else if ( gd2pp > 190 ) {
            fgd2pp = "Sangat Tinggi";
        }
        
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

        //P1
        if(gdp < 75 && hdl >= 30 || hdl <= 75 && gpt < 115){
            
        }
    }
}