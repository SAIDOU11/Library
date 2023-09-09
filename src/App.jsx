// import Badge from './components/Badges/Badge.jsx';
import BannerTitleText from './components/Banners/BannerTitleText.jsx';
import Banner from './components/Banners/index.jsx';
import useBoolean from './hooks/useBoolean.jsx';

const App = () => {
  const [value, setValue] = useBoolean(false);
  return (
    <>
      {/* <Badge color="blue" pill="pill" square="square" /> */}
      {value ? (
        <Banner.Title
          title="title"
          singleline="singleline"
          icon="icon"
        ></Banner.Title>
      ) : (
        <Banner.TitleText
          title="title"
          multiline="multiline"
          icon="icon"
        ></Banner.TitleText>
      )}
    </>
  );
};

export default App;
