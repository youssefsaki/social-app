import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>MusicLife</Typography>
        <Typography color={medium}>rock.ma</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Are you ready to ignite your passion for music and embrace the 
      soulful melodies of the guitar? Look no further! Introducing our 
      extraordinary guitar, the perfect instrument to embark on an 
      unforgettable musical journey.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
