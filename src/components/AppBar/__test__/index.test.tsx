import { mount } from 'enzyme'
import React from 'react'
import ReactTestRenderer from 'react-test-renderer'
import { AppBar } from '../AppBar'

describe('index', () => {
  it('should be able to render without crashing', () => {
    ReactTestRenderer.create(<AppBar />)
  })

  it('should be render a `<AppBarComponent />`', () => {
    const component = mount(
      <AppBar pcSize="l" tabletSize="m" spSize="s">
        AppBar Component
      </AppBar>,
    )
    expect(component.find('AppBarComponent')).toHaveLength(1)
  })
})
