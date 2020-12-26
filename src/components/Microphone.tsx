import React from "react";
import ClickNHold from "react-click-n-hold";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import mic from "../assets/mic.svg";
import Typography from '@material-ui/core/Typography'
import { Theme,makeStyles,createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
interface Prop {
  onFinishListening: (voiceText: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(25, 80, 20),
        width: theme.spacing(40),
        height: theme.spacing(23),
      },
    },
  }),
);

function Microphone(props: Prop) {
  const { transcript } = useSpeechRecognition();
  const classes = useStyles();
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <div>El microfono no esta soportado por tu browser</div>;
  }

  function handleMicInit() {
    console.log("Started listening");
    
    SpeechRecognition.startListening({
      language: "en-US",
    });
  }

  function handleMicStop() {
    console.log("Stopped listening");

    SpeechRecognition.stopListening();

    props.onFinishListening(transcript);
  }

  return (
    <div className={classes.root}>
    <Paper elevation={6} >
    <div className='microphone'>
    <ClickNHold time={2} onStart={handleMicInit} onEnd={handleMicStop}>
        <img src={mic} alt='mic' className='microphone-icon' />
    </ClickNHold>
        <Typography>
        Press and Hold To Talk
        </Typography>
        </div>
        </Paper>
  </div>
  );
}


export default Microphone;