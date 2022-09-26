import React, { FC, useEffect } from 'react';

import { TabsManual } from '../tabs-manual/TabsManual';

import sanitizeHtml from 'sanitize-html';

import { 
  StyledTabs,
  StyledTabList,
  StyledTab,
  StyledTabPanel
} from './AccessibleTabs.styles';

type Tab = {
  name: string;
  link: string;
  fullName: string;
  bio: string;
}

type AccessibleTabsProps = {
  title: string;
  tabsIndex: number;
  tabs: Array<Tab>;
};

export const AccessibleTabs: FC<AccessibleTabsProps> = ({title, tabsIndex, tabs}) => {

  // Initialize tablist
  useEffect(() => {
      var tablists = document.querySelectorAll('[role=tablist].manual');
      for (var i = 0; i < tablists.length; i++) {
        new TabsManual(tablists[i]);
      }
  }, [])

  return <>
    <StyledTabs>
      <h3 id={`tablist-${tabsIndex}`}>
        {title}
      </h3>

      <StyledTabList 
          key={`tablist-${tabsIndex}`} 
          role="tablist"
          aria-labelledby={`tablist-${tabsIndex}`}
          className="manual">

        {tabs.map((tab, index) => 
          <StyledTab 
            id={`tablist-${tabsIndex}-tab-${index}`}
            key={`tablist-${tabsIndex}-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={index === 0 ? 'true' : 'false'}
            aria-controls={`tablist-${tabsIndex}-tabpanel-${index}`}>
            <span className="focus">
              {tab.name}
            </span>
          </StyledTab>
        )}
      </StyledTabList>

      {tabs.map((tab, index) => {
        const cleanBio = sanitizeHtml(tab.bio);
        return (
          <StyledTabPanel 
            id={`tablist-${tabsIndex}-tabpanel-${index}`}
            key={`tablist-${tabsIndex}-tabpanel-${index}`}
            role="tabpanel"
            aria-labelledby={`tablist-${tabsIndex}-tab-${index}`}>
            <p>
              <a href={tab.link}>
                {tab.fullName}
              </a>
              <span dangerouslySetInnerHTML={
                {__html: cleanBio}
              }/>
            </p>
          </StyledTabPanel>
        )
      })}
    </StyledTabs>
  </>;
};
