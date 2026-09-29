import type { CSSProperties, ReactNode } from "react";
import type { Restaurant } from "@/data/restaurants/types";

interface RestaurantThemeProps {
  design: Restaurant["design"];
  children: ReactNode;
}

type ThemeStyle = CSSProperties & {
  "--brand-primary": string;
  "--brand-secondary": string;
  "--brand-accent": string;
  "--brand-background": string;
  "--brand-text": string;
};

export default function RestaurantTheme({
  design,
  children,
}: RestaurantThemeProps) {
  const style: ThemeStyle = {
    "--brand-primary": design.primaryColor,
    "--brand-secondary": design.secondaryColor,
    "--brand-accent": design.accentColor,
    "--brand-background": design.backgroundColor ?? "#F6F1E8",
    "--brand-text": design.textColor ?? "#1D1D1B",
  };

  return (
    <div style={style} className="bg-(--brand-background) text-(--brand-text)">
      {children}
    </div>
  );
}
