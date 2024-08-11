import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const loadComponent = (componentName: string) => {
  try {
    return dynamic(() =>
      import(`../components/generated/${componentName}`).catch(() => {
        return () => <div>Component not found: {componentName}</div>;
      }),
    );
  } catch (err) {
    return () => <div>Error loading component: {componentName}</div>;
  }
};

const DynamicPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const componentName = Array.isArray(slug) ? slug[0] : slug || "index";
  const DynamicComponent = loadComponent(componentName);

  return (
    <>
      <div className="flex items-center justify-center md:pt-20">
        <DynamicComponent />
      </div>
    </>
  );
};

export default DynamicPage;
