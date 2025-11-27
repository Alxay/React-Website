import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Sharecode from "../components/sharecode";

function App() {
  return (
    <>
      <Navigation />
      <section className="mt-7 mb-10 bg-[#0f0f0f]">
        <Sharecode />
      </section>
      <Footer />
    </>
  );
}
export default App;
