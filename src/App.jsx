// import Badge from './components/Badges/Badge.jsx';
import Banner from './components/Banners/index.jsx';
import useBoolean from './hooks/useBoolean.jsx';

const App = () => {
  const [value, setValue] = useBoolean(false);
  return (
    <>
      {/* <Badge color="blue" pill="pill" square="square" /> */}

      {value ? (
        <Banner.NeutralTitle
          title="title"
          singleline="singleline"
          icon="icon"
        ></Banner.NeutralTitle>
      ) : (
        <Banner.NeutralTitleText
          title="title"
          multiline="multiline"
          icon="icon"
        ></Banner.NeutralTitleText>
      )}
    </>
  );
};

export default App;
