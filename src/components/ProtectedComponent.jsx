import React, { useEffect, useState } from "react";

const isAuthentic = (WrappedComponent) => {
  return function ProtectedComponent(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem("key");
      if (token === "YO") {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    }, []);

    if (!isAuthenticated) {
      return <div>Please authenticate yourself</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

const SomeComponent = () => {
  return <div>Yes, you are an authenticated person!</div>;
};

const ProtectedComponent = isAuthentic(SomeComponent);

export default ProtectedComponent;
