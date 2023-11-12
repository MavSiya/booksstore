import Footer from '../components/Footer';
import CatalogPiece from '../components/CatalogPiece';
import BooksList from '../components/Books/BooksList';

function Catalog(props) {
    return (
    <div className="wrapper">
   <CatalogPiece/>
    <BooksList />
    <Footer/>
    </div>
    );
    }
    
    export default Catalog;