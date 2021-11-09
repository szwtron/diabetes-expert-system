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
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="small">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <section className="hero">
          <div className="container">
            <div className="hero-inner">
              <div className="hero-copy">
                <h1 className="hero-title mt-0">Expert System for Diabetes Diagnosys </h1>
                <p className="hero-paragraph">Diagnose whether you are suffering from diabetes or not in less than 10 minutes</p>
                <div className="hero-cta">
                  <IonButton color="primary" href="/diagnosys">Diagnosys</IonButton>
                </div>
              </div>
              <div className="hero-figure anime-element">
                <svg className="placeholder" width="528" height="396" viewBox="0 0 528 396">
                  <rect width="528" height="396"/>
                </svg>
                <div className="hero-figure-box hero-figure-box-01" data-rotation="45deg"></div>
                <div className="hero-figure-box hero-figure-box-02" data-rotation="-45deg"></div>
                <div className="hero-figure-box hero-figure-box-03" data-rotation="0deg"></div>
                <div className="hero-figure-box hero-figure-box-04" data-rotation="-135deg"></div>
                <div className="hero-figure-box hero-figure-box-05"></div>
                <div className="hero-figure-box hero-figure-box-06"></div>
                <div className="hero-figure-box hero-figure-box-07"></div>
                <div className="hero-figure-box hero-figure-box-08" data-rotation="-22deg"></div>
                <div className="hero-figure-box hero-figure-box-09" data-rotation="-52deg"></div>
                <div className="hero-figure-box hero-figure-box-10" data-rotation="-50deg"></div>
              </div>
            </div>
          </div>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Home;
