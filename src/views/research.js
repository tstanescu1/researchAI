import { withAuthenticationRequired } from "@auth0/auth0-react";
import React, { useState } from "react";
import { Loading } from '../components';
import {
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import { openAIResponse } from "../services/openaiService";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  logoContainer: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    maxHeight: "75px",
  },
  textField: {
    width: "100%",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  disclaimer: {
    marginTop: theme.spacing(2),
    color: theme.palette.error.main,
  },
}));


const Research = () => {
  const classes = useStyles();
  const [promptText, setPromptText] = useState("");
  const [message, setMessage] = useState("");

  const changePromptHandler = (e) => {
    setPromptText(e.target.value);
  };

  const submitHandler = async () => {
    //const pl = { ...payload, prompt: promptText };
    //setPayload(pl);
    const answer = await openAIResponse(promptText)
    setPromptText(`${promptText + answer}`);
  };

  return (
    <div>
      <h1>Research Topics</h1>
      
      <Grid item xs={12}>
        <Container className={classes.logoContainer} maxWidth="sm">
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="sm">
          <TextField
            className={classes.textField}
            label="Enter text and submit to get a completion"
            multiline
            minRows={10}
            value={promptText}
            onChange={(e) => changePromptHandler(e)}
            variant="outlined"
          />
          <Button
            onClick={() => submitHandler()}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
          <Typography
            className={classes.disclaimer}
            variant="subtitle2"
            component="h2"
          >
          </Typography>
        </Container>
      </Grid>
    </div>
  );
};

export default withAuthenticationRequired(Research, {
  onRedirecting: () => <Loading />,
});