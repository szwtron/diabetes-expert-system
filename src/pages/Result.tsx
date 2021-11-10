import { IonButton, IonCard, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import { useContext } from "react";
import DiagnosisContext from "../data/diagnosis-context";
import './Home.css';

const Result = () => {
    const diabetesCtx = useContext(DiagnosisContext);
    console.log(diabetesCtx.diagnosis);
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Result</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="bg1">
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Result</IonTitle>
                    </IonToolbar>
                </IonHeader>
                    <IonCard>
                        <div className="container">
                            <div className="hero-inner">
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size="6">
                                            <IonImg src="assets/img/medical-tools.png" />
                                        </IonCol>
                                        <IonCol size="6">
                                            <div>
                                                <h1 className="hero-title mt-0">Hasil Diagnosa </h1>
                                                <p className="hero-paragraph">
                                                    Nama : dummy Data<br />
                                                    Jenis Kelamin : dummy Data<br />
                                                    Umur : dummy Data<br /><br />
                                                    Berdasarkan gejala yang diinput, dapat disimpulkan anda terkena penyakit : dummy Data
                                                </p>
                                                <h1 className="hero-title mt-0">Diabetes Tipe "dummy Data" </h1>
                                                <p className="hero-paragraph">dummy Data</p>
                                                <div className="hero-cta">
                                                    <IonButton color="primary" href="/Home">Finish</IonButton>
                                                </div>
                                            </div>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </div>
                        </div>
                    </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Result;