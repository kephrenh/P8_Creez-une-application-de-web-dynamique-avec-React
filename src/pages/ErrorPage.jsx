import { Link } from "react-router-dom";

export default function ErrorPage() {
   
   document.title = "404 - Kasa"    // Titre du document

    return (
        <main className="error">
            <h1 className="error__title" >404</h1>
            <p className="error__message">
               <span>Oups! La page que </span>
               <span>vous demandez n'existe pas.</span>
            </p>
            <Link to="/" className="error__link">
                  Retourner sur la page d'accueil
            </Link>
        </main>
    )
}