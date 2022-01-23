import { Outlet  } from 'react-router-dom';
import * as React from 'react';
import logo from '../logo.svg';
import { Div, Span, Header, Footer, Image, Nav, Select, Option } from '../components/Styled'
import { withTranslation, WithTranslation } from 'react-i18next';
import { LayoutState } from '../types'

const localeKey = 'locale'

class Layout extends React.Component<WithTranslation> {

  state: LayoutState = {
    selectedLanguage: 'tr'
  }

  componentDidMount() {
    let selectedLanguage = localStorage.getItem(localeKey);

    if (!selectedLanguage) {
      selectedLanguage = 'tr';
      localStorage.setItem(localeKey, selectedLanguage);
    }

    this.setState({ selectedLanguage })
  }

  goHome () {
    window.location.href = '/';
  }

  changeLanguage = (event: any) => {
    const selectedLanguage = event.target.value
    localStorage.setItem(localeKey, selectedLanguage);

    window.location.reload()
  }

  render() {
    return (
      <Div className='wrapper'>
        <Header className='header'>
          <Nav className='row'>
            <Div className='logo-area float-left' onClick={this.goHome}>
              <Image src={logo} className='logo'/>
              <Div>Movie App</Div>
            </Div>
            <Select value={this.state.selectedLanguage} onChange={this.changeLanguage}>
              <Option value="tr">TR</Option>
              <Option value="en">EN</Option>
            </Select>
          </Nav>
        </Header>
        <Div className='content'>
          <Outlet/>
        </Div>
        <Footer className='footer'>
          <Div className='row center'>
           <Span>&copy; Movie App 2022</Span>
          </Div>
        </Footer>
      </Div>
    );
  }
}

export default withTranslation()(Layout);