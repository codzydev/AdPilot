import { ThemedText } from "@/components";
import { useThemeColor } from "@/hooks";

type Props = {
  label: string;
  focused: boolean;
};

export const TabLabel = ({ label, focused }: Props) => {
  const tabIconSelected = useThemeColor({}, "tabIconSelected");
  const tabIconDefault = useThemeColor({}, "tabIconDefault");

  const textColor = focused ? tabIconSelected : tabIconDefault;

  return (
    <ThemedText lightColor={textColor} size="extraSmall">
      {label}
    </ThemedText>
  );
};
