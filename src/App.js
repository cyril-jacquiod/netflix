import "./App.css";
import data from "./asset/data/data.json";
import logo from "./asset/img/logo.jpeg";

// APELLE LA FONCTION APP
function App() {
  // console.log(data)POUR VERIFIER;

  // RENVOI PAR CATEGORY LES ELEMENTS DU TABLEAU INCLUS DANS data.json
  return (
    // DEBUT DU JSX AVEC LA DIV : LES FONCTIONS OBJETS ET VARIABLES SONT ENTRE {}
    <div className="App">
      {/* INTEGRATION DU LOGO NETFLIX DANS LE HEADER */}
      <header>
        <img src={logo} alt="" />
      </header>
      {/* CONVERTI LE DATA.JSON EN TABLEAU JSX (MAP) AVEC UN ELEMENT (ITEM ET UN INDEX*/}
      {data.map((item, index) => {
        // console.log(item);

        return (
          // UTILISE UNE PROPS DANS LE DOSSEIR COMPONENT
          // <Section key={index} elem={elem} />

          <section key={index}>
            <h2>{item.category}</h2>
            <div>
              {item.images.map((image, num) => {
                return <img key={num} src={image} alt="movie" />;
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default App;
