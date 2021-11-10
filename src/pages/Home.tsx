import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="bg1">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="small">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <section className="hero">
          <div className="container">
            <div className="hero-inner">
              <div className="hero-copy">
                <h1 className="hero-title mt-0">Sistem Pakar Online untuk Diagnosis Diabetes </h1>
                <p className="hero-paragraph">Diagnosa apakah kamu menderita penyakit diabetes dalam waktu kurang dari 10 menit saja!</p>
                <div className="hero-cta">
                  <IonButton className="button" color="primary" href="/diagnosis">Diagnosis</IonButton>
                </div>
              </div>
              <div className="hero-figure anime-element">
                <img width="528" height="396" src="assets/img/doctor.png"></img>
              </div>
            </div>
          </div>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Home;
