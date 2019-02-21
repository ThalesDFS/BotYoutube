import Google from './services/Google';

const teste = async () => {
  console.log(await Google.Trends.lastTrend());
};

teste();
/*
Google.Trends.realTimeTrends(
  {
    geo: 'BR',
  },
  (err, results) => {
    if (err) {
      console.error(err);
    } else {
      console.log(results);
    }
  },
);
*/
