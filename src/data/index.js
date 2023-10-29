import videos from './videos.json';
import channels from './channel.json';

const videos_copy = JSON.parse(JSON.stringify(videos));
videos_copy.forEach((video) => {
    video.uploadedAt = timeSince(new Date(video.uploadedAt));
})
// add random views like 1.2M or 232K etc
videos_copy.forEach((video) => {
    video.views = Math.floor(Math.random() * 10000000);
    video.likes = Math.floor(Math.random() * 100000);
})
// convert big numbers to 1.2M or 232K
videos_copy.forEach((video) => {
    if(video.views > 1000000) {
        video.views = (video.views / 1000000).toFixed(1) + 'M';
    } else if(video.views > 1000) {
        video.views = Math.floor(video.views / 1000) + 'K';
    }
    if(video.likes > 1000000) {
        video.likes = (video.likes / 1000000).toFixed(1) + 'M';
    } else if(video.likes > 1000) {
        video.likes = Math.floor(video.likes / 1000) + 'K';
    }
})
// add random channel thumbnail 
videos_copy.forEach((video) => {
    video.channelThumbnail = channels[Math.floor(Math.random() * channels.length)].thumbnail;
    video.channelId = channels[Math.floor(Math.random() * channels.length)].id;
})
videos = videos_copy;

function timeSince(date) {
    console.log(date);
    var seconds = Math.floor((new Date() - date) / 1000);
  
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

export const getAllSubscribedChannels = () => {
    return channels;
}

export const getAllSuggestedVideos = () => {
    return videos;
}

export const getVideo = (id) => {
    // add random channel id
    const video = videos.find((video) => video.id === id);
    video.channelId = channels[Math.floor(Math.random() * channels.length)].id;
    return video;
}

export const getChannelFromId = (id) => {
    return channels.find((channel) => channel.id === id);
}

export const getRandomChannel = () => {
    return channels[Math.floor(Math.random() * channels.length)];
}