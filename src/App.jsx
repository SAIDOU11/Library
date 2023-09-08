import Badge from './components/Badges/Badge.jsx';
import Banner from './components/Banners/index.jsx';
import useTruthyOrFalsy from './hooks/useTruthyOrFalsy.jsx';

const App = () => {
  const [line, setLine] = useTruthyOrFalsy(true);
  return (
    <>
      {/* <Badge color="blue" pill="pill" square="square" /> */}
      {line ? (
        <Banner.Title
          icon="icon"
          title="title"
          singleline="singleline"
        ></Banner.Title>
      ) : (
        <Banner.TitleText></Banner.TitleText>
      )}
    </>
  );
};

export default App;
