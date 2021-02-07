import React from 'react';
import {
  Button,
  AppBar,
  Typography,
  Tabs,
  Tab,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Paper,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  CssBaseline,
  Container,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
// import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router';
import logo from './logo.svg';
import './App.css';
import Home from './presentational/pages/Home';
import About from './presentational/pages/About';
import MenuBar from './presentational/molecules/MenuBar';
import Footer from './presentational/molecules/Footer';

// function App() {
// return (
// type Props = { size: 'large' };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  button: {
    backgroundColor: 'green',
  },
  link: {
    textDecoration: 'none',
  },
  tab: {
    color: 'red',
  },
}));
const App: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (
    event: React.ChangeEvent<unknown>,
    newValue: number,
  ) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <MenuBar />
      <Container>
        <Link to={{ pathname: '/' }}>
          <Button variant="contained" color="primary">
            Home
          </Button>
        </Link>
        <Button variant="contained" color="primary" component={Link} to="/">
          Home2
        </Button>
        <Button variant="contained" color="primary">
          <Link to={{ pathname: '/about' }}>About</Link>
        </Button>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route>
            <div className="App">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                centered
              >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
              </Tabs>
              <AppBar position="sticky">aiueo</AppBar>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                aiueo
              </Button>
              <Button variant="contained" color="primary">
                aiueo
              </Button>
              <Typography>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et.
              </Typography>
              <Typography>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et.
              </Typography>
              <Typography>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et.
              </Typography>
              <Typography>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et.
              </Typography>
              <Typography>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et.
              </Typography>
              <Typography>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et.
              </Typography>
              <Typography>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et.
              </Typography>
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit
                  <code>src/App.tsx</code>
                  and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          </Route>
        </Switch>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
