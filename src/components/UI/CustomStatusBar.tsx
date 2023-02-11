import { StatusBar } from "react-native";
import React from "react";
import { AppColors } from "../../themes";

const CustomStatusBar = ({ barType }: { barType: "dark" | "light" }) => {
  if (barType === "dark") {
    return (
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={AppColors.primaryDark}
      />
    );
  } else {
    return (
      <StatusBar barStyle={"dark-content"} backgroundColor={AppColors.white} />
    );
  }
};

export default CustomStatusBar;
