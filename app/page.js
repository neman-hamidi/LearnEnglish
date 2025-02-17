import Nav from "./components/nav/nav";
import Header from "./components/header/header";
import NoudUnderHeader from "./components/roudUnderHeader/roudUnderHeader";
import BestSelect from "./components/bestSelect/bestSelect";
import Teacher from "./components/teacher/teacher";
import Opinion from "./components/opinion/opinion";
import Articles from "./components/articles/articles";
import Footer from "./components/footer/footer";
export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <NoudUnderHeader />
      <BestSelect />
      <Teacher />
      <Opinion />
      <Articles />
      <Footer />
    </>
  );
}
