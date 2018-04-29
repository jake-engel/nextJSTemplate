import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import stylesheet from './index.scss';

export default ({ children }) => (
  <div className="container">
    <Navbar />
    <div className="main">{children}</div>
    <Footer />
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
  </div>
);
