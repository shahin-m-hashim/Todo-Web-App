import { useEffect } from "react";

const useMonitorWindow = (monitorFor) => {
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (monitorFor) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [monitorFor]);
};

export default useMonitorWindow;
