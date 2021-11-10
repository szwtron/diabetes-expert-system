import { IonButton, IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { useContext, useRef } from "react";
import { useHistory } from "react-router";
import DiagnosisContext from "../data/diagnosis-context";
import './Home.css';
import { InferenceEngine } from "../components/InferenceEngine";



const Diagnosys: React.FC = () => {

    const nameRef = useRef<HTMLIonInputElement>(null);
    const emailRef = useRef<HTMLIonInputElement>(null);
    const telponRef = useRef<HTMLIonInputElement>(null);
    const sexRef = useRef<HTMLIonInputElement>(null);
    const umurRef = useRef<HTMLIonInputElement>(null);
    const gdpRef = useRef<HTMLIonInputElement>(null);
    const gppRef = useRef<HTMLIonInputElement>(null);
    const gptRef = useRef<HTMLIonInputElement>(null);
    const gd2ppRef = useRef<HTMLIonInputElement>(null);
    const hba1cRef = useRef<HTMLIonInputElement>(null);
    const hdlRef = useRef<HTMLIonInputElement>(null);
    const trrigliseridaRef = useRef<HTMLIonInputElement>(null);
    const insulinRef = useRef<HTMLIonInputElement>(null);

    const diagnosisCtx = useContext(DiagnosisContext);
    const history = useHistory();
    const inferenceEngine = new InferenceEngine();

    const addDiagnosisHandler = async () => {

        const enteredEmail = emailRef.current?.value as string;
        const enteredName = nameRef.current?.value as string;
        const enteredTelepon = telponRef.current?.value as string;
        const enteredSex = sexRef.current?.value as string;
        const enteredUmur = umurRef.current?.value as number;
        const enteredGdp = gdpRef.current?.value as number;
        const enteredGpp = gppRef.current?.value as number;
        const enteredGpt = gptRef.current?.value as number;
        const enteredGd2pp = gd2ppRef.current?.value as number;
        const enteredHba1c = hba1cRef.current?.value as number;
        const enteredHdl = hdlRef.current?.value as number;
        const enteredTrigliserida = trrigliseridaRef.current?.value as number;
        const enteredInsulin = insulinRef.current?.value as number;
        let hasil = '';

        hasil = inferenceEngine.fuzzification(enteredGdp, enteredGpp, enteredGpt, enteredGd2pp, enteredHba1c, enteredHdl, enteredTrigliserida, enteredInsulin);

        diagnosisCtx.addDiagnosis(enteredEmail, enteredName.toString(), enteredTelepon, enteredSex, enteredUmur, enteredGdp, enteredGpp, enteredGpt, enteredGd2pp, enteredHba1c, enteredHdl, enteredTrigliserida, enteredInsulin, hasil);

        history.push("/result");
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Diagnosis</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="bg1">
                <section className="hero ">
                    <IonCard>
                        <div className="container">
                            <div className="hero-inner">
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size="4">
                                            <div>
                                                <IonItem>
                                                    <IonLabel position="floating">Nama</IonLabel>
                                                    <IonInput ref={nameRef}></IonInput>
                                                </IonItem>
                                                <IonItem>
                                                    <IonLabel position="floating">Email</IonLabel>
                                                    <IonInput type="email" ref={emailRef}></IonInput>
                                                </IonItem>
                                                <IonItem>
                                                    <IonLabel position="floating">Nomor Telepon</IonLabel>
                                                    <IonInput ref={telponRef}></IonInput>
                                                </IonItem>
                                                <IonItem>
                                                    <IonLabel position="floating">Jenis Kelamin</IonLabel>
                                                    <IonInput ref={sexRef}></IonInput>
                                                </IonItem>
                                                <IonItem>
                                                    <IonLabel position="floating">Umur</IonLabel>
                                                    <IonInput type="number" ref={umurRef}></IonInput>
                                                </IonItem>
                                                <IonItem>
                                                    <IonLabel position="floating">Gula Darah Puasa (mg/dl)</IonLabel>
                                                    <IonInput type="number" ref={gdpRef}></IonInput>
                                                </IonItem>
                                                <IonItem>
                                                    <IonLabel position="floating">Gula Plasma Puasa (mg/dl)</IonLabel>
                                                    <IonInput type="number" ref={gppRef}></IonInput>
                                                </IonItem>
                                                <IonItem>
                                                    <IonLabel position="floating">Gula Plasma Tidur (mg/dl)</IonLabel>
                                                    <IonInput type="number" ref={gptRef}></IonInput>
                                                </IonItem>
                                                <IonItem>
                                                    <IonLabel position="floating">Gula Darah 2 jam PP (mg/dl)</IonLabel>
                                                    <IonInput type="number" ref={gd2ppRef}></IonInput>
                                                </IonItem>
                                                <IonItem>
                                                    <IonLabel position="floating">Kadar HbA1c (mg/dl)</IonLabel>
                                                    <IonInput type="number" ref={hba1cRef}></IonInput>
                                                </IonItem>
                                                <IonItem>
                                                    <IonLabel position="floating">Kadar HDL (mg/dl)</IonLabel>
                                                    <IonInput type="number" ref={hdlRef}></IonInput>
                                                </IonItem>
                                                <IonItem>
                                                    <IonLabel position="floating">Kadar Trigliserida (mg/dl)</IonLabel>
                                                    <IonInput type="number" ref={trrigliseridaRef}></IonInput>
                                                </IonItem>
                                                <IonItem>
                                                    <IonLabel position="floating">Kadar Insulin (%)</IonLabel>
                                                    <IonInput type="number" ref={insulinRef}></IonInput>
                                                </IonItem>
                                                <IonItem>
                                                    <IonButton onClick={addDiagnosisHandler}>Submit</IonButton>
                                                </IonItem>
                                            </div>
                                        </IonCol>
                                        <IonCol size="8">
                                            <IonCard color="light">
                                                <IonCardContent>
                                                    <IonGrid>
                                                        <IonRow>
                                                            <IonCol>
                                                                <IonCardTitle></IonCardTitle>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonCardTitle className="text-center">Rendah</IonCardTitle>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonCardTitle className="text-center">Sedang</IonCardTitle>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonCardTitle className="text-center">Tinggi</IonCardTitle>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonCardTitle className="text-center">Sangat Tinggi</IonCardTitle>
                                                            </IonCol>
                                                        </IonRow>

                                                        <IonRow>
                                                            <IonCol>
                                                                <p>Gula Darah Puasa (mg/dl)</p>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonText color="primary">
                                                                    <p className="text-center">&lt; 75</p>
                                                                </IonText>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonText color="primary">
                                                                    <p className="text-center">75 &le; GDP &le; 125</p>
                                                                </IonText>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonText color="primary">
                                                                    <p className="text-center">125 &le; GDP &le; 145</p>
                                                                </IonText>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonText color="primary">
                                                                    <p className="text-center">&gt; 145</p>
                                                                </IonText>
                                                            </IonCol>
                                                        </IonRow>

                                                        <IonRow>
                                                            <IonCol>
                                                                <p>Gula Plasma Puasa (mg/dl)</p>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonText color="primary">
                                                                    <p className="text-center">&lt; 75</p>
                                                                </IonText>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonText color="primary">
                                                                    <p className="text-center">75 &le; GPP &le; 115</p>
                                                                </IonText>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonText color="primary">
                                                                    <p className="text-center">115 &le; GPP &le; 145</p>
                                                                </IonText>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonText color="primary">
                                                                    <p className="text-center">&gt; 145</p>
                                                                </IonText>
                                                            </IonCol>
                                                        </IonRow>

                                                        <IonRow>
                                                            <IonCol>
                                                                <p>Gula Plasma Tidur (mg/dl)</p>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonText color="primary">
                                                                    <p className="text-center">&lt; 115</p>
                                                                </IonText>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonText color="primary">
                                                                    <p className="text-center">115 &le; GPT &le; 140</p>
                                                                </IonText>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonText color="primary">
                                                                    <p className="text-center">140 &le; GPT &le; 185</p>
                                                                </IonText>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonText color="primary">
                                                                    <p className="text-center">&gt; 185</p>
                                                                </IonText>
                                                            </IonCol>
                                                        </IonRow>

                                                        <IonRow>
                                                            <IonCol>
                                                                <p>Gula Darah 2 jam PP (mg/dl)</p>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonText color="primary">
                                                                    <p className="text-center">&lt; 90</p>
                                                                </IonText>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonText color="primary">
                                                                    <p className="text-center">90 &le; GD &le; 130</p>
                                                                </IonText>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonText color="primary">
                                                                    <p className="text-center">130 &le; GD &le; 190</p>
                                                                </IonText>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonText color="primary">
                                                                    <p className="text-center">&gt; 190</p>
                                                                </IonText>
                                                            </IonCol>
                                                        </IonRow>

                                                        <IonRow>
                                                            <IonCol>
                                                                <p>Kadar HbA1c (mg/dl)</p>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonText color="primary">
                                                                    <p className="text-center">&lt; 3</p>
                                                                </IonText>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonText color="primary">
                                                                    <p className="text-center">3 &le; HbA1c &le; 9</p>
                                                                </IonText>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonText color="primary">
                                                                    <p className="text-center">&gt; 9</p>
                                                                </IonText>
                                                            </IonCol>
                                                            <IonCol>
                                                            </IonCol>
                                                        </IonRow>

                                                        <IonRow>
                                                            <IonCol>
                                                                <p>Kadar HDL (mg/dl)</p>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonText color="primary">
                                                                    <p className="text-center">&lt; 30</p>
                                                                </IonText>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonText color="primary">
                                                                    <p className="text-center">30 &le; HDL &le; 75</p>
                                                                </IonText>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonText color="primary">
                                                                    <p className="text-center">&gt; 75</p>
                                                                </IonText>
                                                            </IonCol>
                                                            <IonCol>
                                                            </IonCol>
                                                        </IonRow>

                                                        <IonRow>
                                                            <IonCol>
                                                                <p>Kadar Trigliserida (mg/dl)</p>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonText color="primary">
                                                                    <p className="text-center">&lt; 35</p>
                                                                </IonText>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonText color="primary">
                                                                    <p className="text-center">35 &le; Tri &le; 165</p>
                                                                </IonText>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonText color="primary">
                                                                    <p className="text-center">&gt; 165</p>
                                                                </IonText>
                                                            </IonCol>
                                                            <IonCol>
                                                            </IonCol>
                                                        </IonRow>

                                                        <IonRow>
                                                            <IonCol>
                                                                <p>Kadar Insulin (%)</p>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonText color="primary">
                                                                    <p className="text-center">&lt; 5</p>
                                                                </IonText>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonText color="primary">
                                                                    <p className="text-center">5 &le; In &le; 9</p>
                                                                </IonText>
                                                            </IonCol>
                                                            <IonCol>
                                                                <IonText color="primary">
                                                                    <p className="text-center">&gt; 9</p>
                                                                </IonText>
                                                            </IonCol>
                                                            <IonCol>
                                                            </IonCol>
                                                        </IonRow>
                                                    </IonGrid>
                                                </IonCardContent>
                                            </IonCard>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </div>
                        </div>
                    </IonCard>
                </section>
            </IonContent>
        </IonPage>
    );
};

export default Diagnosys;