import clsx from 'clsx';
import { ReactNode, useState } from 'react';

interface TabItem {
  name: string;
  label: string;
}

interface Props {
  tabs: TabItem[];
  initialTabIndex: number;
  children: ReactNode[];
}

function Tabview({ children, tabs, initialTabIndex = 0 }: Props) {
  // constants
  const MAX_TAB = tabs.length;

  // states
  const [currentTabIndex, setCurrentTabIndex] =
    useState<number>(initialTabIndex);

  // event handlers
  const handleChangeTab = (tabIndex: number) => () => {
    if (tabIndex > MAX_TAB || tabIndex < 0) {
      return;
    }
    setCurrentTabIndex(tabIndex);
  };

  // classNames
  const renderedTabButtons = tabs.map((tab, index) => ({
    ...tab,
    className: clsx(
      'tab',
      index === currentTabIndex ? 'tab-active' : ''
    ),
  }));

  return (
    <div>
      <div className="tabs tabs-boxed border-b flex justify-center">
        {renderedTabButtons.map(({ className, label, name }, index) => (
          <a className={className} key={name} onClick={handleChangeTab(index)}>
            {label}
          </a>
        ))}
      </div>
      <div>
        {children.map((child, index) => (
          <div
            key={`tab-view-container-${index}`}
            className={clsx(currentTabIndex === index ? 'display' : 'hidden')}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabview;
