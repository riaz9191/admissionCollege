import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Container from "../../components/Container";
import College from "./College";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div>
      <Helmet><title>Home | Collegia</title></Helmet>
      <Banner />
      <Container>
        <College />
        <Gallery/>
      </Container>
    </div>
  );
};

export default Home;