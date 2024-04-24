import { createContext, useState, useEffect } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);

  const [enalbeFlags, setEnableFlags] = useState({});

  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      // original service call
      const response = await featureFlagsDataServiceCall();
      console.log(response);
      setEnableFlags(response);
      setLoading(false);

      setEnableFlags(response);
    } catch (error) {
      console.log(error);
      setLoading(false);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagsContext.Provider value={{ loading, enalbeFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}
