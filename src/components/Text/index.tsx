import React from "react";
type ValidComponent = React.ComponentType<any> | keyof JSX.IntrinsicElements;


const sizeClasses = {
  txtInterMedium16Gray600: "font-inter font-medium",
  txtInterRegular20: "font-inter font-normal",
  txtInterMedium24: "font-inter font-medium",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterRegular14WhiteA700cc: "font-inter font-normal",
  txtInterBold32WhiteA700: "font-bold font-inter",
  txtInterBold24: "font-bold font-inter",
  txtRobotoSemiBold20: "font-roboto font-semibold",
  txtInterBold20: "font-bold font-inter",
  txtInterBold20LightgreenA700: "font-bold font-inter",
  txtInterBold12Gray90002: "font-bold font-inter",
  txtPlusJakartaSansSemiBold18LightgreenA700:
    "font-plusjakartasans font-semibold",
  txtPlusJakartaSansSemiBold18Bluegray400: "font-plusjakartasans font-semibold",
  txtInterBold16LightgreenA700: "font-bold font-inter",
  txtInterBold18: "font-bold font-inter",
  txtInterBold14: "font-bold font-inter",
  txtInterMedium20WhiteA700: "font-inter font-medium",
  txtInterMedium14LightgreenA700: "font-inter font-medium",
  txtInterBold16: "font-bold font-inter",
  txtInterMedium16: "font-inter font-medium",
  txtPlusJakartaSansRomanBold20: "font-bold font-plusjakartasans",
  txtPlusJakartaSansSemiBold12: "font-plusjakartasans font-semibold",
  txtInterMedium14: "font-inter font-medium",
  txtInterBold12: "font-bold font-inter",
  txtPlusJakartaSansSemiBold16: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansSemiBold12Bluegray400: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansSemiBold14: "font-plusjakartasans font-semibold",
  txtInterMedium20: "font-inter font-medium",
  txtPlusJakartaSansSemiBold18: "font-plusjakartasans font-semibold",
  txtInterMedium14Gray50001: "font-inter font-medium",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtInterRegular18: "font-inter font-normal",
  txtInterMedium16Gray500: "font-inter font-medium",
  txtInterMedium16WhiteA700: "font-inter font-medium",
  txtSpaceGroteskBold32: "font-bold font-spacegrotesk",
  txtPlusJakartaSansSemiBold20: "font-plusjakartasans font-semibold",
  txtInterBold16WhiteA700: "font-bold font-inter",
  txtInterSemiBold18Black90001: "font-inter font-semibold",
  txtInterMedium1419: "font-inter font-medium",
  txtInterBold36: "font-bold font-inter",
  txtInterSemiBold12: "font-inter font-semibold",
  txtInterMedium32: "font-inter font-medium",
  txtInterBold32: "font-bold font-inter",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterSemiBold1608: "font-inter font-semibold",
  txtRobotoRegular16: "font-normal font-roboto",
  txtInterSemiBold20: "font-inter font-semibold",
  txtPlusJakartaSansRomanRegular16: "font-normal font-plusjakartasans",
  txtPlusJakartaSansSemiBold16Bluegray200: "font-plusjakartasans font-semibold",
  txtRobotoSemiBold14: "font-roboto font-semibold",
  txtRobotoSemiBold12: "font-roboto font-semibold",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: ValidComponent | string; // Add 'string' to accept HTML tags as well
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<TextProps> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text} ;
