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
                                        {diabetesCtx.diagnosis && diabetesCtx.diagnosis.map(diagnosis => (
                                            <IonCol key={diagnosis.id} size="6">
                                            <div>
                                                <h1 className="hero-title mt-0">Hasil Diagnosa </h1>
                                                <p className="hero-paragraph">
                                                    Nama : {diagnosis.name}<br />
                                                    Jenis Kelamin : {diagnosis.sex}<br />
                                                    Umur : {diagnosis.umur}<br /><br />
                                                    {diagnosis.hasil == "Negatif Diabetes" ?
                                                     <p>Berdasarkan gejala yang diinput, dapat disimpulkan anda <strong>Negatif Diabetes</strong></p>
                                                    :
                                                    <p>Berdasarkan gejala yang diinput, dapat disimpulkan anda terkena penyakit : <strong>{diagnosis.hasil}</strong></p>}
                                                </p>

                                                <h1 className="hero-title mt-0">{diagnosis.hasil} </h1>
                                                <div>{diagnosis.hasil == "Diabetes Tipe 1" ?
                                                    <p className="hero-paragraph">Diabetes tipe 1 atau diabetes ketergantungan insulin adalah 
                                                    suatu penyakit jangka panjang yang terjadi ketika pankreas tidak dapat memproduksi cukup 
                                                    insulin bagi tubuh. Insulin sangat dibutuhkan tubuh untuk mengontrol glukosa (gula) dalam 
                                                    sel yang didapat dari darah.</p>
                                                :diagnosis.hasil == "Diabetes Tipe 2" ?
                                                    <p className="hero-paragraph">Diabetes tipe 2 adalah kondisi di mana kadar gula dalam darah 
                                                    melebihi nilai normal. Tingginya kadar gula darah disebabkan tubuh tidak menggunakan hormon 
                                                    insulin secara normal. Hormon insulin itu sendiri adalah hormon yang membantu gula (glukosa) 
                                                    masuk ke dalam sel tubuh untuk diubah menjadi energi.</p>
                                                :diagnosis.hasil == "Negatif Diabetes" ?
                                                    <p className="hero-paragraph">Anda negatif diabetes, tetaplah atur kadar gula yang anda konsumsi
                                                    dan selalu jaga kesehatan.</p>
                                                :diagnosis.hasil == "Pra Diabetes" ?
                                                    <p className="hero-paragraph">Anda terdeteksi memiliki gejala Pra Diabetes, segera konsultasi 
                                                    ke dokter, dan jangan lupa untuk mengatur kadar gula yang anda konsumsi.</p>
                                                :null}</div>
                                                <div className="hero-cta">
                                                    <IonButton color="primary" href="/Home">Finish</IonButton>
                                                </div>
                                            </div>
                                        </IonCol>
                                        ))}
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