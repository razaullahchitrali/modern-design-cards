import React, { useState } from "react";
import axios from "axios";
import "./YoutubeDownloader.css"; // Import CSS file for styles

const YoutubeDownloader = () => {
  const [url, setUrl] = useState("");
  const [downloadLink, setDownloadLink] = useState("");

  const getVideoId = (targetUrl) => {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = targetUrl.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
  };

  const handleDownload = async () => {
    const videoId = getVideoId(url);
    if (!videoId) {
      alert("Invalid YouTube URL");
      return;
    }

    const options = {
      method: "GET",
      url: "https://youtube-media-downloader.p.rapidapi.com/v2/video/details",
      params: {
        videoId: videoId,
      },
      headers: {
        "X-RapidAPI-Key": "e13d8c8570mshc8ee18a6b3ea0c6p100b95jsn84134baf52ae",
        "X-RapidAPI-Host": "youtube-media-downloader.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      // Assuming the response contains the download link
      const { downloadLink } = response.data;
      setDownloadLink(downloadLink);
      // You may want to open the download link in a new tab or provide a download button
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>YouTube Video Downloader</h1>
      <div className="input-group">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter YouTube Video URL"
        />
        <button className="btn-download" onClick={handleDownload}>
          Download
        </button>
      </div>
      {downloadLink && (
        <div className="download-link">
          <p>Download link:</p>
          <a href={downloadLink} target="_blank" rel="noopener noreferrer">
            {downloadLink}
          </a>
        </div>
      )}
    </div>
  );
};

export default YoutubeDownloader;
