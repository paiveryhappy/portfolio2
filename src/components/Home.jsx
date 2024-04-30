import banner from "../assets/banner.png";
import Banner from "../shared/Banner";

function Home() {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto mt-24">
      <Banner
        banner={banner}
        heading={"Develop your skill without deligence"}
        subheading={
          "good example of a paragrapth contains a topic sentence, details and a conslusion. There are many different kinds of animals that live in China."
        }
        btn1={"Get Started"}
        btn2={"Discount"}
      />
    </div>
  );
}

export default Home;
