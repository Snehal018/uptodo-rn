import { StyleSheet } from "react-native";
import { AppColors, fontSize, fontWeight } from "../../../themes";
import { isAndroid } from "../../../utils/helperfunctions";
import { handleHeight } from "../../../utils/responsive";

export const styles = StyleSheet.create({
  loginTitle: {
    marginTop: handleHeight(25),
    marginBottom: handleHeight(23),
    fontSize: fontSize.header,
    fontWeight: fontWeight.bold,
  },
  loginButtom: {
    marginTop: handleHeight(35),
  },
  loginGoogle: {
    marginBottom: handleHeight(15),
  },
  loginApple: { marginTop: handleHeight(10) },
  registrationText: {
    marginTop: "auto",
    textAlign: "center",
    color: AppColors.gray,
    marginBottom: handleHeight(isAndroid ? 16 : 8),
  },
});
