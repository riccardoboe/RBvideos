# RBvideos a Youtube clone

## Description

This is a very barebone clone of the popular online video-sharing platform Youtube. This application replicates the basic features and functionalities of YouTube. It aims to provide a similar video-sharing platform for the user. 
<a href="(https://rbvideos.netlify.app/)" target="_blank"> Live Demo </a>

### Features

- Video Feed and Search: It has a search functionality to allow users to find videos based on keywords, tags, categories, and user profiles. It can also provide recommendations based on the user's viewing history and preferences.
- Channel card: It allows users to search and view any youtube channel. And see all the channel's own videos.
- Data analytics: It provides channel & video analytics to track the performance of videos and channels, showing a like, views, and subscriber count.

### Built with

- React
- RapidAPI
- MUI
- Axios

### How to setup
#### Download dependencies

```
npm install
```

#### Start the app

```
npm start
```

#### Set environment variables

- Create .env file inside the root directory.
- Find and copy your 'X-RapidAPI-Key' from: https://rapidapi.com/ytdlfree/api/youtube-v31/
- Paste this in your .env file with the key inside the quotation marks.
```
REACT_APP_RAPID_API_KEY=" " 
```

### To do

- Sign in / Sign up functionality.
