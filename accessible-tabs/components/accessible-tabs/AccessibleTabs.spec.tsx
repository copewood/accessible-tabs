import React from 'react';
import { render, screen } from '@testing-library/react';

import testData from '../../data/test-data.json';

import { AccessibleTabs } from '../../components/accessible-tabs/AccessibleTabs';

describe('Accessible Tabs', () => {

  it('should renderd Accessible Tabs', () => {
    const { container } = render(
      <AccessibleTabs 
        title={testData[0].title}
        tabsIndex={0}
        tabs={testData[0].tabs} 
      />
    );
    expect(container).toMatchSnapshot()
  });
});
