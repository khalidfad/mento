import { AppProvider } from "@/contexts/app";
import AppHeader from "@/components/core/app-header";
import clsx from "clsx";

interface AppShellProps {
  children: React.ReactNode;
  noContainer?: boolean;
}

export default function AppShell({ children, noContainer }: AppShellProps) {
  return (
    <AppProvider>
      <div className="flex flex-col h-full justify-center items-center">
        <div
          className={clsx(
            "md:max-w-7xl w-full",
            noContainer ? "" : "container pt-9"
          )}
        >
          <AppHeader addContainer={noContainer} />
          {children}
        </div>
      </div>
    </AppProvider>
  );
}
