import { IonButton, IonCard, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import './Home.css';



const Diagnosys = () => {
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
                                            <IonButton>Submit</IonButton>
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