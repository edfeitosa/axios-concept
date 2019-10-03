import muiTheme from '../../theme/muiTheme';

const styles = {
  '@global': {
    body: {
      margin: '0px',
      padding: '0px',
      fontFamily: 'Roboto'
    },
    h1: {
      color: muiTheme.palette.text.h1,
      fontSize: '1.3rem',
      margin: '0px 0px 10px 0px',
      fontWeight: '500'
    },
    h2: {
      color: muiTheme.palette.text.h2,
      fontSize: '1.1rem',
      margin: '0px 0px 10px 0px',
      fontWeight: '500'
    },
    p: {
      margin: '0px 0px 10px 0px',
      fontSize: '1rem',
      color: muiTheme.palette.text.main,
      lineHeight: '1.5'
    },
    '.alignTextToCenter': {
      textAlign: 'center'
    }
  }
}

export default styles;