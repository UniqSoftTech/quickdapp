import React, { ReactNode, ReactElement, Children } from "react";

type Props<T> = {
  render: (item: T, index: number) => ReactNode;
  items: T[];
};

const List = <T,>({ render, items }: Props<T>): ReactNode =>
  Children.toArray(items?.map?.((item, index) => render(item, index)));

export default List;
