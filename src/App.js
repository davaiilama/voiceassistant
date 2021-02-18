import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from "./components/Newscards/NewsCards";
import useStyles from "./styles.js";

const alanKey =
  "b253bada754d0d8f9de8033a226b64612e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          alert("This code was executed");
        }
      },
    });
  }, []);

  return (
    <div>
      <div className={classes.logoContainer}>
        <img
          src="https://media-exp1.licdn.com/dms/image/C560BAQF8p811sSczsA/company-logo_200_200/0/1556803956512?e=2159024400&v=beta&t=ieiVBCh_Qt7wEQY1IpD7bR6bencjUbnDvcotaGiuhI8"
          className={classes.logo}
          alt="logo"
        />
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
