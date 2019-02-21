import googleTrends from 'google-trends-api';

class Trends {
  constructor() {
    this.googleTrends = googleTrends;
    this.location = 'BR';
  }

  lastTrend() {
    return this.googleTrends.realTimeTrends({ geo: this.location }, (err, results) => (err ? false : JSON.parse(results).storySummaries.trendingStories[0]));
  }
}

export default new Trends();
