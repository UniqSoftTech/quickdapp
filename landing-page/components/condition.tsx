import { ReactNode } from "react";

const Condition = ({
  condition,
  truth,
  untruth,
}: {
  condition: boolean;
  truth?: ReactNode;
  untruth?: ReactNode;
}) => {
  if (condition) return truth || null;
  return untruth || null;
};

export default Condition;
