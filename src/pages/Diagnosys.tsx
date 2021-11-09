import { IonButton, IonCard, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { useContext, useRef } from "react";
import { useHistory } from "react-router";
import DiagnosisContext from "../data/diagnosis-context";
import './Home.css';



const Diagnosys: React.FC = () => {

    const nameRef = useRef<HTMLIonInputElement>(null);
    const diagnosisCtx = useContext(DiagnosisContext);
    const history = useHistory();

    const addDiagnosisHandler = async () => {
        
        const enteredEmail = "";
        const enteredName = nameRef.current?.value as string;
        const enteredTelepon = 0;
        const enteredSex = "";
        const enteredUmur = 1;
        const enteredGdp = 2;
        const enteredGpp = 3;
        const enteredGpt = 4;
        const enteredGd2pp = 5;
        const enteredHba1c = 6;
        const enteredHdl = 7;
        const enteredTrigliserida = 8;
        const enteredInsulin = 9;
        const enteredHasil = 10;

        diagnosisCtx.addDiagnosis(enteredEmail, enteredName.toString(), enteredTelepon, enteredSex, enteredUmur, enteredGdp, enteredGpp, enteredGpt, enteredGd2pp, enteredHba1c, enteredHdl, enteredTrigliserida, enteredInsulin, enteredHasil);

        history.push("/result");
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Diagnosys</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="small">Diagnosys</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <section className="hero">
                    <IonCard>
                        <div className="container">
                            <div className="hero-inner">
                                <IonGrid>
                                    <IonRow>
                                        <IonItem>
                                            <IonLabel position="floating">Nama</IonLabel>
                                            <IonInput type="text" ref={nameRef}></IonInput>
                                        </IonItem>
                                    </IonRow>
                                    <IonRow>
                                    <IonCol size="6">
                                        <div>
                                            <IonItem>
                                                <IonLabel position="floating">Gula Darah Puasa (mg/dl)</IonLabel>
                                                <IonInput></IonInput>
                                            </IonItem>
                                            <IonItem>
                                                <IonLabel position="floating">Gula Plasma Puasa (mg/dl)</IonLabel>
                                                <IonInput></IonInput>
                                            </IonItem>
                                            <IonItem>
                                                <IonLabel position="floating">Gula Plasma Tidur (mg/dl)</IonLabel>
                                                <IonInput></IonInput>
                                            </IonItem>
                                            <IonItem>
                                                <IonLabel position="floating">Gula Darah 2 jam PP (mg/dl)</IonLabel>
                                                <IonInput></IonInput>
                                            </IonItem>
                                            <IonItem>
                                                <IonLabel position="floating">Kadar HbA1c (mg/dl)</IonLabel>
                                                <IonInput></IonInput>
                                            </IonItem>
                                            <IonItem>
                                                <IonLabel position="floating">Kadar HDL (mg/dl)</IonLabel>
                                                <IonInput></IonInput>
                                            </IonItem>
                                            <IonItem>
                                                <IonLabel position="floating">Kadar Trigliserida (mg/dl)</IonLabel>
                                                <IonInput></IonInput>
                                            </IonItem>
                                            <IonItem>
                                                <IonLabel position="floating">Kadar Insulin (%)</IonLabel>
                                                <IonInput></IonInput>
                                            </IonItem>
                                            <IonItem>
                                                <IonButton onClick={addDiagnosisHandler}>Submit</IonButton>
                                            </IonItem>
                                        </div>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonGrid>
                                            <IonRow>
                                                <IonCol>
                                                    <IonCardTitle></IonCardTitle>
                                                </IonCol>
                                                <IonCol>
                                                    <IonCardTitle>Gula Darah</IonCardTitle>
                                                </IonCol>
                                                <IonCol>
                                                    <IonCardTitle>Gula Darah</IonCardTitle>
                                                </IonCol>
                                                <IonCol>
                                                    <IonCardTitle>Gula Darah</IonCardTitle>
                                                </IonCol>
                                            </IonRow>
                                        </IonGrid>
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