import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const loadComponent = (componentName: string) => {
  try {
    return dynamic(() =>
      import(`../components/generated/${componentName}`).then(
        (mod) => mod.default,
      ),
    );
  } catch (err) {
    return null;
  }
};

const DynamicPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const componentName = Array.isArray(slug) ? slug[0] : slug || "index";
  console.log("🚀 ~ componentName:", componentName);

  const DynamicComponent = loadComponent(componentName);
  console.log("🚀 ~ DynamicComponent:", DynamicComponent);

  if (!DynamicComponent) {
    return (
      <>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-bold">404</h1>
          <p className="mt-4 text-xl">
            The page you are looking for does not exist.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex items-center justify-center md:pt-20">
        <DynamicComponent />
      </div>
    </>
  );
};

export default DynamicPage;
