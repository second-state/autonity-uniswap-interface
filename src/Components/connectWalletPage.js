import React from "react";
import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import logo from "../assets/img/logo.jpg";

const styles = (theme) => ({
  paperContainer: {
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(3),
    maxWidth: 700,
    margin: "auto",
    marginTop: "200px",
  },
  fullWidth: {
    width: "100%",
  },
  title: {
    textAlign: "center",
    padding: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
  },
  hr: {
    width: "100%",
  },
  balance: {
    padding: theme.spacing(1),
    overflow: "wrap",
    textAlign: "center",
  },
  buttonIcon: {
    marginRight: theme.spacing(1),
    padding: theme.spacing(0.4),
  },
  footer: {
    marginTop: "155px",
  },
});

const useStyles = makeStyles(styles);

function ConnectWalletPage() {
  const classes = useStyles();
  return (
    <div>
      <div className="Title">
        <h1 className="navbar-logo">
          <img src={logo} className="logo"></img> ParaState Uniswap
        </h1>
      </div>

      <Container>
        <Paper className={classes.paperContainer}>
          <Typography
            variant="h6"
            className={classes.title}
            color="common.white"
          >
            Please connect an Ethereum wallet to your browser to use the
            application
          </Typography>
        </Paper>
      </Container>

      <Grid
        container
        className={classes.footer}
        direction="row"
        justifyContent="center"
        alignItems="flex-end">
        <p>This user interface was originally created by <a href="https://www.clearmatics.com/">Clearmatics.</a></p>
        <br />
        <p> Source: <a href="https://github.com/clearmatics/autonity-uniswap-interface">Autonity Uniswap Iinterface</a></p>
      </Grid>
    </div>
  );
}

export default ConnectWalletPage;
