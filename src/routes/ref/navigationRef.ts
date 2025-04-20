// navigationRef.ts
import type { RootStackParamList } from "@/types"; // <- adjust to your types
import {
  CommonActions,
  createNavigationContainerRef,
  StackActions,
} from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function safeNavigate<T extends keyof RootStackParamList>(
  name: T,
  params?: RootStackParamList[T]
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function safeReset(payload: Parameters<typeof CommonActions.reset>[0]) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.reset(payload));
  }
}

export function safePush<T extends keyof RootStackParamList>(
  name: T,
  params?: RootStackParamList[T]
) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params));
  }
}

export function safeReplace<T extends keyof RootStackParamList>(
  name: T,
  params?: RootStackParamList[T]
) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
}
